import {
	Phone,
	Mail,
	MapPin,
	Clock,
	Facebook,
	Twitter,
	Instagram,
	Youtube,
} from "lucide-react";
import { Button } from "../ui";
import { useState } from "react";
import { useToast } from "../ui";
import axios from "axios";

const FooterBar = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const { addToast } = useToast();

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		// Validate form
		if (!formData.name || !formData.email || !formData.message) {
			addToast("Please fill in all fields.", "error");
			return;
		}

		if (!validateEmail(formData.email)) {
			addToast("Please enter a valid email address.", "error");
			return;
		}

		setIsLoading(true);

		try {
			// Send email using the API
			const response = await axios.post("/api/send-email", {
				type: "contact",
				...formData
			});

			addToast("Message sent successfully!", "success");
			setFormData({ name: "", email: "", message: "" });
		} catch (err) {
			console.error("Contact form submission error:", err);
			addToast("Failed to send message. Please try again.", "error");
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	return (
		<footer id="FooterBar" className="bg-slate-950">
			{/* Main Footer */}
			<div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
					{/* Company Info */}
					<div>
						<h3 className="mb-6 text-2xl font-bold text-white">
							MG <span className="text-red-600">Automobile</span>
						</h3>
						<p className="mb-6 text-gray-400">
							Professional auto care services delivered by certified
							technicians. Your trusted partner in vehicle maintenance and
							repair.
						</p>
						<div className="flex space-x-4">
							{[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
								<a
									key={index}
									href="#"
									className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/10 hover:bg-red-400 group"
								>
									<Icon className="w-5 h-5 text-white group-hover:text-slate-900" />
								</a>
							))}
						</div>
					</div>

					{/* Contact Info */}
					<div id="contact">
						<h4 className="mb-6 text-lg font-semibold text-white">
							Contact Info
						</h4>
						<ul className="space-y-4">
							<li className="flex items-center space-x-3 text-gray-400">
								<Phone className="w-5 h-5 text-red-400" />
								<span>(27) 83-496-2978</span>
							</li>
							<li className="flex items-center space-x-3 text-gray-400">
								<Mail className="w-5 h-5 text-red-400" />
								<span>info@mgautoworkshop.co.za</span>
							</li>
							<li className="flex items-center space-x-3 text-gray-400">
								<MapPin className="w-5 h-5 text-red-400" />
								<span>2 Tungsten Rd, Germiston, Johannesburg</span>
							</li>
							<li className="flex items-center space-x-3 text-gray-400">
								<Clock className="w-5 h-5 text-red-400" />
								<span>Mon-Sat: 8:00 AM - 6:00 PM</span>
							</li>
						</ul>
					</div>

					{/* Contact Form */}
					<div>
						<h4 className="mb-6 text-lg font-semibold text-white">Send us a Message</h4>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Your Name"
									required
									className="w-full px-4 py-2 bg-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
								/>
							</div>
							<div>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Your Email"
									required
									className="w-full px-4 py-2 bg-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
								/>
							</div>
							<div>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Your Message"
									required
									rows="4"
									className="w-full px-4 py-2 bg-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200 resize-none"
								/>
							</div>
							<Button
								type="submit"
								variant="primary"
								size="md"
								isLoading={isLoading}
								className="w-full"
							>
								Send Message
							</Button>
						</form>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-white/10">
				<div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
						<div className="text-sm text-gray-400">
							{new Date().getFullYear()} MG Automobile. All rights reserved.
							website by{" "}
							<a
								href="https://corlate.co.za"
								className="text-yellow-400 hover:shadow-yellow-400  hover:text-red-400"
							>
								Corlate Technologies
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { FooterBar };
