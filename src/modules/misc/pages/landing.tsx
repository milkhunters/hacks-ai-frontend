import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getItem, getUserItems } from '@/modules/museum/api/museum';
import { MuseumItems } from '@/modules/museum/pages/museum-items';
import { MuseumCard } from '@/modules/museum/types/cards';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Landing = () => {
	const [items, setItems] = useState<Array<MuseumCard>>([]);

	const [isItemsLoading, setIsItemsLoading] = useState<boolean>(false);

	useEffect(() => {
		const getAndSetUserItems = async () => {
			setIsItemsLoading(true)
			const response = await getUserItems();
			console.log(response);
			setIsItemsLoading(false);
			if (response.content) {
				for (let item of response.content) {
					const { content: findedPoster } = await getItem({ itemId: item.id, fileId: item.poster ?? '' });
					setItems([...items, {...item, poster: findedPoster?.url ?? 'https://images.unsplash.com/photo-1712839398283-5b5bc134d9dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D'}])
				}
			}
		}
		getAndSetUserItems();
	}, []);

	return (
		<>
			<div className='flex justify-center mt-4'>
				<div className='flex w-full max-w-lg items-center space-x-2'>
					<Input type='text' placeholder='Введите название объекта...' />
					<Label htmlFor='picture'></Label>
					<Input id='picture' type='file' className='' />
					<Button type='submit'>
						<Search size={20} />
					</Button>
				</div>
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8'>
				<MuseumItems items={items}/>
			</div>
		</>
	);
};

