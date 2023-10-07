import React from "react"
import Image from "next/image";

export default function FAQ() {
	return (
		<section className="sectionSize items-start pt-8 md:pt-36 bg-black text-white">
			<div>
				<h2 className="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">
        FAQ
				</h2>
			</div>

			<div className="w-full py-4">
				<div className="flex justify-between items-center">
					<div className="font-montserrat font-medium mr-auto">
          Where can I get this HTML template?
					</div>
					<img src='/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
				</div>
				<div className="font-montserrat text-sm font-extralight pb-8 hidden">
        You can download it on Gumroad.com
				</div>
			</div>
			<hr className="w-full bg-white" />

			<div className="w-full py-4">
				<div className="flex justify-between items-center">
					<div className="font-montserrat font-medium mr-auto">
          Is this HTML template free?
					</div>
					<img src='/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
				</div>
				<div className="font-montserrat text-sm font-extralight pb-8 hidden">
        Yes! For you it is free.
				</div>
			</div>
			<hr className="w-full bg-white" />

			<div className="w-full py-4">
				<div className="flex justify-between items-center">
					<div className="font-montserrat font-medium mr-auto">
          Am I awesome?
					</div>
					<img src='/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
				</div>
				<div className="font-montserrat text-sm font-extralight pb-8 hidden">
        Yes! No doubt about it.
				</div>
			</div>
			<hr className="w-full bg-white" />

		</section>

	)
}
