import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { MainLogo } from './logo';
import { UserResponse } from '@/modules/users/types/response';
import { getCurrentUser } from '@/modules/users/api/users';
import { signOut } from '@/modules/auth/api/auth';
import { toast } from 'sonner';
import { Spinner } from './spinner';

const UserNav = ({ user, isLoading }: { user: UserResponse | null, isLoading: boolean }) => {
	const navigate = useNavigate();

	const tryLogout = async () => {
		const { error } = await signOut();

		if (error) toast.error(error.content);
		
		window.location.reload();

	};

	if (isLoading) return null;

	return (
		<>
			{
				user ?
					<>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='ghost' className='relative h-8 w-8 rounded-full'>
									<Avatar className='h-9 w-9'>
										<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
										<AvatarFallback>{user?.first_name} {user?.last_name}</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='w-56' align='end' forceMount>
								<DropdownMenuLabel className='font-normal'>
									<div className='flex flex-col space-y-1'>
										<p className='text-sm font-medium leading-none'>{user?.first_name} {user?.last_name}</p>
										<p className='text-xs leading-none text-muted-foreground'>
											{user?.email}
										</p>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuItem onClick={() => navigate('/app/users/aibryx')}>
										Профиль
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuItem >
									<Button size="sm" variant="outline" onClick={tryLogout} >
										Выйти
									</Button>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</>
					:
					<Button onClick={() => navigate('/auth/sign-in')}>Войти</Button>
			}
		</>
	);
};

const MainNav = ({ user, isLoading }: { user: boolean, isLoading: boolean }) => {

	if (isLoading) return null;

	return (
		<nav className='hidden md:flex items-center space-x-6 lg:space-x-6 mx-6'>
			<Link
				to='/'
				className='text-sm font-medium transition-colors hover:text-primary'
			>
				Обзор
			</Link>
			{
				user ? <>
					<Link
						to='/museum/my'
						className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
					>
						Мой музей
					</Link>
					<Link
						to='/app/users/aibryx'
						className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
					>
						Профиль
					</Link>
				</> : null
			}

		</nav>
	);
};

export const MainLayout = () => {
	const [user, setUser] = useState<UserResponse | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const getAndSetCurrentUser = async () => {
			setIsLoading(true)
			const response = await getCurrentUser();
			setIsLoading(false);
			console.log(response);
			if (response.content) setUser(response.content)
		};

		getAndSetCurrentUser();
	}, []);

	return (
		<>
			<header className='border-b'>
				<div className='flex h-16 items-center'>
					<MainLogo classnames='mx-6' />
					<MainNav user={!!user} isLoading={isLoading} />
					<div className='ml-auto flex items-center space-x-4 mx-6'>
						<UserNav user={user} isLoading={isLoading} />
					</div>
				</div>
			</header>
			<main className='mx-6'>
				<Suspense>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};
