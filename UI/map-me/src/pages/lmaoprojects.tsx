// Importing necessary modules
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import React from 'react';



// Tile component properties
type TileProps = {
  title: string;
  numpeople: number;
  description: string;
  dateposted: string;
};




// Individual Tile component to display project details
const Tile: React.FC<TileProps> = ({ title, numpeople, description, dateposted }) => {
  return (
    <div className="tile bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">{title}</h2>
      <p className="text-blue-700 mb-4 font-medium">{numpeople} people</p>
      <p className="text-gray-800 mb-4">{description}</p>
      <p className="text-gray-600 text-sm italic">Date posted: {dateposted}</p>
    </div>
  );
}

// Main Home component
export default function Home({ projects }) {
  return (
    <div className="home-container bg-gray-200 py-8 px-8 space-y-8">
      {projects.map((project, index) => {
        // Destructuring properties from project
        const { 
          'Name of project': title, 
          'How many people': peopleCount, 
          Description, 
          'Date posted': date 
        } = project;

        return (
          <Tile 
            key={index}
            title={title}
            numpeople={parseInt(peopleCount)}
            description={Description}
            dateposted={date}
          />
        );
      })}
    </div>
  );
}

// Fetching data for static site generation
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.csv');
  const csvString = fs.readFileSync(filePath, 'utf8');

  // Parse the CSV
  const results = Papa.parse(csvString, { header: true, skipEmptyLines: true });
  
  return {
    props: {
      projects: results.data
    }
  };
}
