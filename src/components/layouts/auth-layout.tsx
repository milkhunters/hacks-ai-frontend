import { cn } from '@/utils/tw-merge';
import { Link, useLocation } from 'react-router-dom';
import { buttonVariants } from '../ui/button';
import { PropsWithChildren } from 'react';
import { MainLogo } from './logo';

export const AuthLayout = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  return (
    <>
      <div className='container relative h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <Link
          to={
            location.pathname === '/auth/sign-in'
              ? '/auth/sign-up'
              : '/auth/sign-in'
          }
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8',
          )}
        >
          {location.pathname === '/auth/sign-in'
            ? ''
            : 'Войти'}
        </Link>
        <div className='relative hidden h-dvh flex-col bg-muted p-10 text-white lg:flex dark:border-r'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2 h-6 w-6'
            >
              <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
            </svg>
            <MainLogo classnames=''/>
          </div>
          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;Эта библиотека сэкономила мне бесчисленные часы работы и
                помогла мне создавать потрясающие дизайны для моих клиентов
                быстрее, чем когда-либо раньше.&rdquo;
              </p>
              <footer className='text-sm'>София Дэвис</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8 h-full'>
          <div className='mx-auto flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                {location.pathname === '/auth/sign-in'
                  ? 'Войти в личный кабинет'
                  : ''}
              </h1>
              <p className='text-sm text-muted-foreground'>
                {location.pathname === '/auth/sign-in'
                  ? 'Войдите в свой аккаунт'
                  : ''}
              </p>
            </div>
            {children}
            <p className='px-8 text-center text-sm text-muted-foreground'>
              Нажимая продолжить, вы соглашаетесь с нашими{' '}
              <Link
                to='/terms'
                className='underline underline-offset-4 hover:text-primary'
              >
                Условиями использования
              </Link>{' '}
              и{' '}
              <Link
                to='/privacy'
                className='underline underline-offset-4 hover:text-primary'
              >
                Политикой конфиденциальности
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
