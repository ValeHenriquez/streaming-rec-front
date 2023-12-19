import React, { useCallback, useEffect, useState } from "react";
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import NavbarItem from "@/components/NavbarItem";
import Link from "next/link";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
	const [showBackground, setShowBackground] = useState(false);
	const [showAccountMenu, setShowAccountMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleAccountMenu = useCallback(() => {
		setShowAccountMenu((current) => !current);
	}, []);

	return (
		<nav className="w-full fixed z-40">
			<div
				className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
					showBackground ? "bg-zinc-900 bg-opacity-90" : ""
				}`}
			>
				<img src="/images/icon.png" className="h-4 lg:h-7" alt="Logo" />
				<div className="flex-row ml-8 gap-7 hidden lg:flex">
					{/* Usa el componente Link para la navegación */}
					<Link href={"/"} className="text-white">
						<NavbarItem label="Home" active />
					</Link>
					<Link href={"/movies"} className="text-white">
						<NavbarItem label="All Movies" />
					</Link>
					<Link href={"/series"} className="text-white">
						<NavbarItem label="All Series" />
					</Link>
					<Link href={"/watched"} className="text-white">
						<NavbarItem label="Watched" />
					</Link>
					<Link href={"/your-family"} className="text-white">
						<NavbarItem label="Your Family" />
					</Link>
				</div>
				<div className="flex flex-row ml-auto gap-7 items-center">
					<div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
						<MagnifyingGlassIcon className="w-6" />
					</div>
					<div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
						<BellIcon className="w-6" />
					</div>
					<div
						onClick={toggleAccountMenu}
						className="flex flex-row items-center gap-2 cursor-pointer relative"
					>
						<div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
							<img src="/images/default-blue.png" alt="" />
						</div>
						<ChevronDownIcon
							className={`w-4 text-white fill-white transition ${
								showAccountMenu ? "rotate-180" : "rotate-0"
							}`}
						/>
						<AccountMenu visible={showAccountMenu} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
