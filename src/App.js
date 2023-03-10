import React from "react";
import './App.css';
import {About, Courses, FaqsItems, Footer, Header, Navbar, Step} from "./components";

function App() {
	return (<div className="">
		<Navbar/>
		<Header/>
		<About/>
		<Step/>
		<Courses/>
		<FaqsItems/>
		<Footer/>
	</div>);
}

export default App;
