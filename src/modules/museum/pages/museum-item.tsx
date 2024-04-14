import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MuseumCard } from "../types/cards";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getItem } from "../api/museum";
import { Spinner } from "@/components/layouts/spinner";
import { CreatedTask, createTask } from "../api/model";
import { MuseumItemModel } from "../components/museum-item-model";

type MuseumCardProps = {
	item: MuseumCard
}
export const MuseumItem = ({ item }: MuseumCardProps) => {
	const [isModelOpen, setIsModelOpen] = useState(false);
	const [img, setImg] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);
	const [task, setTask] = useState('')

	const setImgs = async () => {
		setIsLoading(true);
		const { content } = await getItem({ itemId: item.id, fileId: item.poster });
		if (content) setImg(content.url)
		setIsLoading(false);
	};

	useEffect(() => {
		setImgs();
	}, [])

	const handleOpenModel = () => {
		setIsModelOpen(prev => {
			const imageUrl = 'https://storage.milkhunters.ru/hack-sochi/85ac3e9a-8e52-4577-8e06-51d22721b52c/dccd7157-6f9c-4815-ab61-a741c1a0ed03';

			// Создаем ссылку
			const downloadLink = document.createElement('a');
			downloadLink.href = imageUrl;

			// Устанавливаем атрибут для загрузки файла и имя файла
			downloadLink.setAttribute('download', 'image.jpg');
			// Если вы хотите изменить имя файла на основе URL, вы можете сделать это, например:
			// downloadLink.setAttribute('download', imageUrl.substring(imageUrl.lastIndexOf('/') + 1));

			// Получаем строковое представление ссылки
			const downloadLinkString = downloadLink.href;
			console.log(img)

			console.log(downloadLinkString)
			if (!prev) {
				createTask("https://storage.milkhunters.ru/hack-sochi/85ac3e9a-8e52-4577-8e06-51d22721b52c/dccd7157-6f9c-4815-ab61-a741c1a0ed03.jpeg")
					.then((data: Response) => data.json())
					.then((data: CreatedTask) => data.result && setTask(data.result))
			}
			return !prev
		});
	}

	if (isLoading) return <Spinner />
	return (
		<Card>
			<div className='aspect-[4/3]'>
				{isModelOpen ? <MuseumItemModel taskId={task} /> : <img
					alt='Image'
					className='object-cover'
					src={img}
					style={{
						aspectRatio: '400/300',
						objectFit: 'cover',
						borderRadius: '15px 15px 0 0',
					}}
				/>}
			</div>
			<CardContent className='p-4 flex items-center justify-center gap-4'>
				<div className='grid gap-0.5 text-center'>
					<h3 className='text-sm font-semibold leading-none'>
						{item.title}
					</h3>
					<p className='text-sm text-gray-500'>by {item.owner_id}</p>
				</div>
			</CardContent>
			<CardFooter className='flex justify-center flex-col gap-3 relative'>
				<div className='flex'>
					{item.tags?.map(tag => (
						<span className='text-xs bg-gray-200 px-2 py-1 rounded-full mr-1'>
							#{tag.title}
						</span>
					))}
				</div>
				<Button size='sm' variant={'outline'}>
					Подробнее
				</Button>
				<div className="absolute bottom-2 left-2">
					<Button onClick={handleOpenModel} size='sm' variant={'outline'}>
						{isModelOpen ? '2D' : '3D'}
					</Button>
				</div>
			</CardFooter>
		</Card>
	)
};
