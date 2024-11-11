import React from "react";
import "./App.css";
import Navbar from "./components/NavBar"
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import FooterBar from "./components/FooterBar";

const servicesData = [
	{
		title: "Car Servicing",
		description:
			"Comprehensive car servicing to keep your vehicle in top shape.",
	},
	{
		title: "Car Repair",
		description: "Expert repairs for all makes and models.",
	},
	{
		title: "Spare Parts",
		description: "Quality spare parts for your vehicle.",
	},
	{
		title: "Car Maintenance",
		description: "Regular maintenance checks to ensure longevity.",
	},
];

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<AboutUs />
			<section id="services">
				<h2>Our Services</h2>
				{servicesData.map((service, index) => (
					<Service
						key={index}
						title={service.title}
						description={service.description}
					/>
				))}
			</section>
			<Testimonials />
			<ContactUs />
			<FooterBar />
		</div>
	);
};

export default App;
