import { MainLayout } from '@/components/layouts/main-layout';
import { AuthRoutes } from '@/modules/auth';
import { Landing, NotFound } from '@/modules/misc';
import { UsersRoutes } from '@/modules/users';

export const commonRoutes = [
	{
		path: '/',
		element: <Landing />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
];

export const publicRoutes = [
	{
		path: 'auth/*',
		element: <AuthRoutes />,
	},
];

export const protectedRoutes = [
	{
		path: 'app/',
		element: <MainLayout />,
		children: [{ path: 'users/*', element: <UsersRoutes /> }],
	},
];
