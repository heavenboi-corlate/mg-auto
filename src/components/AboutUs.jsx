import { Award, Users, Star, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
	const stats = [
		{ icon: Award, label: "Years Experience", value: "25+" },
		{ icon: Users, label: "Happy Customers", value: "15K+" },
		{ icon: Star, label: "Expert Mechanics", value: "20+" },
		{ icon: Briefcase, label: "Services Completed", value: "30K+" },
	];

	return (
		<section id="aboutus" className="py-20 bg-white">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				{/* Grid Container */}
				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* Left Column - Images */}
					<div className="relative">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-4">
								{/* Image with animation */}
								<motion.img
									src="/work1.jpg"
									alt="Mechanic working"
									className="object-cover w-full h-64 shadow-lg rounded-2xl"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1 }}
								/>
								<motion.img
									src="/work2.jpg"
									alt="Auto diagnostic"
									className="object-cover w-full h-48 shadow-lg rounded-2xl"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1, delay: 0.2 }}
								/>
							</div>
							<div className="pt-8 space-y-4">
								<motion.img
									src="/work3.jpg"
									alt="Car service"
									className="object-cover w-full h-48 shadow-lg rounded-2xl"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1, delay: 0.4 }}
								/>
								<motion.img
									src="/work5.jpg"
									alt="Car maintenance"
									className="object-cover w-full h-64 shadow-lg rounded-2xl"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1, delay: 0.6 }}
								/>
							</div>
						</div>

						{/* Accent Elements */}
						<div className="absolute rounded-full -bottom-8 -left-8 w-72 h-72 bg-yellow-400/10 blur-3xl -z-10"></div>
						<div className="absolute rounded-full -top-8 -right-8 w-72 h-72 bg-slate-900/10 blur-3xl -z-10"></div>
					</div>

					{/* Right Column - Content */}
					<div className="space-y-8">
						<div>
							<h2 className="mb-4 text-4xl font-bold text-slate-900">
								Your Trusted Partner in{" "}
								<span className="text-yellow-400">Auto Care</span>
							</h2>
							<p className="text-lg leading-relaxed text-gray-600">
								Since 1998, AutoCarePro has been delivering top-notch automotive
								services with unwavering commitment to quality and customer
								satisfaction. Our state-of-the-art facility and ASE-certified
								technicians ensure your vehicle receives the best care possible.
							</p>
						</div>

						{/* Key Features */}
						<div className="grid grid-cols-2 gap-6">
							<div className="space-y-2">
								<h3 className="text-xl font-semibold text-slate-900">
									Expert Team
								</h3>
								<p className="text-gray-600">
									ASE-certified mechanics with continuous training in latest
									automotive technologies.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold text-slate-900">
									Modern Equipment
								</h3>
								<p className="text-gray-600">
									Advanced diagnostic tools and equipment for precise service
									delivery.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold text-slate-900">
									Quality Parts
								</h3>
								<p className="text-gray-600">
									Only genuine OEM and high-quality aftermarket parts used.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold text-slate-900">
									Fair Pricing
								</h3>
								<p className="text-gray-600">
									Transparent pricing with no hidden fees or unexpected charges.
								</p>
							</div>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-2 gap-8 pt-8 sm:grid-cols-4">
							{stats.map(({ icon: Icon, label, value }) => (
								<motion.div
									key={label}
									className="text-center"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1, delay: 0.3 }}
								>
									<Icon className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
									<div className="text-2xl font-bold text-slate-900">
										{value}
									</div>
									<div className="text-sm text-gray-600">{label}</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
