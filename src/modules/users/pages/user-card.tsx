import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import {
	MailIcon,
	MapPinIcon,
	PhoneIcon,
	UserIcon,
} from 'lucide-react';

import { MuseumItems } from '@/modules/museum/pages/museum-items';

export const UserCard = () => {

	// const { id } = useParams();

	return (
		<>
			<Tabs defaultValue='account' className='w-full mt-4'>
				<TabsList>
					<TabsTrigger value='account'>Профиль</TabsTrigger>
				</TabsList>
				<TabsContent value='account'>
					<div className='w-full space-y-18'>
						<div className='p-6 bg-gray-100 rounded-lg dark:bg-gray-800'>
							<div className='grid gap-4 sm:grid-cols-2'>
								<div className='flex items-center space-x-4'>
									<Avatar className='h-14 w-14'>
										<AvatarImage
											src='https://github.com/shadcn.png'
											alt='@shadcn'
										/>
										<AvatarFallback className='border-2 bg-white'>
											TA
										</AvatarFallback>
									</Avatar>
									<div className='space-y-1.5'>
										<div className='flex items-center space-x-2'>
											<h1 className='text-2xl font-bold'>Иван Петров</h1>
											<Badge>Admin</Badge>
										</div>
										<p className='text-gray-500 dark:text-gray-400'>
											Работник музея
										</p>
									</div>
								</div>
								<div className='space-y-2 text-sm'>
									<div className='flex items-center space-x-2'>
										<UserIcon className='w-4 h-4 flex-shrink-0' />
										<span>Joined on June 3, 2018</span>
									</div>
									<div className='flex items-center space-x-2'>
										<MailIcon className='w-4 h-4 flex-shrink-0' />
										<span>alice@example.com</span>
									</div>
									<div className='flex items-center space-x-2'>
										<PhoneIcon className='w-4 h-4 flex-shrink-0' />
										<span>+1 (123) 456-7890</span>
									</div>
									<div className='flex items-center space-x-2'>
										<MapPinIcon className='w-4 h-4 flex-shrink-0' />
										<span>New York, NY</span>
									</div>
								</div>
							</div>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-16'>
							<MuseumItems />
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</>
	);
};
