import { Spinner } from '@/components/layouts/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getSearchItems, getSearchItemsByText, getUserItems, makeSearchTask, uploadFileOnS3, uploadSearchFileUrl } from '@/modules/museum/api/museum';
import { useDebounce } from '@/modules/museum/hooks/useDebounce';
import { MuseumItems } from '@/modules/museum/pages/museum-items';
import { MuseumCard } from '@/modules/museum/types/cards';
import { Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

export const Landing = () => {
	const [items, setItems] = useState<Array<MuseumCard>>([]);
	const [search, setSearch] = useState('')

	const [, setFileId] = useState<string>('');
	const [uploadFile, setUploadFile] = useState<File | null>(null);

	const [findedItems, setFindedItems] = useState<Array<MuseumCard>>([]);
	const [isItemsLoading, setIsItemsLoading] = useState<boolean>(false);

	const intervalRef = useRef<number>();

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target && event.target.files?.length) {
			const file = event.target.files[0];
			setUploadFile(file);
		}
	};

	const makeUploadUrlFile = async () => {
		setIsItemsLoading(true);
		const { content, error } = await uploadSearchFileUrl({ filename: uploadFile?.name ?? '', content_type: uploadFile?.type ?? '' })
		if (error) {
			toast.error(error.content);
			return;
		}

		if (content?.file_id) {
			setFileId(content.file_id);

			if (!uploadFile || !content.file_id) {
				toast.error('Неизвестная ошибка');
				return;
			}

			const { error: s3Error } = await uploadFileOnS3({ fields: content.upload_url.fields, file: uploadFile, url: content.upload_url.url });

			if (s3Error) {
				toast.error('Неизвестная ошибка');
				return;
			}

			const { error: makeTaskError } = await makeSearchTask(content?.file_id);

			if (makeTaskError) {
				toast.error(makeTaskError.content);
				return;
			}

			intervalRef.current = window.setInterval(async () => {
				const { content: finded } = await getSearchItems(content?.file_id);
				if (finded) {
					setFindedItems(finded);
					clearInterval(intervalRef.current)
					setIsItemsLoading(false);
				}
			}, 1000)

		}
	}


	useEffect(() => {
		if (uploadFile) makeUploadUrlFile();

		return () => {
			clearInterval(intervalRef.current)
			setFindedItems([]);
		}

	}, [uploadFile]);



	const searchQuery = useDebounce(search, 2000)

	useEffect(() => {
		if (searchQuery || search.length < 0) {
			const getSearchItems = async () => {
				const response = await getSearchItemsByText(searchQuery)
				if (response.content) {
					setItems(response.content);
				}
			}
			getSearchItems();
		}
	}, [searchQuery])

	useEffect(() => {
		const getAndSetUserItems = async () => {
			const { content } = await getUserItems();
			if (content) {
				setItems(content);
			}
		}
		getAndSetUserItems();
	}, []);

	return (
		<>
			<div className='flex justify-center mt-4'>
				<div className='flex w-full max-w-lg items-center space-x-2'>
					<Input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} value={search} type='text' placeholder='Введите название объекта...' />
					<Label htmlFor='picture'></Label>
					<Input onChange={handleFileChange} id='picture' type='file' className='' />
					<Button type='submit'>
						<Search size={20} />
					</Button>
				</div>
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8'>
				{
					findedItems.length ? <>
						<MuseumItems items={findedItems} />
					</> : isItemsLoading ? <Spinner /> : <MuseumItems items={items} />
				}
			</div>
		</>
	);
};

