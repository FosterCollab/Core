import React, { useState } from "react";
import Link from 'next/link';

const Navbar: React.FC = () => {
    
	const [isMobileNavVisible, setMobileNavVisible] = useState(false);

	const toggleMobileNav = () => {
		setMobileNavVisible(!isMobileNavVisible);
	}

	return (
		<div>
			<nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
				<div className="flex items-center">
					<img src='/assets/Logo_black.svg' alt="Logo" className="h-4" />
				</div>
				<ul className="font-montserrat items-center hidden md:flex">
					<li className="growing-underline mx-3">
						<Link href="/projects/demo">
							Find a Project
						</Link>
					</li>
					<li className="growing-underline mx-3">
						<Link href="/charts/network">
							Network Nodes
						</Link>
					</li>
					<li className="growing-underline mx-3">
						<Link href="/contact">
							Get in Touch
						</Link>
					</li>
				</ul>
				<div className="font-montserrat hidden md:block">
					<button className="mr-6">Login</button>
					<button className="py-2 px-4 text-white bg-black rounded-3xl">Signup</button>
				</div>
				<div onClick={toggleMobileNav} className="md:hidden">
					<img src='/assets/logos/Menu.svg' alt="Menu icon" className="h-12 w-12"/>
				</div>
			</nav>
			<div className={`${isMobileNavVisible ? "" : "hidden"} px-2 py-4 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down`}>
				<div onClick={toggleMobileNav} className="flex justify-end">
					<img src='/assets/logos/Cross.svg' alt="close menu icon" className="h-16 w-16" />
				</div>
				<ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
					<li className="my-6">
						<Link href="/projects/demo">
							Find a Project
						</Link>
					</li>
					<li className="my-6">
						<Link href="/charts/network">
							Network Nodes
						</Link>
					</li>
					<li className="my-6">
						<Link href="/contact">
							Get in Touch
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar;
