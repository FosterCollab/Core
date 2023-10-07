import { useState } from 'react';

export default function AddToCSV() {
  const [data, setData] = useState({
    projectName: '',
    peopleCount: '',
    description: '',
    datePosted: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/addToCsv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="p-8 bg-white rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Add to CSV</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              value={data.projectName} 
              onChange={(e) => setData({ ...data, projectName: e.target.value })}
              placeholder="Name of project"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input 
              value={data.peopleCount} 
              onChange={(e) => setData({ ...data, peopleCount: e.target.value })}
              placeholder="How many people"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <textarea 
              value={data.description} 
              onChange={(e) => setData({ ...data, description: e.target.value })}
              placeholder="Description"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input 
              type="date"
              value={data.datePosted} 
              onChange={(e) => setData({ ...data, datePosted: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Add to CSV
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


