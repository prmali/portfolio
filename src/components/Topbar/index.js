import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
	margin: 1em 0;
	padding: 1em 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

/*(props) =>
		props.active
			? `background: -webkit-linear-gradient(#cb2d3e 0%, #ef473a 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`
			: `color: white;
        background: transparent;`*/

const Item = styled.div`
	font-weight: 600;
	letter-spacing: 3;
	margin: 0 1.5em;
	margin-bottom: 0.5em;

	${(props) =>
		props.active
			? ``
			: `:after {
		display: block;
		content: "";
		border-bottom: solid 2px #ffffff;
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
	}
	:hover:after {
		transform: scaleX(0.6);
	}
	:after {
		transform-origin: 0% 50%;
	}`}
`;

const paths = ["Home", "Experience", "Projects", "Blog"];

const Topbar = (props) => {
	const [active, setActive] = useState(0);
	return (
		<Wrapper>
			{paths.map((name, index) => {
				return (
					<Item
						key={index}
						onClick={() => {
							setActive(index);
						}}
						active={index === active}
					>
						<Link
							to={`/${name !== "Home" ? name.toLowerCase() : ""}`}
							style={{
								textDecoration: "none",
								color: active === index ? "white" : "#DEDEDE",
								borderBottom:
									active === index
										? "solid 2px white"
										: "none",
							}}
						>
							{name}
						</Link>
					</Item>
				);
			})}
		</Wrapper>
	);
};

export default Topbar;
