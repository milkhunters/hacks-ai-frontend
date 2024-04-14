import { Spinner } from '@/components/layouts/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MuseumItems } from '@/modules/museum/pages/museum-items';
import { getCurrentUser } from '@/modules/users/api/users';
import { UserResponse } from '@/modules/users/types/response';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MuseumKillerForm } from '../components/museum-killer-form';
import { MuseumCard } from '../types/cards';
import { getSearchItemsByText, getUserItems } from '../api/museum';
import { useDebounce } from '../hooks/useDebounce';

export const MyMuseum = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserResponse | null>(null);
  const [items, setItems] = useState<Array<MuseumCard>>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getAndSetCurrentUser = async () => {
      setIsLoading(true)
      const response = await getCurrentUser();
      setIsLoading(false);
      if (response.content) setUser(response.content)
    };

    const getAndSetUserItems = async () => {
      const response = await getUserItems();

      if (response.content) {
        setItems(response.content);
        //for (let item of response.content) {
        //	const { content: findedPoster } = await getItem({ itemId: item.id, fileId: item.poster ?? '' });
        //	setItems([...items, {...item, poster: findedPoster?.url ?? 'https://images.unsplash.com/photo-1712839398283-5b5bc134d9dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D'}])
        //}
      }
    }
    getAndSetUserItems();

    getAndSetCurrentUser();
  }, []);


  const searchQuery = useDebounce(search, 2000)

  useEffect(() => {
    if (searchQuery || search.length < 0) {
      const getSearchItems = async () => {
        const response = await getSearchItemsByText(searchQuery)
        if (response.content) {
          setItems(response.content);
        }
      }
      getSearchItems();
    }
  }, [searchQuery])

  if (isLoading) return <Spinner />;
  if (!isLoading && !user) navigate('/');

  return <>
    <div className='flex flex-col justify-center items-center gap-8 mt-4'>
      <h3 className="scroll-m-20 border-2 p-6 text-3xl rounded-3xl font-extrabold tracking-tight">
        Центральный Музей Ростова-на-Дону
      </h3>
      <div className='flex w-full max-w-lg items-center space-x-2'>
        <Input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} value={search} type='text' placeholder='Введите название объекта...' />
        <Button type='submit'>
          <Search size={20} />
        </Button>
        <MuseumKillerForm />
      </div>
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8'>
      <MuseumItems items={items} />
    </div>
  </>
};