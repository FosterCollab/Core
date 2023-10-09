// map-me/pages/api/addToJSON.ts

import { type NextApiRequest, type NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		try {
			const data = req.body;

			// Path to the JSON file
			const filePath = path.join(process.cwd(), "data.json");

			// Check if the file exists, if not create an empty array
			if (!fs.existsSync(filePath)) {
				fs.writeFileSync(filePath, JSON.stringify([]));
			}

			// Read the existing data from the file
			const fileData = JSON.parse(fs.readFileSync(filePath, "utf8"));

			// Push the new data to the existing data
			fileData.push(data);

			// Write the updated data back to the file
			fs.writeFileSync(filePath, JSON.stringify(fileData));

			res.status(200).json({ message: "Data added successfully!" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
		}
	} else {
		res.status(405).json({ message: "Method Not Allowed" });
	}
}



