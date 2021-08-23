import React from "react";
import { Experience } from "../content";

const ExperienceComponent = (props) => {
	return (
		<div style={{ padding: "0px 50px" }}>
			{Experience.map(({ company, role, date, description, stack }) => (
				<div style={{ marginBottom: "10px" }}>
					<h1 style={{ margin: "0px", color: "white" }}>{company}</h1>
					<h3 style={{ margin: 0, color: "#dedede" }}>{role}</h3>
					<p style={{ margin: 0, color: "#a6a6a6" }}>
						{date[0]} - {date[1]}
					</p>
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

export default ExperienceComponent;
