import { Shell } from './providers/shell';
import { RootRoutes } from './routes';

export const App = () => {
	return (
		<Shell>
			<RootRoutes />
		</Shell>
	);
};
