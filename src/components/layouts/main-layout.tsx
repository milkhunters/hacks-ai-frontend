import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
	return (
		<>
			<Suspense>
				<Outlet />
			</Suspense>
		</>
	);
};
