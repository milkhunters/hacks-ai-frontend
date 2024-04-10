import { useParams } from 'react-router-dom';

export const UserCard = () => {
	const { id } = useParams();

	return <>UserById = {id}</>;
};
