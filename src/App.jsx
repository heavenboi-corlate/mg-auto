import { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import FooterBar from "./components/FooterBar";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000); // Adjust the loading duration as needed

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{isLoading ? (
				<LoadingSpinner fadeOut={!isLoading} />
			) : (
				<div className="App animate-fade-in">
					<Navbar />
					<Hero />
					<AboutUs />
					<Service />
					<Testimonials />
					<FooterBar />
				</div>
			)}
		</>
	);
}

export default App;
