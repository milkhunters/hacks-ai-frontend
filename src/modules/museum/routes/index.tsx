import { Route, Routes } from 'react-router-dom';
import { MyMuseum } from '../pages/my-museum';

export const MuseumItemsRoutes = () => {
	return (
		<Routes>
			<Route path='/my' element={<MyMuseum />}/>
		</Routes>
	);
};
