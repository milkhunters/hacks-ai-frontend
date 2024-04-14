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
import { useEffect, useState } from 'react';
import { UserResponse } from '../types/response';
import { getCurrentUser } from '../api/users';
import { useNavigate } from 'react-router-dom';
import { MuseumCard } from '@/modules/museum/types/cards';
import { getItem, getUserItems } from '@/modules/museum/api/museum';

export const UserCard = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState<UserResponse | null>(null);
	const [items, setItems] = useState<Array<MuseumCard>>([]);

	const [isUserLoading, setIsUserLoading] = useState<boolean>(false);
	const [isItemsLoading, setIsItemsLoading] = useState<boolean>(false);

	useEffect(() => {
		const getAndSetCurrentUser = async () => {
			setIsUserLoading(true)
			const response = await getCurrentUser();
			setIsUserLoading(false);
			if (response.content) setUser(response.content)
		};

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

		getAndSetCurrentUser();
		getAndSetUserItems();
	}, []);

	if (isUserLoading) return <span className='mr-2 h-4 w-4 animate-spin' />
	if (!isUserLoading && !user) navigate('/');

	return (
		<>
			<Tabs defaultValue='account' className='w-full mt-4'>
				<TabsList>
					<TabsTrigger value='account'>Профиль</TabsTrigger>
					<TabsTrigger value='loaded'>Загруженное</TabsTrigger>
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
											{user?.first_name} {user?.last_name}
										</AvatarFallback>
									</Avatar>
									<div className='space-y-1.5'>
										<div className='flex items-center space-x-2'>
											<h1 className='text-2xl font-bold'>{user?.first_name} {user?.last_name}</h1>
											<Badge>{user?.role.title}</Badge>
										</div>
										<p className='text-gray-500 dark:text-gray-400'>
											{user?.role.title.toLocaleLowerCase() === 'admin' ? 'Администратор музея' : 'Работник музея'}
										</p>
									</div>
								</div>
								<div className='space-y-2 text-sm'>
									<div className='flex items-center space-x-2'>
										<UserIcon className='w-4 h-4 flex-shrink-0' />
										<span>Работает с {user?.created_at.slice(0, 10)}</span>
									</div>
									<div className='flex items-center space-x-2'>
										<MailIcon className='w-4 h-4 flex-shrink-0' />
										<span>{user?.email}</span>
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
					</div>
				</TabsContent>
				<TabsContent value='loaded'>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-16'>
						<MuseumItems items={items}/>
					</div>
				</TabsContent>
			</Tabs>
		</>
	);
};
