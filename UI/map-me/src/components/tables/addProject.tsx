import { useState, FC } from 'react';

interface Data {
  projectName: string;
  peopleCount: string;
  description: string;
  datePosted: string;
}

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: FC<InputFieldProps> = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
  );
}

const TextArea: FC<TextAreaProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">{label}</label>
      <textarea 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required 
      />
    </div>
  );
}

const AddToJSON: FC = () => {
  const [data, setData] = useState<Data>({
    projectName: '',
    peopleCount: '',
    description: '',
    datePosted: ''
  });

  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsClicked(true); // set the button as clicked
    // (Assuming this is the logic to write data to a JSON file; this might vary based on your backend setup)
    const response = await fetch('/api/addToJSON', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };

  

  return (
    <div className="container mx-auto mb-20 p-6">
      <div><br /><br /><br /><br /></div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md mt-10 p-10">
        <h2 className="text-2xl font-bold mb-10">Enter Projects</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Project Name:"
            value={data.projectName}
            onChange={(value) => setData({ ...data, projectName: value })}
          />
          <InputField
            label="People Count:"
            value={data.peopleCount}
            onChange={(value) => setData({ ...data, peopleCount: value })}
          />
          <TextArea
            label="Description:"
            value={data.description}
            onChange={(value) => setData({ ...data, description: value })}
          />
          <InputField
            label="Date Posted:"
            type="date"
            value={data.datePosted}
            onChange={(value) => setData({ ...data, datePosted: value })}
          />
          <div className="mt-6">
          <button
                type="submit"
                className={`bg-gradient-to-r ${isClicked ? 'from-teal-600 to-blue-700' : 'from-teal-400 to-blue-500'} text-black border-black border-2 font-bold py-2 px-4 rounded transition duration-100 transform hover:scale-105 ${isClicked ? 'transform scale-0.8' : ''}`}
            >
                Add to JSON
            </button>


          </div>
        </form>
      </div>
    </div>
  );
}

export default AddToJSON;
