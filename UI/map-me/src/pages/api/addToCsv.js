import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { projectName, peopleCount, description, datePosted } = req.body;
      const csvLine = `"${projectName}",${peopleCount},"${description}","${datePosted}"\n`;

      const filePath = path.join(process.cwd(), 'data.csv');
      await fs.appendFile(filePath, csvLine, 'utf8');

      res.status(200).json({ message: 'Data added to CSV' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}