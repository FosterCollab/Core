import Head from "next/head";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// handle form submission here, like sending the data to an API endpoint
		console.log(formData);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<>
			<Head>
				<title>FosterCollab Contact Us</title>
				<meta name="description" content="Get in touch with FosterCollab" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="pt-24 lg:px-48 md:px-12 px-4 bg-secondary text-center md:text-left">
				<section className="md:mt-0 flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center">
					<div className="md:flex-1 md:mr-10">
						<h1 className="font-pt-serif text-5xl font-bold mb-7">
                            Contact <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">FosterCollab</span>
						</h1>
						<p className="font-pt-serif font-normal mb-7">
                            Have questions or feedback? We'd love to hear from you. Drop us a message!
						</p>
					</div>
				</section>

				<section className="bg-black text-white sectionSize p-8 rounded-lg mt-8">
					<form onSubmit={handleSubmit} className="md:w-2/3 mx-auto">
						<div className="mb-6">
							<label className="block font-montserrat mb-2" htmlFor="name">Name</label>
							<input
								className="w-full px-3 py-2 font-montserrat border rounded-md"
								id="name"
								name="name"
								type="text"
								placeholder="John Doe"
								value={formData.name}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-6">
							<label className="block font-montserrat mb-2" htmlFor="email">Email Address</label>
							<input
								className="w-full px-3 py-2 font-montserrat border rounded-md"
								id="email"
								name="email"
								type="email"
								placeholder="john.doe@example.com"
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-6">
							<label className="block font-montserrat mb-2" htmlFor="message">Message</label>
							<textarea
								className="w-full px-3 py-2 font-montserrat border rounded-md"
								id="message"
								name="message"
								rows={5}
								placeholder="Your message here..."
								value={formData.message}
								onChange={handleChange}
							></textarea>
						</div>
						<button className="font-montserrat bg-white text-black px-6 py-4 rounded-lg" type="submit">Send Message</button>
					</form>
				</section>
			</main>
		</>
	);
}

export default ContactUs;
