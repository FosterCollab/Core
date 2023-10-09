import { type FC, useState, useEffect } from "react";
import fs from "fs";
import path from "path";

interface Project {
	name: string;
	link: string;
	label: string;
	description: string;
}

interface ProjectsProps {
	projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

	useEffect(() => {
		const results = projects.filter(project => {
			const { name, description, label } = project;

			if (typeof name !== "string" || typeof description !== "string" || typeof label !== "string") {
				return false;
			}

			return (
				name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        label.toLowerCase().includes(searchTerm.toLowerCase())
			);
		});

		setFilteredProjects(results);
	}, [searchTerm, projects]);

	return (
		<div className="container mx-auto p-6 max-w-6xl">
			<h2 className="text-3xl font-bold mb-10 text-center">Projects you can join</h2>
			<div className="mb-6">
				<input 
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder="Search projects..."
					className="w-full p-2 border rounded"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-16">
				{filteredProjects.map((project, idx) => (
					<div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold mb-2">{project.name}</h3>
						<p className="mb-2">{project.label}</p>
						<p className="mb-4">{project.description}</p>
						<a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn More</a>
					</div>
				))}
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		// Path to the JSON file within the public directory
		const filePath = path.join(process.cwd(), "public", "demoData", "projects.json");

		// Read data from the file
		const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

		return { props: { projects: data } };
	} catch (error) {
		console.error("Failed to fetch projects:", error);
		return { props: { projects: [] } };
	}
}

export default Projects;
