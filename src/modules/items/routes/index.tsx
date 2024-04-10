import { Route, Routes } from 'react-router-dom';
import { MuseumItems } from '../pages/museum-items';

export const MuseumItemsRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<MuseumItems />} />
		</Routes>
	);
};
