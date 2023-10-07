// pages/network-page.tsx
import React, { useEffect } from 'react';
import anychart from 'anychart';

const NetworkPage: React.FC = () => {
  useEffect(() => {
    // Define the data for the graph
    const data = {
      nodes: [
        { id: '1', name: 'Node 1' },
        { id: '2', name: 'Node 2' },
        { id: '3', name: 'Node 2' },
        // ...add more nodes if needed
      ],
      edges: [
        { from: '1', to: '2' },
        { from: '1', to: '3' },
        // ...add more edges if needed
      ],
    };

    // Create a chart instance and draw it
    const chart = anychart.graph(data);
    chart.container('chartContainer').draw();
  }, []);

  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div className="chartWrapper w-full h-500px px-20 py-10">
        <div id="chartContainer" className="chart h-full"></div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    </div>
  );
};

export default NetworkPage;

