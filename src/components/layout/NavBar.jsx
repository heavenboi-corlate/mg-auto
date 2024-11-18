import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Services", href: "#services" },
	{ name: "Contact", href: "#contact" },
];

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 50;
			setScrolled(isScrolled);

			// Calculate scroll progress
			const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scrolled = (winScroll / height) * 100;
			setScrollProgress(scrolled);

			// Determine active section
			const sections = navItems.map(item => item.href.substring(1));
			let foundActive = false;
			
			for (const section of sections.reverse()) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					const navHeight = 64; // Height of the navbar
					if (rect.top <= navHeight + 50 && rect.bottom > navHeight) {
						setActiveSection(section);
						foundActive = true;
						break;
					}
				}
			}

			// If no section is in view, determine based on scroll position
			if (!foundActive) {
				const currentScroll = window.scrollY + window.innerHeight / 3;
				for (const section of sections.reverse()) {
					const element = document.getElementById(section);
					if (element) {
						const rect = element.getBoundingClientRect();
						const absoluteTop = window.scrollY + rect.top;
						if (currentScroll >= absoluteTop) {
							setActiveSection(section);
							break;
						}
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleNavClick = (e, href) => {
		e.preventDefault();
		const targetId = href.substring(1);
		const element = document.getElementById(targetId);
		
		if (element) {
			const navHeight = 64; // Height of the navbar
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - navHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}

		setIsOpen(false);
	};

	return (
		<>
			<motion.nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					scrolled ? "bg-slate-900/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
				}`}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ type: "spring", stiffness: 100, damping: 20 }}
			>
				{/* Scroll Progress Bar */}
				<motion.div 
					className="absolute bottom-0 left-0 h-0.5 bg-red-600"
					style={{ width: `${scrollProgress}%` }}
				/>

				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<motion.div 
							className="flex-shrink-0"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<a 
								href="#hero" 
								className="text-2xl font-bold text-white"
								onClick={(e) => handleNavClick(e, "#hero")}
							>
								MG Auto
							</a>
						</motion.div>

						{/* Desktop Navigation */}
						<div className="hidden md:block">
							<div className="flex items-center space-x-4">
								{navItems.map((item, index) => (
									<motion.a
										key={item.name}
										href={item.href}
										onClick={(e) => handleNavClick(e, item.href)}
										className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
											activeSection === item.href.substring(1)
												? "bg-white/20 text-white"
												: "text-gray-300 hover:bg-white/10 hover:text-white"
										}`}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										{item.name}
									</motion.a>
								))}
								<motion.button
									className="px-4 py-2 font-medium text-white transition-all bg-red-600 rounded-full hover:bg-red-500 active:bg-red-700 shadow-lg hover:shadow-red-600/50"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={(e) => handleNavClick(e, "#contact")}
								>
									Book Now
								</motion.button>
							</div>
						</div>

						{/* Mobile menu button */}
						<motion.div className="flex md:hidden"
							whileTap={{ scale: 0.9 }}
						>
							<button
								onClick={toggleMenu}
								className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-white/10"
								aria-label="Toggle menu"
							>
								<AnimatePresence mode="wait">
									{isOpen ? (
										<motion.div
											key="close"
											initial={{ rotate: -90, opacity: 0 }}
											animate={{ rotate: 0, opacity: 1 }}
											exit={{ rotate: 90, opacity: 0 }}
											transition={{ duration: 0.2 }}
										>
											<X className="w-6 h-6" />
										</motion.div>
									) : (
										<motion.div
											key="menu"
											initial={{ rotate: 90, opacity: 0 }}
											animate={{ rotate: 0, opacity: 1 }}
											exit={{ rotate: -90, opacity: 0 }}
											transition={{ duration: 0.2 }}
										>
											<Menu className="w-6 h-6" />
										</motion.div>
									)}
								</AnimatePresence>
							</button>
						</motion.div>
					</div>
				</div>

				{/* Mobile menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="md:hidden"
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.2 }}
						>
							<div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg bg-slate-900/90">
								{navItems.map((item, index) => (
									<motion.a
										key={item.name}
										href={item.href}
										onClick={(e) => handleNavClick(e, item.href)}
										className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 ${
											activeSection === item.href.substring(1)
												? "bg-white/20 text-white"
												: "text-gray-300 hover:bg-white/10 hover:text-white"
										}`}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
										whileHover={{ scale: 1.05, x: 10 }}
										whileTap={{ scale: 0.95 }}
									>
										{item.name}
									</motion.a>
								))}
								<motion.button
									className="w-full px-4 py-2 font-medium text-white transition-all bg-red-600 rounded-full hover:bg-red-500 active:bg-red-700 shadow-lg hover:shadow-red-600/50"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={(e) => handleNavClick(e, "#contact")}
								>
									Book Now
								</motion.button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	);
};

export { NavBar };
