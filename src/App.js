import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import "./App.css";

import Topbar from "./components/Topbar/index.js";
import Footer from "./components/Footer/index.js";

import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Experience from "./screens/Experience";

const App = (props) => {
	return (
		<Router>
			<div style={{ minHeight: "100vh", overflowY: "auto" }}>
				<Topbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/experience" component={Experience} />
					<Route render={() => <Redirect to={{ pathname: "/" }} />} />
				</Switch>
				{/*<Footer />*/}
			</div>
		</Router>
	);
};

export default App;
