import { FC, useEffect, useState } from 'react';

interface Project {
  projectName: string;
  peopleCount: string;
  description: string;
  datePosted: string;
}

const ShowProjects: FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/getProjects');
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-3xl">
        <br /><br /><br /><br />
      <h2 className="text-3xl font-bold mb-10 text-center">Projects you can join</h2>
      <div className="flex flex-col space-y-6 px-4 lg:px-16">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{project.projectName}</h3>
            <p><strong>People Count:</strong> {project.peopleCount}</p>
            <p><strong>Date Posted:</strong> {project.datePosted}</p>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
      <br /><br /><br /><br />
    </div>
);
}

export default ShowProjects;
