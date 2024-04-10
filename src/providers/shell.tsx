import { PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const Shell = ({ children }: PropsWithChildren) => {
	return <Router>{children}</Router>;
};
