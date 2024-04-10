import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';

export const Landing = () => {
	const ITEMS = [
		{
			title: 'Скульптура ',
			src: 'https://images.unsplash.com/photo-1614016103260-b9d2628369bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCVEMCVCOCVEMSU4MSVEMCVCQSVEMSU4MyVEMSU4MSVEMSU4MSVEMSU4MiVEMCVCMiVEMCVCRXxlbnwwfHwwfHx8MA%3D%3D',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Скульптура',
				},
				{
					title: 'Абстракция',
				},
				{
					title: 'Металл',
				},
			],
		},
		{
			title: "Скульптура 'Свобода'",
			src: 'https://images.unsplash.com/photo-1645523736056-50d602dbee7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUQwJUJDJUQxJTgzJUQwJUI3JUQwJUI1JUQwJUI5fGVufDB8fDB8fHww',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Скульптура',
				},
				{
					title: 'Свобода',
				},
				{
					title: 'Мрамор',
				},
			],
		},
		{
			title: 'Крепость Маркиза де Сада',
			src: 'https://images.unsplash.com/photo-1711747707558-51259ce94c43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8JUQwJUJDJUQxJTgzJUQwJUI3JUQwJUI1JUQwJUI5fGVufDB8fDB8fHww',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Крепость',
				},
				{
					title: 'Маркиз',
				},
			],
		},
		{
			title: 'Картина "Цветы"',
			src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Картина',
				},
				{
					title: 'Цветы',
				},
			],
		},
		{
			title: 'Картина "Портрет девушки"',
			src: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Картина',
				},
				{
					title: 'Портрет',
				},
			],
		},
		{
			title: 'Картина "Живопись в стиле абстракционизма"',
			src: 'https://plus.unsplash.com/premium_photo-1672287578303-a9832c84a2a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHx8MA%3D%3D',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Картина',
				},
				{
					title: 'Абстракция',
				},
			],
		},
	];

	return (
		<>
			<div className='flex justify-center mt-4'>
				<div className='flex w-full max-w-lg items-center space-x-2'>
					<Input type='text' placeholder='Введите название объекта...' />
					{/* <Label htmlFor='picture'></Label>
				<Input id='picture' type='file' className='' /> */}
					<Button type='submit'>
						<Search size={20} />
					</Button>
				</div>
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8'>
				{ITEMS.map(item => {
					return (
						<Card>
							<div className='aspect-[4/3]'>
								<img
									alt='Image'
									className='object-cover'
									src={item.src}
									style={{
										aspectRatio: '400/300',
										objectFit: 'cover',
										borderRadius: '15px 15px 0 0',
									}}
								/>
							</div>
							<CardContent className='p-4 flex items-center justify-center gap-4'>
								<div className='grid gap-0.5 text-center'>
									<h3 className='text-sm font-semibold leading-none'>
										{item.title}
									</h3>
									<p className='text-sm text-gray-500'>by {item.author}</p>
								</div>
							</CardContent>
							<CardFooter className='flex justify-center flex-col gap-3'>
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
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</>
	);
};
