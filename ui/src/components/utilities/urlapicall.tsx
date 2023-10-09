import React from "react";
import { useQuery } from "@tanstack/react-query";

// Define the fetch function
async function getData(url: string) {
	const response = await fetch(url);
  
	// Check if the request was successful
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	return response.json();
}

const FetchData: React.FC = () => {
	const apiUrl = "https://your-api-endpoint.com/data"; // Replace with your actual API endpoint
	const { data, error, isLoading, isError } = useQuery({ queryKey: "yourDataKey", queryFn: () => fetchData(apiUrl) });

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<div>
			{/* Render your data here */}
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}

export default FetchData;
