import React from "react";
import { Projects } from "../content";

const ProjectsComponent = (props) => {
	return (
		<div style={{ padding: "0px 50px" }}>
			{Projects.map(({ company, description, stack }) => (
				<div style={{ marginBottom: "10px" }}>
					<h3
						style={{
							margin: "0px",
							color: "white",
						}}
					>
						{company}
					</h3>
					<ul style={{ margin: "10px 0px" }}>
						{description.map((desc) => (
							<li style={{ color: "#dedede" }}>{desc}</li>
						))}
					</ul>
					<h4 style={{ color: "white", margin: 0 }}>Stack</h4>
					<div
						style={{
							fontSize: 50,
							display: "flex",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						{stack.map((tool) => (
							<div style={{ margin: "0px 10px" }}>{tool}</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectsComponent;
