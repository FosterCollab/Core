import Head from "next/head";
import Link from "next/link";
import Features from "../components/landingPage/feature";
import Pricing from "../components/landingPage/pricing"
import FAQ from "../components/landingPage/faq";

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>FosterCollab Home</title>
				<meta name="description" content="Connecting project leads and contributors seamlessly!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<section
					className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
					<div className="md:flex-1 md:mr-10">
						<h1 className="font-pt-serif text-5xl font-bold mb-7">
							Welcome to&nbsp;
							<span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
								FosterCollab
							</span>
						</h1>
						<p className="font-pt-serif font-normal mb-7">
							Bridging the gap between project leads and contributors. Dive into a collaborative journey like never before.
						</p>
						<div className="font-montserrat">
							<button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
								Join Now
							</button>
							<button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
								Learn More
							</button>
						</div>
					</div>
					<div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
						<div className="relative">
							<img src='/assets/Highlight1.svg' alt="" className="absolute -top-16 -left-10" />
						</div>
						<img src='/assets/MacBook Pro.png' alt="Macbook showcasing FosterCollab dashboard" />
						<div className="relative">
							<img src='/assets/Highlight2.svg' alt="" className="absolute -bottom-10 -right-6" />
						</div>
					</div>
				</section>

				<section className="bg-black text-white sectionSize">
					<div>
						<h2 className="secondaryTitle bg-underline2 bg-100%">How FosterCollab Works</h2>
					</div>
					<div className="flex flex-col md:flex-row">
						<div className="flex-1 mx-8 flex flex-col items-center my-4">
							<div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
								1
							</div>
							<h3 className="font-montserrat font-medium text-xl mb-2">Connect</h3>
							<p className="text-center font-montserrat">
								Easily find project leads or contributors that align with your goals.
							</p>
						</div>
						<div className="flex-1 mx-8 flex flex-col items-center my-4">
							<div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
								2
							</div>
							<h3 className="font-montserrat font-medium text-xl mb-2">Collaborate</h3>
							<p className="text-center font-montserrat">
								Collaborate on projects and track contributions seamlessly.
							</p>
						</div>
						<div className="flex-1 mx-8 flex flex-col items-center my-4">
							<div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
								3
							</div>
							<h3 className="font-montserrat font-medium text-xl mb-2">Thrive</h3>
							<p className="text-center font-montserrat">
								Watch your projects succeed and your network grow!
							</p>
						</div>
					</div>
				</section>

				<Features />
				<Pricing />
				<FAQ />
			</main>
		</>
	);
}
export default Home;
