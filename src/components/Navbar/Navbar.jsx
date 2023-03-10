import {useEffect, useState} from "react";
import {Button, IconButton, MobileNav, Navbar, Typography,} from "@material-tailwind/react";
import logo from '../../assets/logo.png'

export default function Navbar1() {
	const [openNav, setOpenNav] = useState(false);
	
	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);
	
	const navList = (<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
		{["Главная", "Курсы", "Вакансии", "Блог", "О нас", "Контакты"].map((item, index) => {
			return (<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-base"
				key={index}
			>
				<a href={`#${item}`} className="flex items-center">
					{item}
				</a>
			</Typography>)
		})}
	< /ul>);
	
	return (<Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-2 ">
		<div className="container mx-auto flex items-center justify-between text-blue-gray-900 px-2 lg:px-7">
			<Typography
				as="a"
				href="#"
				variant="small"
				className="mr-4 cursor-pointer py-1.5 font-normal"
			>
				<img src={logo} alt="logo" width={85} height={85}/>
				{/*<span>Material Tailwind</span>*/}
			</Typography>
			<div className="hidden lg:block">{navList}</div>
			<Button size="sm" className="hidden lg:inline-block h-[45px] w-[190px] bg-main-bg">
				<span>Подать заявку</span>
			</Button>
			<IconButton
				variant="text"
				className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
				ripple={false}
				onClick={() => setOpenNav(!openNav)}
			>
				{openNav ? (<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					className="h-6 w-6"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>) : (<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>)}
			</IconButton>
		</div>
		<MobileNav open={openNav}>
			<div className="container mx-auto">
				{navList}
				<Button size="sm" fullWidth className="mb-2 bg-main-bg">
					<span>Подать заявку</span>
				</Button>
			</div>
		</MobileNav>
	</Navbar>);
}
