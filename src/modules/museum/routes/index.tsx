import { Route, Routes } from 'react-router-dom';
import { MuseumItems } from '../pages/museum-items';
import { MyMuseum } from '../pages/my-museum';

export const MuseumItemsRoutes = () => {
	return (
		<Routes>
			<Route path='/items' element={<MuseumItems />} />
			<Route path='/my' element={<MyMuseum />}/>
		</Routes>
	);
};
