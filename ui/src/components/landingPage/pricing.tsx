import React from "react"

const Pricing: React.FC = () => {
	return (
		<section className="sectionSize bg-secondary py-0">
			<div>
				<h2 className="secondaryTitle bg-underline4 mb-0 bg-100%">Pricing</h2>
			</div>
			<div className="flex w-full flex-col md:flex-row justify-center">

				<div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-12'>
					<h3 className="font-pt-serif font-normal text-2xl mb-4">
        Personal Plan
					</h3>
					<div className="font-montserrat font-bold text-2xl mb-4">
        Free!
					</div>

					<div className="flex">
						<img src='/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
						<p>Real-Time Data Mapping</p>
					</div>
					<div className="flex">
						<img src='/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
						<p>Team Communications</p>
					</div>
					<div className="flex">
						<img src='/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
						<p>Issue Management</p>
					</div>
	  <div className="flex">
						<img src='/assets/logos/Cross.svg' alt="" className="mr-1" />
						<p>Live Technical Support</p>
					</div>
					<button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
        Choose plan
					</button>
				</div>

				<div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-12'>
					<h3 className="font-pt-serif font-normal text-2xl mb-4">
        Company Plan
					</h3>
					<div className="font-montserrat font-bold text-2xl mb-4">
        $9.99
						<span className="font-normal text-base"> / per 25 people</span>
					</div>

					<div className="flex">
						<img src='/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
						<p>Real-Time Data Mapping</p>
					</div>
					<div className="flex">
						<img src='/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
						<p>Team Communications</p>
					</div>
					<div className="flex">
						<img src='/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
						<p>Issue Management</p>
					</div>
					<div className="flex">
						<img src='/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
						<p>Personal Tech Support</p>
					</div>
	  <div className="flex">
						<img src='/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
						<p>Live Technical Support</p>
					</div>
					<button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
        Choose plan
					</button>
				</div>
			</div>
		</section>

	)
}

export default Pricing;