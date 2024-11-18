import { motion } from "framer-motion";
import { Shield, Cog, Users } from "lucide-react";

const features = [
	{
		icon: Shield,
		title: "Expert Service",
		description:
			"Our certified technicians bring years of experience and expertise to every repair.",
	},
	{
		icon: Cog,
		title: "Quality Parts",
		description:
			"We use only high-quality, genuine parts to ensure lasting performance.",
	},
	{
		icon: Users,
		title: "Customer Focus",
		description:
			"Your satisfaction is our priority, with transparent communication throughout.",
	},
];

function AboutUs() {
	return (
		<section id="about" className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-3xl font-bold text-white sm:text-4xl"
						>
							Your Trusted <span className="text-red-600">Auto Care</span> Partner
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mt-4 text-lg text-gray-400"
						>
							With over 15 years of experience, we've built our reputation on quality
							service, honest pricing, and exceptional customer care. Our
							state-of-the-art facility and certified technicians ensure your
							vehicle receives the best possible service.
						</motion.p>

						<div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
							{features.map((feature, index) => (
								<motion.div
									key={feature.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
									className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl"
								>
									<feature.icon className="w-12 h-12 text-red-500" />
									<h3 className="mt-4 text-xl font-semibold text-white">
										{feature.title}
									</h3>
									<p className="mt-2 text-gray-400">{feature.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Image Gallery */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="grid gap-4 sm:grid-cols-2"
					>
						<div className="space-y-4">
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="overflow-hidden rounded-2xl"
							>
								<img
									src="/work1.jpg"
									alt="Workshop interior"
									className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="overflow-hidden rounded-2xl"
							>
								<img
									src="/work2.jpg"
									alt="Mechanic at work"
									className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
								/>
							</motion.div>
						</div>
						<div className="space-y-4">
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="overflow-hidden rounded-2xl"
							>
								<img
									src="/work3.jpg"
									alt="Diagnostic equipment"
									className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className="overflow-hidden rounded-2xl"
							>
								<img
									src="/work5.jpg"
									alt="Service bay"
									className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
								/>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
