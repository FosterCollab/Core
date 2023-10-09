import fs from "fs";
import path from "path";

// Generic function to fetch data based on a filepath
export async function fetchDemoData(filepath: string) {
	try {
		// Read data from the file
		const data = JSON.parse(fs.readFileSync(filepath, "utf8"));
		return data;
	} catch (error) {
		console.error("Failed to fetch data:", error);
		return [];
	}
}
