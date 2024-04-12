import { Suspense } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { MainLogo } from './logo';

const UserNav = () => {
	const navigate = useNavigate();

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' className='relative h-8 w-8 rounded-full'>
						<Avatar className='h-9 w-9'>
							<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
							<AvatarFallback>TA</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-56' align='end' forceMount>
					<DropdownMenuLabel className='font-normal'>
						<div className='flex flex-col space-y-1'>
							<p className='text-sm font-medium leading-none'>aibryx</p>
							<p className='text-xs leading-none text-muted-foreground'>
								aibryx@example.com
							</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem onClick={() => navigate('/app/users/aibryx')}>
							Профиль
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							История
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Настройки
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						Выйти
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

const MainNav = () => {
	return (
		<nav className='hidden md:flex items-center space-x-6 lg:space-x-6 mx-6'>
			<Link
				to='/'
				className='text-sm font-medium transition-colors hover:text-primary'
			>
				Обзор
			</Link>
			<Link
				to='/museum/my'
				className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
			>
				Мой музей
			</Link>
			<Link
				to='/app/users/setting'
				className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
			>
				Настройки
			</Link>
		</nav>
	);
};

export const MainLayout = () => {
	return (
		<>
			<header className='border-b'>
				<div className='flex h-16 items-center'>
					<MainLogo classnames='mx-6' />
					<MainNav />
					<div className='ml-auto flex items-center space-x-4 mx-6'>
						<UserNav />
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
