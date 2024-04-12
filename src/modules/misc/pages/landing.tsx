import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MuseumItems } from '@/modules/museum/pages/museum-items';
import { Search } from 'lucide-react';

export const Landing = () => {
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
				<MuseumItems />
			</div>
		</>
	);
};
