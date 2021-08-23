import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-wrap: wrap;
	padding: 2em 1.25em;
	justify-content: center;
	word-wrap: normal;
	color: white;
`;

const Section = styled.section`
	padding: 0 3em;
	@media (max-width: 420px) {
		padding: 0 1em;
	}
`;

const Heading = styled.h1`
	margin: 0;
	padding: 0;
`;

const ContentContainer = styled.section`
	margin: 0;
	padding: 0;
`;

const Content = styled.a`
	display: block;
	margin: 0;
	padding: 0;
	color: rgb(100, 100, 100);
	font-weight: 600;
`;

const Marker = styled.div`
	margin: 0;
	padding-right: 3em;
	padding-bottom: 1em;
	text-align: right;
`;

const Footer = (props) => {
	return (
		<>
			<Wrapper>
				<Section>
					<Heading>Projects</Heading>
					<ContentContainer>
						<Content src="">Marketing Tools</Content>
						<Content src="">Liveplay</Content>
						<Content src="">Deals.me</Content>
						<Content src="">Hermes</Content>
					</ContentContainer>
				</Section>
				<Section>
					<Heading>Socials</Heading>
					<ContentContainer>
						<Content src="">Instagram</Content>
						<Content src="">LinkedIn</Content>
						<Content src=""></Content>
					</ContentContainer>
				</Section>
			</Wrapper>
			<Marker>
				<Content>prathik 2020</Content>
			</Marker>
		</>
	);
};

export default Footer;
