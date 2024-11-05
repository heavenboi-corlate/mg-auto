import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo and Company Name */}
					<div className="flex-shrink-0 flex items-center">
						<span className="text-xl font-bold text-gray-800">TechFlow</span>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex md:items-center md:space-x-8">
						{["Home", "About", "Services", "Testimonials", "Contact Us"].map(
							(item) => (
								<button
									key={item}
									className="bg-white text-gray-600 hover:bg-orange-100 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors duration-300 rounded"
								>
									{item}
								</button>
							)
						)}
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-300"
						>
							{isOpen ? (
								<AiOutlineClose className="h-6 w-6" />
							) : (
								<AiOutlineMenu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
					{["Home", "About", "Services", "Testimonials", "Contact Us"].map(
						(item) => (
							<button
								key={item}
								className="w-full text-left bg-white text-gray-600 hover:bg-gray-50 hover:text-indigo-600 block px-3 py-2 text-base font-medium transition-colors duration-300"
							>
								{item}
							</button>
						)
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
