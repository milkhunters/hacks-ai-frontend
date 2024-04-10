import { cn } from '@/utils/tw-merge';
import { Link } from 'react-router-dom';

export const MainLogo = ({ classnames }: { classnames: string }) => {
	return (
		<>
			<Link to='/'>
				<h3
					className={cn(
						'text-2xl font-semibold tracking-tight mr-4',
						classnames,
					)}
				>
					mlkh<span className='text-primary'>.catalog</span>
				</h3>
			</Link>
		</>
	);
};
