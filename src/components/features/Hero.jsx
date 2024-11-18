import { Shield, Clock, Wrench, ArrowRight } from "lucide-react";
import { useState } from "react";
import BookingForm from "./BookingForm";

const Hero = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	const handleImageLoad = () => {
		setIsLoaded(true);
	};

	return (
		<div
			id="hero"
			className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 to-slate-800"
		>
			{/* Fallback Gradient Background */}
			<div
				className={`absolute inset-0 z-0 transition-opacity duration-500 ${
					isLoaded ? "opacity-0" : "opacity-100"
				}`}
				style={{
					background: "linear-gradient(to bottom, #1e293b, #334155)",
					height: "100%",
					width: "100%",
				}}
			/>

			{/* Lazy-loaded Background Image */}
			<img
				src="/hero2.png"
				alt="Hero background"
				className={`absolute inset-0 z-0 w-full h-full object-cover transition-opacity duration-500 ${
					isLoaded ? "opacity-100" : "opacity-0"
				}`}
				onLoad={handleImageLoad}
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>

			{/* Overlay for Dim Background */}
			<div className="absolute inset-0 bg-slate-900/70"></div>

			{/* Content */}
			<div className="relative z-10 px-4 pt-32 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* Left Column */}
					<div className="space-y-8">
						<h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
							Professional Auto Care You Can{" "}
							<span className="text-red-600">Trust</span>
						</h1>
						<p className="max-w-xl text-lg text-gray-300">
							Expert maintenance and repair services to keep your vehicle
							running at peak performance. Experience the difference of
							certified technicians and state-of-the-art diagnostics.
						</p>
						{/* CTA Buttons */}
						<div className="flex flex-col gap-4 sm:flex-row">
							<button className="flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all bg-red-600 rounded-full hover:bg-red-400 text-slate-200 hover:shadow-lg hover:shadow-red-400/20 active:scale-95">
								Book Service Now
								<ArrowRight size={20} />
							</button>
							<button className="px-8 py-4 font-semibold text-white transition-all border-2 rounded-full border-white/20 hover:border-white/40 hover:shadow-lg">
								View Services
							</button>
						</div>
						{/* Features */}
						<div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3">
							<div className="flex items-center gap-3">
								<Shield className="w-10 h-10 text-red-500" />
								<div>
									<h3 className="font-semibold text-white">
										Certified Experts
									</h3>
									<p className="text-sm text-gray-300">ASE Certified Team</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Clock className="w-10 h-10 text-red-500" />
								<div>
									<h3 className="font-semibold text-white">Quick Service</h3>
									<p className="text-sm text-gray-300">Same Day Available</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Wrench className="w-10 h-10 text-red-500" />
								<div>
									<h3 className="font-semibold text-white">Modern Tools</h3>
									<p className="text-sm text-gray-300">Latest Equipment</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Booking Form */}
					<div className="w-full max-w-md lg:justify-self-end">
						<BookingForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
