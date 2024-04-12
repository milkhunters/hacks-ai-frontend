import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/utils/tw-merge';
import { useState } from 'react';
import { signIn } from '../api/auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/components/layouts/auth-layout';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export const SignIn = ({ className, ...props }: UserAuthFormProps) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [email, setEmail] = useState<string>('admin@example.com');
	const [password, setPassword] = useState<string>('admin123');

	async function makeSignIn(event: React.SyntheticEvent) {
		event.preventDefault();

		setIsLoading(true);

		const { error } = await signIn({ email, password });

		setIsLoading(false);

		if (error) toast.error(error.content);
		else navigate('/')
	}

	return (
		<AuthLayout>
			<div className={cn('grid gap-6', className)} {...props}>
				<form onSubmit={makeSignIn}>
					<div className='grid gap-2'>
						<div className='grid gap-1'>
							<Label className='sr-only' htmlFor='email'>
								Email
							</Label>
							<Input
								id='email'
								placeholder='Адрес электронной почты'
								type='email'
								autoCapitalize='none'
								value={email}
								onChange={event => setEmail(event.target.value)}
								autoComplete='email'
								autoCorrect='off'
								disabled={isLoading}
							/>
						</div>
						<div className='grid gap-1'>
							<Label className='sr-only' htmlFor='password'>
								Пароль
							</Label>
							<Input
								id='password'
								placeholder='Пароль'
								type='password'
								value={password}
								onChange={event => setPassword(event.target.value)}
								autoComplete='current-password'
								disabled={isLoading}
							/>
						</div>
						<Button disabled={isLoading}>
							{isLoading && <span className='mr-2 h-4 w-4 animate-spin' />}
							Войти
						</Button>
					</div>
				</form>
				<div className='relative'>
					<div className='absolute inset-0 flex items-center'>
						<span className='w-full border-t' />
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};
