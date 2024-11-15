import {
	Wrench,
	Battery,
	Gauge,
	PaintBucket,
	Cog,
	Thermometer,
	Sparkles,
	AlertCircle,
} from "lucide-react";
import { useRef } from "react";

const services = [
	{
		icon: Wrench,
		title: "General Repair",
		description:
			"Comprehensive repair services for all vehicle makes and models with state-of-the-art diagnostic equipment.",
		price: "From R1400",
	},
	{
		icon: Battery,
		title: "Battery Service",
		description:
			"Battery testing, replacement, and electrical system diagnostics to keep your vehicle starting strong.",
		price: "From R450",
	},
	{
		icon: Gauge,
		title: "Brake Service",
		description:
			"Complete brake system inspection, repair, and replacement services for your safety.",
		price: "From R980",
	},
	{
		icon: PaintBucket,
		title: "Oil Change",
		description:
			"Professional oil change service using premium synthetic oils and OEM filters. exclusively in-store",
		price: "From R450",
	},
	{
		icon: Cog,
		title: "Transmission",
		description:
			"Transmission diagnostic, maintenance, and repair services to ensure smooth operation.",
		price: "From R1500",
	},
	{
		icon: Thermometer,
		title: "A/C Service",
		description:
			"Complete air conditioning system diagnosis, repair, and recharge services.",
		price: "From R1400",
	},
	{
		icon: Sparkles,
		title: "Detailing",
		description:
			"Professional interior and exterior detailing services to restore your vehicle's appearance.",
		price: "From R3000",
	},
	{
		icon: AlertCircle,
		title: "Diagnostics",
		description:
			"Advanced computer diagnostics to identify and resolve complex vehicle issues.",
		price: "From R800",
	},
];

const Services = () => {
	const bookingFormRef = useRef(null);

	// Scroll to the booking form
	const scrollToBookingForm = () => {
		bookingFormRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<section id="services" className="py-20 bg-slate-800">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				{/* Header */}
				<div className="max-w-3xl mx-auto mb-16 text-center">
					<h2 className="mb-4 text-4xl font-extrabold text-white">
						Our Professional <span className="text-red-600">Services</span>
					</h2>
					<p className="text-lg text-gray-300">
						Comprehensive automobile care services delivered by certified
						technicians using state-of-the-art equipment.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{services.map((service) => (
						<div
							key={service.title}
							className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl group"
						>
							{/* Icon */}
							<div className="z-10 mb-6">
								<service.icon className="w-12 h-12 text-red-500 transition-transform duration-300 group-hover:scale-110" />
							</div>

							{/* Title */}
							<h3 className="z-10 mb-4 text-2xl font-bold text-white">
								{service.title}
							</h3>

							{/* Description */}
							<p className="z-10 mb-4 text-slate-100 text-opacity-90">
								{service.description}
							</p>

							{/* Price as Button */}
							<button
								className="px-6 py-2 mt-4 font-semibold text-white transition-all bg-red-600 rounded-full hover:bg-red-400 group-hover:scale-110"
								onClick={scrollToBookingForm}
							>
								{service.price}
							</button>

							{/* Hover Effects */}
							<div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-red-400/0 to-red-600/5 group-hover:opacity-100 rounded-2xl" />
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="mt-16 text-center">
					<button
						className="px-8 py-4 font-semibold transition-all bg-red-600 rounded-full hover:bg-red-400 text-slate-300 hover:shadow-lg hover:shadow-red-400/20 active:scale-95"
						onClick={scrollToBookingForm}
					>
						Schedule Service Now
					</button>
				</div>
			</div>
		</section>
	);
};

export default Services;
