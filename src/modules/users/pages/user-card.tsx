import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
	CardTitle,
	CardHeader,
	CardContent,
	Card,
	CardFooter,
	CardDescription,
} from '@/components/ui/card';
import {
	CheckSquareIcon,
	FileIcon,
	MailIcon,
	MapPinIcon,
	MessageSquareIcon,
	MoonIcon,
	PhoneIcon,
	SunIcon,
	UserIcon,
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export const UserCard = () => {
	const ITEMS = [
		{
			title: 'Скульптура ',
			src: 'https://images.unsplash.com/photo-1614016103260-b9d2628369bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCVEMCVCOCVEMSU4MSVEMCVCQSVEMSU4MyVEMSU4MSVEMSU4MSVEMSU4MiVEMCVCMiVEMCVCRXxlbnwwfHwwfHx8MA%3D%3D',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Скульптура',
				},
				{
					title: 'Абстракция',
				},
				{
					title: 'Металл',
				},
			],
		},
		{
			title: "Скульптура 'Свобода'",
			src: 'https://images.unsplash.com/photo-1645523736056-50d602dbee7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUQwJUJDJUQxJTgzJUQwJUI3JUQwJUI1JUQwJUI5fGVufDB8fDB8fHww',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Скульптура',
				},
				{
					title: 'Свобода',
				},
				{
					title: 'Мрамор',
				},
			],
		},
		{
			title: 'Крепость Маркиза де Сада',
			src: 'https://images.unsplash.com/photo-1711747707558-51259ce94c43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8JUQwJUJDJUQxJTgzJUQwJUI3JUQwJUI1JUQwJUI5fGVufDB8fDB8fHww',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Крепость',
				},
				{
					title: 'Маркиз',
				},
			],
		},
		{
			title: 'Картина "Цветы"',
			src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Картина',
				},
				{
					title: 'Цветы',
				},
			],
		},
		{
			title: 'Картина "Портрет девушки"',
			src: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Картина',
				},
				{
					title: 'Портрет',
				},
			],
		},
		{
			title: 'Картина "Живопись в стиле абстракционизма"',
			src: 'https://plus.unsplash.com/premium_photo-1672287578303-a9832c84a2a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHx8MA%3D%3D',
			author: 'Sarah J. Maas',
			tags: [
				{
					title: 'Картина',
				},
				{
					title: 'Абстракция',
				},
			],
		},
	];

	// const { id } = useParams();

	return (
		<>
			<Tabs defaultValue='account' className='w-full mt-4'>
				<TabsList>
					<TabsTrigger value='account'>Профиль</TabsTrigger>
					<TabsTrigger value='loaded'>Загруженное</TabsTrigger>
					<TabsTrigger value='setting'>Настройки</TabsTrigger>
				</TabsList>
				<TabsContent value='account'>
					<div className='w-full space-y-6'>
						<div className='p-6 bg-gray-100 rounded-lg dark:bg-gray-800'>
							<div className='grid gap-4 sm:grid-cols-2'>
								<div className='flex items-center space-x-4'>
									<Avatar className='h-14 w-14'>
										<AvatarImage
											src='https://github.com/shadcn.png'
											alt='@shadcn'
										/>
										<AvatarFallback className='border-2 bg-white'>
											TA
										</AvatarFallback>
									</Avatar>
									<div className='space-y-1.5'>
										<div className='flex items-center space-x-2'>
											<h1 className='text-2xl font-bold'>Иван Петров</h1>
											<Badge>Admin</Badge>
										</div>
										<p className='text-gray-500 dark:text-gray-400'>
											Работник музея
										</p>
									</div>
								</div>
								<div className='space-y-2 text-sm'>
									<div className='flex items-center space-x-2'>
										<UserIcon className='w-4 h-4 flex-shrink-0' />
										<span>Joined on June 3, 2018</span>
									</div>
									<div className='flex items-center space-x-2'>
										<MailIcon className='w-4 h-4 flex-shrink-0' />
										<span>alice@example.com</span>
									</div>
									<div className='flex items-center space-x-2'>
										<PhoneIcon className='w-4 h-4 flex-shrink-0' />
										<span>+1 (123) 456-7890</span>
									</div>
									<div className='flex items-center space-x-2'>
										<MapPinIcon className='w-4 h-4 flex-shrink-0' />
										<span>New York, NY</span>
									</div>
								</div>
							</div>
						</div>
						<div className='grid gap-4 sm:grid-cols-2'>
							<Card>
								<CardHeader>
									<CardTitle>Активность</CardTitle>
								</CardHeader>
								<CardContent className='p-0'>
									<ul className='divide-y'>
										<li className='p-4 flex items-center space-x-4'>
											<FileIcon className='w-5 h-5 flex-shrink-0' />
											<div className='flex-1'>
												<Link className='font-medium underline' to='#'>
													Update the roadmap for 2023
												</Link>
												<div className='text-sm text-gray-500 dark:text-gray-400'>
													<time>2 hours ago</time>
												</div>
											</div>
											<Button size='sm' variant={'outline'}>
												Follow
											</Button>
										</li>
										<li className='p-4 flex items-center space-x-4'>
											<MessageSquareIcon className='w-5 h-5 flex-shrink-0' />
											<div className='flex-1'>
												<Link className='font-medium underline' to='#'>
													Commented on: Q3 OKRs
												</Link>
												<div className='text-sm text-gray-500 dark:text-gray-400'>
													<time>5 hours ago</time>
												</div>
											</div>
											<Button size='sm' variant={'outline'}>
												Follow
											</Button>
										</li>
										<li className='p-4 flex items-center space-x-4'>
											<CheckSquareIcon className='w-5 h-5 flex-shrink-0' />
											<div className='flex-1'>
												<Link className='font-medium underline' to='#'>
													Completed: Onboarding tasks
												</Link>
												<div className='text-sm text-gray-500 dark:text-gray-400'>
													<time>1 day ago</time>
												</div>
											</div>
											<Button size='sm' variant={'outline'}>
												Follow
											</Button>
										</li>
									</ul>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>История</CardTitle>
								</CardHeader>
								<CardContent className='p-0'>
									<ul className='divide-y'>
										<li className='p-4 flex items-center space-x-4'>
											<FileIcon className='w-5 h-5 flex-shrink-0' />
											<div className='flex-1'>
												<Link className='font-medium underline' to='#'>
													Update the roadmap for 2023
												</Link>
												<div className='text-sm text-gray-500 dark:text-gray-400'>
													<time>2 hours ago</time>
												</div>
											</div>
											<Button size='sm'>Follow</Button>
										</li>
										<li className='p-4 flex items-center space-x-4'>
											<MessageSquareIcon className='w-5 h-5 flex-shrink-0' />
											<div className='flex-1'>
												<Link className='font-medium underline' to='#'>
													Commented on: Q3 OKRs
												</Link>
												<div className='text-sm text-gray-500 dark:text-gray-400'>
													<time>5 hours ago</time>
												</div>
											</div>
											<Button size='sm'>Follow</Button>
										</li>
										<li className='p-4 flex items-center space-x-4'>
											<CheckSquareIcon className='w-5 h-5 flex-shrink-0' />
											<div className='flex-1'>
												<Link className='font-medium underline' to='#'>
													Completed: Onboarding tasks
												</Link>
												<div className='text-sm text-gray-500 dark:text-gray-400'>
													<time>1 day ago</time>
												</div>
											</div>
											<Button size='sm'>Follow</Button>
										</li>
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</TabsContent>
				<TabsContent value='loaded'>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8'>
						{ITEMS.map((item, index) => {
							return (
								<Card>
									<div className='aspect-[4/3]' key={index}>
										<img
											alt='Image'
											className='object-cover'
											src={item.src}
											style={{
												aspectRatio: '400/300',
												objectFit: 'cover',
												borderRadius: '15px 15px 0 0',
											}}
										/>
									</div>
									<CardContent className='p-4 flex items-center justify-center gap-4'>
										<div className='grid gap-0.5 text-center'>
											<h3 className='text-sm font-semibold leading-none'>
												{item.title}
											</h3>
											<p className='text-sm text-gray-500'>by {item.author}</p>
										</div>
									</CardContent>
									<CardFooter className='flex justify-center flex-col gap-3'>
										<div className='flex'>
											{item.tags?.map(tag => (
												<span className='text-xs bg-gray-200 px-2 py-1 rounded-full mr-1'>
													#{tag.title}
												</span>
											))}
										</div>
										<Button size='sm' variant={'outline'}>
											Подробнее
										</Button>
									</CardFooter>
								</Card>
							);
						})}
					</div>
				</TabsContent>
				<TabsContent value='setting'>
					<div>
						<div className='py-6 w-full flex justify-center'>
							<div className='space-y-8'>
								<Card>
									<CardHeader>
										<div className='flex items-center space-x-4'>
											<Avatar className='w-10 h-10'>
												<AvatarImage alt='Avatar' src='/placeholder-user.jpg' />
												<AvatarFallback>JD</AvatarFallback>
											</Avatar>
											<div>
												<CardTitle>John Doe</CardTitle>
												<CardDescription>johndoe@example.com</CardDescription>
											</div>
										</div>
									</CardHeader>
									<CardContent>
										<div className='grid gap-4 md:grid-cols-2'>
											<div className='space-y-2'>
												<Label htmlFor='name'>Name</Label>
												<Input id='name' value='John Doe' />
											</div>
											<div className='space-y-2'>
												<Label htmlFor='email'>Email</Label>
												<Input id='email' value='johndoe@example.com' />
											</div>
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Account</CardTitle>
										<CardDescription>
											Update your account information.
										</CardDescription>
									</CardHeader>
									<CardContent className='space-y-4'>
										<div className='space-y-2'>
											<Label htmlFor='password'>Password</Label>
											<Input
												id='password'
												placeholder='Enter your password'
												type='password'
											/>
										</div>
										<div className='space-y-2'>
											<Label>Notifications</Label>
											<div className='space-y-2'>
												<Label className='flex items-center' htmlFor='email'>
													<Checkbox
														className='mr-2'
														defaultChecked
														id='email'
													/>
													Email
												</Label>
												<Label className='flex items-center' htmlFor='push'>
													<Checkbox className='mr-2' id='push' />
													Push Notifications
												</Label>
											</div>
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Privacy</CardTitle>
										<CardDescription>
											Manage your data sharing preferences.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className='space-y-4'>
											<div>
												<Label className='flex items-center'>
													<Checkbox className='mr-2' id='activity' />
													Share my activity with followers
												</Label>
											</div>
											<div>
												<Label className='flex items-center'>
													<Checkbox className='mr-2' id='photo' />
													Allow tagging in photos
												</Label>
											</div>
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Theme</CardTitle>
										<CardDescription>
											Choose your preferred theme.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<fieldset>
											<legend className='sr-only'>Theme</legend>
											<div className='flex items-center space-x-4'>
												<Label
													className='cursor-pointer p-3 rounded-md flex items-center justify-center border border-gray-200 dark:border-gray-800'
													htmlFor='theme-light'
												>
													<Input
														className='absolute inset-0 opacity-0 z-[-1]'
														defaultChecked
														id='theme-light'
														name='theme'
														type='radio'
														value='light'
													/>
													<div className='flex flex-col items-center'>
														<SunIcon className='h-6 w-6' />
														<span className='text-xs font-semibold mt-1.5 leading-none'>
															Light
														</span>
													</div>
												</Label>
												<Label
													className='cursor-pointer p-3 rounded-md flex items-center justify-center border border-gray-200 dark:border-gray-800'
													htmlFor='theme-dark'
												>
													<Input
														className='absolute inset-0 opacity-0 z-[-1]'
														id='theme-dark'
														name='theme'
														type='radio'
														value='dark'
													/>
													<div className='flex flex-col items-center'>
														<MoonIcon className='h-6 w-6' />
														<span className='text-xs font-semibold mt-1.5 leading-none'>
															Dark
														</span>
													</div>
												</Label>
											</div>
										</fieldset>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</>
	);
};
