import { MuseumCard } from "../types/cards";
import { MuseumItem } from "./museum-item";

export const MuseumItems = ({items}: {items: Array<MuseumCard> | null}) => {
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
			modelUrl: '/src/assets/adamHead.json'
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
			modelUrl: '/src/assets/Box.json'

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
			modelUrl: '/src/assets/adamHead.json'
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
			modelUrl: '/src/assets/adamHead.json'
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
			modelUrl: '/src/assets/adamHead.json'
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
			modelUrl: '/src/assets/adamHead.json'
		},
	];
	return <>
		{items?.length ? items.map((item, index) => {
			return (
				<MuseumItem item={item} key={index} />
			);
		}): <h1 className="text-3xl">Вы еще ничего не загрузили...</h1>}
	</>;
};
