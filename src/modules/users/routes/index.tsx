import { Routes, Route } from 'react-router-dom';
import { UserCard } from '../pages/user-card';

export const UsersRoutes = () => {
	return (
		<Routes>
			<Route path='/:id' element={<UserCard />} />
		</Routes>
	);
};
