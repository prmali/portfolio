import {
	faTwitter,
	faInstagram,
	faLinkedinIn,
	faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

import solidity from "./assets/sol.png";
import web3 from "./assets/web3.png";
import rust from "./assets/rust.svg";

const Socials = [
	{
		name: "LinkedIn",
		host: "https://www.linkedin.com/in/",
		user: "pmali",
		icon: faLinkedinIn,
		color: "#2867B2",
	},
	{
		name: "Github",
		host: "https://github.com/",
		user: "pmali",
		icon: faGithubAlt,
		color: "#211F1F",
	},
	{
		name: "Instagram",
		host: "https://www.instagram.com/",
		user: "prathik.03",
		icon: faInstagram,
		color: "#F77737",
	},
	{
		name: "Twitter",
		host: "https://www.twitter.com/",
		user: "pmali03",
		icon: faTwitter,
		color: "#1DA1F2",
	},
];

const Experience = [
	{
		company: "Walmart Global Tech",
		role: "Software Engineer Intern",
		date: ["06/2021", "08/2021"],
		description: [
			"Built an API layer for the International Data team to wrap and operate on a pipeline I created which unifies varying information from various data acceleration layers.",
			"Created a data-source agnostic frontend to function despite the noise across data sources.",
		],
		stack: [
			<i class="devicon-nodejs-plain colored"></i>,
			<i class="devicon-googlecloud-plain colored"></i>,
			<img
				src={"https://www.dremio.com/favicons/favicon.ico"}
				alt={"dremio"}
				style={{ width: 50, height: 50 }}
			/>,
			<i class="devicon-django-plain-wordmark colored"></i>,
			<i class="devicon-graphql-plain colored"></i>,
			<i class="devicon-react-original colored"></i>,
			<i class="devicon-redux-original colored"></i>,
			<i class="devicon-docker-plain colored"></i>,
		],
	},
	{
		company: "Minti",
		role: "Software Engineer Intern",
		date: ["03/2021", "Current"],
		description: [
			"Designed and implemented full stack digital asset marketplace application on the Matic and Solana blockchains",
		],
		stack: [
			<i class="devicon-nodejs-plain colored"></i>,
			<img
				src={solidity}
				alt={"solidity"}
				style={{ width: 50, height: 50 }}
			/>,
			<img
				src={"https://docs.ethers.io/v5/static/logo.svg"}
				alt={"ethers.js"}
				style={{ width: 50, height: 50 }}
			/>,
			<img src={rust} alt={"rust"} style={{ width: 50, height: 50 }} />,
			<i class="devicon-mongodb-plain colored"></i>,
			<i class="devicon-amazonwebservices-original colored"></i>,
			<i class="devicon-heroku-plain colored"></i>,
			<i class="devicon-react-original colored"></i>,
			<i class="devicon-redux-original colored"></i>,
			<i class="devicon-docker-plain colored"></i>,
		],
	},
	{
		company: "Food Haven",
		role: "Software Engineer Intern",
		date: ["11/2020", "03/2021"],
		description: [
			"Assisted in development of full-stack business dashboard and mobile app implementations along w/ Stripe Connect integration",
		],
		stack: [
			<i class="devicon-nodejs-plain colored"></i>,
			<i class="devicon-mongodb-plain colored"></i>,
			<i class="devicon-react-original colored"></i>,
			<i class="devicon-redux-original colored"></i>,
		],
	},
	{
		company: "Index Labs",
		role: "Co-founder",
		date: ["09/2019", "07/2020"],
		description: [
			"Co-authored whitepaper calling for the decentralization of traditional financial indexes",
			"Constructed ERC-20 token standard smart contracts for platform currency in Solidity",
		],
		stack: [
			<i class="devicon-javascript-plain colored"></i>,
			<i class="devicon-nodejs-plain colored"></i>,
			<img
				src={solidity}
				alt={"solidity"}
				style={{ width: 50, height: 50 }}
			/>,
			<img
				src={web3}
				alt={"web3.js"}
				style={{ width: 50, height: 50 }}
			/>,
			<i class="devicon-mongodb-plain colored"></i>,
			<i class="devicon-heroku-plain colored"></i>,
			<i class="devicon-react-original colored"></i>,
		],
	},
	{
		company: "Gamely",
		role: "Founder",
		date: ["06/2017", "12/2019"],
		description: [
			"Catered to 75k+ unique players. Reconstructed various projects' codebases.",
		],
		stack: [
			<i class="devicon-lua-plain-wordmark colored"></i>,
			<i class="devicon-javascript-plain colored"></i>,
		],
	},
];

const Projects = [];

export { Socials, Experience, Projects };
