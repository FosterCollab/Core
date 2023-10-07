import React from "react"
import Image from "next/image";

export default function Footer() {
	return (
		<section className="bg-black sectionSize">
			<div className="mb-4">
		  <img src='/assets/Logo_white.svg' alt="Logo" className="h-4" />
			</div>
			<div className="flex mb-8">
		  <a href="#">
					<img src='/assets/logos/Facebook.svg' alt="Facebook logo" className="mx-4" />
		  </a>
		  <a href="#">
					<img src='/assets/logos/Youtube.svg' alt="Youtube logo" className="mx-4" />
		  </a>
		  <a href="#">
					<img src='/assets/logos/Instagram.svg' alt="Instagram logo" className="mx-4" />
		  </a>
		  <a href="#">
					<img src='/assets/logos/Twitter.svg' alt="Twitter logo" className="mx-4" />
		  </a>
			</div>
			<div className="text-white font-montserrat text-sm">
		  © 2021 STARTUP. All rights reserved
			</div>
	  </section>
	)
}