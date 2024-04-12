import { PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';

export const Shell = ({ children }: PropsWithChildren) => {
	return <Router>
		{children}
		<Toaster richColors />
	</Router>;
};
