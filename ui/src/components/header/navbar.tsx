"use client";
import React, { useEffect } from "react"

const Navbar: React.FC = () => {
    
    useEffect(() => {
        const showMenuBtn = document.querySelector("#showMenu");
        const hideMenuBtn = document.querySelector("#hideMenu");
        const mobileNav = document.querySelector("#mobileNav");

        if (showMenuBtn) {
            showMenuBtn.addEventListener("click", function () {
                if (mobileNav) mobileNav.classList.remove("hidden");
            });
        }

        if (hideMenuBtn) {
            hideMenuBtn.addEventListener("click", function () {
                if (mobileNav) mobileNav.classList.add("hidden");
            });
        }

        return () => { // Cleanup
            if (showMenuBtn) {
                showMenuBtn.removeEventListener("click", function () {
                    if (mobileNav) mobileNav.classList.remove("hidden");
                });
            }

            if (hideMenuBtn) {
                hideMenuBtn.removeEventListener("click", function () {
                    if (mobileNav) mobileNav.classList.add("hidden");
                });
            }
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
		<div>
			<nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
				<div className="flex items-center">
					<img src='/assets/Logo_black.svg' alt="Logo" className="h-4" />
				</div>
				<ul className="font-montserrat items-center hidden md:flex">
					<li className="mx-3 ">
						<a className="growing-underline" href="howitworks">
          How it works
						</a>
					</li>
					<li className="growing-underline mx-3">
						<a href="features">Features</a>
					</li>
					<li className="growing-underline mx-3">
						<a href="pricing">Pricing</a>
					</li>
				</ul>
				<div className="font-montserrat hidden md:block">
					<button className="mr-6">Login</button>
					<button className="py-2 px-4 text-white bg-black rounded-3xl">
        Signup
					</button>
				</div>
				<div id="showMenu" className="md:hidden">
					<img src='/assets/logos/Menu.svg' alt="Menu icon" className="h-12 w-12"/>
				</div>
			</nav>
			<div id='mobileNav' className="hidden px-2 py-4 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down">
				<div id="hideMenu" className="flex justify-end">
					<img src='/assets/logos/Cross.svg' alt="close menu icon" className="h-16 w-16" />
				</div>
				<ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
					<li className="my-6">
						<a href="howitworks">How it works</a>
					</li>
					<li className="my-6">
						<a href="features">Features</a>
					</li>
					<li className="my-6">
						<a href="pricing">Pricing</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
export default Navbar