import { Spinner } from '@/components/layouts/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MuseumItems } from '@/modules/museum/pages/museum-items';
import { getCurrentUser } from '@/modules/users/api/users';
import { UserResponse } from '@/modules/users/types/response';
import { PlusIcon, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MyMuseum = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserResponse | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const getAndSetCurrentUser = async () => {
			setIsLoading(true)
			const response = await getCurrentUser();
			setIsLoading(false);
			console.log(response);
			if (response.content) setUser(response.content)
		};

		getAndSetCurrentUser();
	}, []);

	if (isLoading) return <Spinner/>;
	if (!isLoading && !user) navigate('/');

  return <>
    <div className='flex flex-col justify-center items-center gap-8 mt-4'>
      <h3 className="scroll-m-20 border-2 p-6 text-3xl rounded-3xl font-extrabold tracking-tight">
        Центральный Музей Ростова-на-Дону
      </h3>
      <div className='flex w-full max-w-lg items-center space-x-2'>
        <Input type='text' placeholder='Введите название объекта...' />
        <Button type='submit'>
          <Search size={20} />
        </Button>
        <Button type='submit'>
          <PlusIcon size={20} />
        </Button>
      </div>
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8'>
      <MuseumItems />
    </div>
  </>
};