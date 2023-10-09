import React from "react"

const Features: React.FC = () => {
	return (
		<section className="sectionSize bg-secondary">
			<div>
				<h2 className="secondaryTitle bg-underline3 bg-100%">Key Features</h2>
			</div>
			<div className="md:grid md:grid-cols-2 md:grid-rows-2">

				<div className="flex items-start font-montserrat my-6 mr-10">
					<img src='/assets/logos/Lightning.svg' alt='' className="h-7 mr-4" />
					<div>
						<h3 className="font-semibold text-2xl">Real-Time Data Mapping</h3>
						<p>
            Stay updated! We map open-source projects in real-time to give you an instantaneous view of the latest contributions, changes, and interactions.
						</p>
					</div>
				</div>

				<div className="flex items-start font-montserrat my-6 mr-10">
					<img src='/assets/logos/Star.svg' alt='' className="h-7 mr-4" />
					<div>
						<h3 className="font-semibold text-2xl">Code Contributions</h3>
						<p>
            Track and visualize every code change. Understand contributions and their impact on your project, helping your team move forward with clarity.
						</p>
					</div>
				</div>

				<div className="flex items-start font-montserrat my-6 mr-10">
					<img src='/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
					<div>
						<h3 className="font-semibold text-2xl">Team Communications</h3>
						<p>
            Foster collaboration with seamless communication features. From discussions to decisions, keep everyone aligned and engaged.
						</p>
					</div>
				</div>

				<div className="flex items-start font-montserrat my-6 mr-10">
					<img src='/assets/logos/CheckedBox.svg' alt='' className="h-7 mr-4" />
					<div>
						<h3 className="font-semibold text-2xl">Issue Creation & Project Interconnections</h3>
						<p>
            Easily raise issues and visualize project dependencies. With our interconnection feature, understand how each project piece fits into the bigger picture.
						</p>
					</div>
				</div>

			</div>
		</section>
	)
}
export default Features
