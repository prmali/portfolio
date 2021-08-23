import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@material-ui/core";
import resume from "../prathik_malireddy_resume.pdf";

import { Socials } from "../content";

const SocialButtonWrapper = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	overflow: hidden;
	background-color: white;
	cursor: pointer;
	transition: transform 250ms ease-in-out;
	padding: 10px;
	margin: 0px 10px;
	font-size: 35px;
	display: flex;
	align-items: center;
	justify-content: center;

	:hover {
		box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.5);
	}
`;

const SocialButton = (props) => {
	return (
		<Tooltip title={props.name}>
			<SocialButtonWrapper
				onClick={() => {
					window.open(props.host + props.user, "_blank");
				}}
			>
				<FontAwesomeIcon icon={props.icon} color={props.color} />
			</SocialButtonWrapper>
		</Tooltip>
	);
};

const Home = (props) => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1 style={{ color: "white", margin: "8% 0px 0px" }}>
				Prathik Malireddy
			</h1>
			<p
				style={{
					fontWeight: 600,
					marginBottom: "30px",
					cursor: "pointer",
				}}
			>
				<a
					href={resume}
					download
					style={{ textDecoration: "none", color: "#5C42FF" }}
				>
					View Resume
				</a>
			</p>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{Socials.map((props) => (
					<SocialButton {...props} />
				))}
			</div>
		</div>
	);
};

export default Home;
