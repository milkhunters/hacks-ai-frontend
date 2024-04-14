import { MuseumItem } from "./museum-item";

export const MuseumItems = () => {
	const ITEMS = [
		{
			title: 'Скульптура ',
			src: 'https://www.i2img.com/download/url-to-image_en_3_198_1129641536661b147e45e841.22348324/url2img_661b14a023cf3.jpeg?81',
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
			src: 'https://www.i2img.com/download/url-to-image_en_3_198_1278039845661b161f94a6a3.47558535/url2img_661b1621bafd3.jpeg?401',
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
			src: 'https://www.i2img.com/download/url-to-image_en_3_198_1479404738661b190c86e657.78296165/url2img_661b190dc82a8.jpeg?140',
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
			title: 'Яблоко Адама',
			src: 'https://i1.u-mama.ru/3e3/98e/8b0/ee61cba6b5a1aaab3e20bcf312726b9c.jpg',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Яблоко',
				},
				{
					title: 'Адам',
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
			src: 'https://www.i2img.com/download/url-to-image_en_3_198_1412721347661b1a760b3545.30193683/url2img_661b1a7829a3f.jpeg?113',
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
	return <>
		{ITEMS.map((item, index) => {
			return (
				<MuseumItem item={item} key={index} />
			);
		})}
	</>;
};
