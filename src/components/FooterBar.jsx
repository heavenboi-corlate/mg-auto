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

const Footer = () => {
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
					<div>
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

					{/* Newsletter */}
					<div>
						<h4 className="mb-6 text-lg font-semibold text-white">
							Newsletter
						</h4>
						<p className="mb-4 text-gray-400">
							Subscribe to our newsletter for updates and exclusive offers.
						</p>
						<form className="space-y-4">
							<input
								type="email"
								placeholder="Your email address"
								className="w-full px-4 py-3 text-white placeholder-gray-400 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:border-red-400"
							/>
							<button className="w-full px-6 py-3 font-semibold transition-all bg-red-400 rounded-lg hover:bg-red-500 text-slate-900 hover:shadow-lg active:scale-95">
								Subscribe Now
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-white/10">
				<div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
						<div className="text-sm text-gray-400">
							© {new Date().getFullYear()} MG Automobile. All rights reserved.
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

export default Footer;
