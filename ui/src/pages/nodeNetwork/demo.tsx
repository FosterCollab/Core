import React, { useState, useEffect, useRef } from "react";
import path from "path";
import { fetchDemoData } from "../../components/utilities/fetchDemoData";
import * as d3 from "d3";

const RADIUS = 10;
const drawNetwork = (context, width, height, nodes, links) => {
	context.clearRect(0, 0, width, height);

	// Draw the links
	links.forEach((link) => {
		context.beginPath();
		context.moveTo(link.source.x, link.source.y);
		context.lineTo(link.target.x, link.target.y);
		context.stroke();
	});

	// Draw the nodes
	nodes.forEach((node) => {
		context.beginPath();
		context.moveTo(node.x + RADIUS, node.y);
		context.arc(node.x, node.y, RADIUS, 0, 2 * Math.PI);
		context.fillStyle = "#cb1dd1";
		context.fill();
	});
};


const UserNetworkGraph: React.FC<{ users: any[]; width: number; height: number }> = ({ users, width, height }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		const nodes = users.map(user => ({ id: user.id, group: user.group, ...user }));
		const links = [];

		users.forEach(user => {
			user.links.forEach(linkId => {
				const targetId = linkId % 25 || 25;
				if (user.id !== targetId) {
					links.push({
						source: user.id,
						target: targetId
					});
				}
			});
		});

		const simulation = d3.forceSimulation(nodes)
			.force("link", d3.forceLink(links).id((d) => d.id))
			.force("collide", d3.forceCollide().radius(RADIUS))
			.force("charge", d3.forceManyBody())
			.force("center", d3.forceCenter(width / 2, height / 2))
			.on("tick", () => {
				drawNetwork(context, width, height, nodes, links);
			});

		return () => {
			simulation.stop();
		};
	}, [users]);

	return (
		<div style={{ width, height }}>
			<canvas ref={canvasRef} width={width} height={height}></canvas>
		</div>
	);
};

export async function getServerSideProps() {
	const filePath = path.join(process.cwd(), "public", "demoData", "users.json");
	const users = await fetchDemoData(filePath);
	return { props: { users } };
}

export default UserNetworkGraph;
