import { useRoutes } from 'react-router-dom';
import { commonRoutes, protectedRoutes, publicRoutes } from './routes';

export const RootRoutes = () => {
	return useRoutes([...commonRoutes, ...publicRoutes, ...protectedRoutes]);
};
