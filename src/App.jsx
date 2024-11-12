import React from "react";
import "./index.css";
import Navbar from "./components/NavBar"
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import FooterBar from "./components/FooterBar";


const App = () => {
	return (
		<div className="App min-h-screen">
			<Navbar />
			<Hero />
			<AboutUs />
			<Service />
			<Testimonials />
			<ContactUs />
			<FooterBar />
		</div>
	);
};

export default App;
