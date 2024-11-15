import React, { useState } from "react";
import axios from "axios";

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
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleServiceChange = (event) => {
		setSelectedService(event.target.value);
	};

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!vehicleInfo || !selectedService || !email || !date) {
			setError("Please fill in all fields.");
			return;
		}

		if (!validateEmail(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		setError("");
		setSuccessMessage("");
		setIsSubmitting(true);

		try {
			// POST to backend endpoint
			const response = await axios.post("/api/send-email", {
				to: email,
				vehicleInfo,
				service: selectedService,
				date,
			});

			setSuccessMessage(response.data.message || "Email sent successfully!");
			setVehicleInfo("");
			setSelectedService("");
			setEmail("");
			setDate("");
		} catch (err) {
			setError("Failed to send email. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="p-8 shadow-xl bg-white/10 backdrop-blur-lg rounded-2xl">
			<h2 className="mb-6 text-2xl font-bold text-white">Schedule Service</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				{error && <p className="text-red-500">{error}</p>}
				{successMessage && <p className="text-green-500">{successMessage}</p>}

				<input
					type="text"
					placeholder="Vehicle Make & Model"
					value={vehicleInfo}
					onChange={(e) => setVehicleInfo(e.target.value)}
					className="w-full px-4 py-3 text-white bg-gray-800 rounded-lg"
				/>
				<input
					type="email"
					placeholder="Your Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full px-4 py-3 text-white bg-gray-800 rounded-lg"
				/>
				<select
					value={selectedService}
					onChange={handleServiceChange}
					className="w-full px-4 py-3 text-white bg-gray-800 rounded-lg"
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
				<input
					type="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
					className="w-full px-4 py-3 text-white bg-gray-800 rounded-lg"
				/>
				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-500 disabled:opacity-50"
				>
					{isSubmitting ? "Submitting..." : "Book Appointment"}
				</button>
			</form>
		</div>
	);
};

export default BookingForm;
