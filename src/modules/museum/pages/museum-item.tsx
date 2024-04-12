import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MuseumCard } from "../types/cards";
import { Button } from "@/components/ui/button";

type MuseumCardProps = {
	item: MuseumCard
}
export const MuseumItem = ({item}: MuseumCardProps) => {
	return <Card>
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
};
