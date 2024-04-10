import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/sign-in';
import { SignUp } from '../pages/sign-up';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path='/sign-in' element={<SignIn />} />
			<Route path='/sign-up' element={<SignUp />} />
		</Routes>
	);
};
