// map-me/pages/api/getProjects.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Path to the JSON file
      const filePath = path.join(process.cwd(), 'data.json');

      // Check if the file exists
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: 'Data not found' });
      }

      // Read data from the file
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
