import { Route, Routes } from 'react-router-dom';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path='/sign-in' />
			<Route path='/sign-up' />
		</Routes>
	);
};
