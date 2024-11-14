import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import scrollTo from "./ScrollTo"; // Import the updated scrollTo function

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen((prevState) => !prevState);

	return (
		<nav className="fixed z-50 w-full bg-slate-900/90 backdrop-blur-lg">
			<div id="Navbar" className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<span className="text-2xl font-bold text-white">
							Mg<span className="text-yellow-400">Auto</span>
						</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="flex items-center ml-10 space-x-8">
							<a
								href="#"
								onClick={() => scrollTo("home")} // Scroll to the home section
								className="text-white transition-colors hover:text-yellow-400"
							>
								Home
							</a>
							<a
								href="#aboutus"
								onClick={() => scrollTo("aboutus")} // Scroll to the about section
								className="text-gray-300 transition-colors hover:text-yellow-400"
							>
								About
							</a>
							<a
								href="#services"
								onClick={() => scrollTo("services")} // Scroll to the services section
								className="text-gray-300 transition-colors hover:text-yellow-400"
							>
								Services
							</a>
							<a
								href="#testimonials"
								onClick={() => scrollTo("testimonials")} // Scroll to testimonials section
								className="text-gray-300 transition-colors hover:text-yellow-400"
							>
								Testimonials
							</a>
							<button
								className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95"
								onClick={() => scrollTo("BookingForm")} // Scroll to booking form
							>
								Book Now
							</button>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none"
							aria-label="Toggle Menu"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="transition-all duration-300 ease-in-out md:hidden bg-slate-800">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<a
							href="#"
							onClick={() => scrollTo("home")}
							className="block px-3 py-2 text-white rounded-md hover:bg-gray-700"
						>
							Home
						</a>
						<a
							href="#aboutus"
							onClick={() => scrollTo("aboutus")}
							className="block px-3 py-2 text-gray-300 rounded-md hover:bg-gray-700"
						>
							About
						</a>
						<a
							href="#services"
							onClick={() => scrollTo("services")}
							className="block px-3 py-2 text-gray-300 rounded-md hover:bg-gray-700"
						>
							Services
						</a>
						<a
							href="#testimonials"
							onClick={() => scrollTo("testimonials")}
							className="block px-3 py-2 text-gray-300 rounded-md hover:bg-gray-700"
						>
							Testimonials
						</a>
						<button
							className="w-full mt-2 px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95"
							onClick={() => scrollTo("BookingForm")}
						>
							Book Now
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
