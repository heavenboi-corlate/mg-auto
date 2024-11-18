import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import {
	Car,
	Wrench,
	RotateCcw,
	Gauge,
	Cog,
	Sparkles,
} from "lucide-react";
import ErrorBoundary from "../common/ErrorBoundary";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: "-50px" }
};

const services = [
	{
		icon: Car,
		title: "General Service",
		description:
			"Comprehensive vehicle maintenance including oil changes, filters, and fluid checks.",
	},
	{
		icon: Wrench,
		title: "Repairs",
		description:
			"Expert diagnostic and repair services for all mechanical and electrical issues.",
	},
	{
		icon: RotateCcw,
		title: "Brake Service",
		description:
			"Complete brake system inspection, repair, and maintenance for your safety.",
	},
	{
		icon: Gauge,
		title: "Diagnostics",
		description:
			"Advanced computer diagnostics to identify and resolve vehicle issues.",
	},
	{
		icon: Cog,
		title: "Engine Work",
		description:
			"From tune-ups to major repairs, we keep your engine running smoothly.",
	},
	{
		icon: Sparkles,
		title: "Detailing",
		description:
			"Professional interior and exterior cleaning and detailing services.",
	},
];

const ServiceCard = memo(({ service, index }) => {
	if (!service?.icon || !service?.title || !service?.description) {
		throw new Error(`Invalid service data at index ${index}`);
	}

	const Icon = service.icon;
	
	return (
		<motion.div
			key={service.title}
			{...fadeInUp}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
			className="relative p-6 sm:p-8 transition-all duration-300 bg-white/5 backdrop-blur-lg rounded-2xl hover:bg-white/10 group"
		>
			<div className="relative flex items-center justify-center w-16 h-16 transition-transform duration-300 bg-red-600/10 rounded-2xl group-hover:scale-110">
				<Icon className="w-8 h-8 text-red-500 transition-colors duration-300 group-hover:text-red-400" />
			</div>
			<h3 className="mt-6 text-xl font-semibold text-white">
				{service.title}
			</h3>
			<p className="mt-3 text-base sm:text-lg text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
				{service.description}
			</p>
			<div className="absolute inset-0 transition-opacity duration-300 border border-red-500/0 rounded-2xl group-hover:border-red-500/20" />
		</motion.div>
	);
});

const ServiceCardWithBoundary = memo(({ service, index }) => (
	<ErrorBoundary
		fallback={(error) => (
			<div className="p-6 text-center bg-white/5 backdrop-blur-lg rounded-2xl">
				<h3 className="mb-2 text-lg font-semibold text-red-400">
					Service Unavailable
				</h3>
				<p className="text-sm text-gray-400">
					This service is temporarily unavailable.
				</p>
			</div>
		)}
	>
		<ServiceCard service={service} index={index} />
	</ErrorBoundary>
));

const Service = () => {
	const renderHeader = useCallback(() => (
		<div className="text-center">
			<motion.h2
				{...fadeInUp}
				transition={{ duration: 0.5 }}
				className="text-3xl font-bold text-white sm:text-4xl"
			>
				Our <span className="text-red-600">Services</span>
			</motion.h2>
			<motion.p
				{...fadeInUp}
				transition={{ duration: 0.5, delay: 0.1 }}
				className="max-w-2xl mx-auto mt-4 text-lg text-gray-400"
			>
				Professional auto repair and maintenance services to keep your
				vehicle in top condition.
			</motion.p>
		</div>
	), []);

	return (
		<ErrorBoundary>
			<section
				id="services"
				className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-800"
			>
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					{renderHeader()}

					<div className="grid gap-6 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((service, index) => (
							<ServiceCardWithBoundary
								key={service.title}
								service={service}
								index={index}
							/>
						))}
					</div>
				</div>
			</section>
		</ErrorBoundary>
	);
};

export default memo(Service);
