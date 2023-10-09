import React, { useState } from "react";

const FAQ: React.FC = () => {

	const [expanded, setExpanded] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		if (expanded === index) {
			setExpanded(null);
		} else {
			setExpanded(index);
		}
	};

	return (
		<section className="sectionSize items-start pt-8 md:pt-36 bg-black text-white">
			<div>
				<h2 className="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">
          FAQ
				</h2>
			</div>

			<div className="w-full py-4" onClick={() => handleToggle(0)}>
				<div className="flex justify-between items-center">
					<div className="font-montserrat font-medium mr-auto">
            What tools does FosterCollab integrate with?
					</div>
					<img src='/assets/logos/CaretRight.svg' alt="" className={`transform transition-transform ${expanded === 0 ? "rotate-90" : ""}`} />
				</div>
				<div className={`font-montserrat text-sm font-extralight pb-8 ${expanded !== 0 ? "hidden" : ""}`}>
          Our tooling seamlessly integrates with GitHub, Slack, Discord, and Notion APIs, making FosterCollab your centralized hub for collaboration.
				</div>
			</div>
			<hr className="w-full bg-white" />

			<div className="w-full py-4" onClick={() => handleToggle(1)}>
				<div className="flex justify-between items-center">
					<div className="font-montserrat font-medium mr-auto">
            What if I don't know how to install or use FosterCollab?
					</div>
					<img src='/assets/logos/CaretRight.svg' alt="" className={`transform transition-transform ${expanded === 1 ? "rotate-90" : ""}`} />
				</div>
				<div className={`font-montserrat text-sm font-extralight pb-8 ${expanded !== 1 ? "hidden" : ""}`}>
          Don't fret! Installing FosterCollab is straightforward. With a single click, we handle the intricate details, positioning your project and team for exponential growth and success.
				</div>
			</div>
			<hr className="w-full bg-white" />
	  <div className="w-full py-4" onClick={() => handleToggle(2)}>
				<div className="flex justify-between items-center">
					<div className="font-montserrat font-medium mr-auto">
            How secure is FosterCollab for my team's collaboration?
					</div>
					<img src='/assets/logos/CaretRight.svg' alt="" className={`transform transition-transform ${expanded === 2 ? "rotate-90" : ""}`} />
				</div>
				<div className={`font-montserrat text-sm font-extralight pb-8 ${expanded !== 2 ? "hidden" : ""}`}>
          FosterCollab is built with security as a top priority. We employ the latest encryption standards to protect your data both in transit and at rest. Regular security audits and updates ensure your team's collaboration remains confidential and protected.
				</div>
			</div>
			<hr className="w-full bg-white" />

			<div className="w-full py-4" onClick={() => handleToggle(3)}>
				<div className="flex justify-between items-center">
					<div className="font-montserrat font-medium mr-auto">
            Can I customize FosterCollab for my organization's specific needs?
					</div>
					<img src='/assets/logos/CaretRight.svg' alt="" className={`transform transition-transform ${expanded === 3 ? "rotate-90" : ""}`} />
				</div>
				<div className={`font-montserrat text-sm font-extralight pb-8 ${expanded !== 3 ? "hidden" : ""}`}>
          Absolutely! FosterCollab offers a range of customization options to adapt to your organization's workflow. Additionally, our API allows for further extensions and integrations tailored to your unique requirements.
				</div>
			</div>
			<hr className="w-full bg-white" />
		</section>
	);
};

export default FAQ;
