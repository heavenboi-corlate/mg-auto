import React, { useState } from "react";

const servicesList = [
	"General Repair",
	"Battery Service",
	"Brake Service",
	"Oil Change",
	"Transmission",
	"A/C Service",
	"Detailing",
	"Diagnostics",
];

const BookingForm = () => {
	const [selectedService, setSelectedService] = useState("");
	const [vehicleInfo, setVehicleInfo] = useState("");
	const [date, setDate] = useState("");

	const handleServiceChange = (event) => {
		setSelectedService(event.target.value);
	};

	return (
		<div
			id="BookingForm"
			className="p-8 transition-all shadow-xl bg-white/10 backdrop-blur-lg rounded-2xl"
		>
			<h2 className="mb-6 text-2xl font-bold text-white">Schedule Service</h2>
			<form className="space-y-4">
				<div>
					<input
						type="text"
						placeholder="Vehicle Make & Model"
						value={vehicleInfo}
						onChange={(e) => setVehicleInfo(e.target.value)}
						className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500"
					/>
				</div>

				{/* Styled Select */}
				<div className="relative">
					<select
						value={selectedService}
						onChange={handleServiceChange}
						className="w-full px-4 py-3 pr-10 text-white placeholder-gray-400 transition-all border rounded-lg appearance-none bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500"
					>
						<option value="" disabled>
							Select Service Type
						</option>
						{servicesList.map((service, index) => (
							<option key={index} value={service}>
								{service}
							</option>
						))}
					</select>
					{/* Custom Arrow */}
					<div className="absolute transform -translate-y-1/2 pointer-events-none right-4 top-1/2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</div>
				</div>

				<div>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500"
					/>
				</div>

				<button
					type="submit"
					className="w-full px-8 py-4 font-semibold transition-all bg-yellow-400 rounded-lg hover:bg-yellow-500 text-slate-900 hover:shadow-lg active:scale-95"
				>
					Book Appointment
				</button>
			</form>
		</div>
	);
};

export default BookingForm;
