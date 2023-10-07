import React from 'react'
import { Graph } from '@visx/network';
import { hierarchy } from '@visx/hierarchy';

const data = hierarchy({ count: Math.random() * 50 });

const LinkNodeGraph: React.FC = () => {
  return (
    <div style={{ width: '800px', height: '600px' }}>
      <Graph graph={data} linkComponent={({ link }) => (
        <line
          strokeWidth={1}
          stroke="#999"
          x1={link.source.x}
          y1={link.source.y}
          x2={link.target.x}
          y2={link.target.y}
        />
      )} nodeComponent={({ node }) => (
        <circle
          r={15}
          fill="#42f5d7"
          cx={node.x}
          cy={node.y}
        />
      )} />
    </div>
  );
}

export default LinkNodeGraph;
