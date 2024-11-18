import React, { useState } from "react";
import axios from "axios";
import { Calendar, Car, Mail, Wrench } from "lucide-react";

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

function BookingForm() {
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
      console.error("Booking form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 shadow-xl bg-white/10 backdrop-blur-lg rounded-2xl">
      <h2 className="mb-6 text-2xl font-bold text-white">Schedule Service</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <p className="p-3 text-sm font-medium text-red-500 bg-red-500/10 rounded-lg">
            {error}
          </p>
        )}
        {successMessage && (
          <p className="p-3 text-sm font-medium text-green-500 bg-green-500/10 rounded-lg">
            {successMessage}
          </p>
        )}

        <div className="relative">
          <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Vehicle Make & Model"
            value={vehicleInfo}
            onChange={(e) => setVehicleInfo(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-white transition-colors bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:bg-gray-800"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-white transition-colors bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:bg-gray-800"
          />
        </div>

        <div className="relative">
          <Wrench className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={selectedService}
            onChange={handleServiceChange}
            className="w-full pl-10 pr-4 py-3 text-white transition-colors bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:bg-gray-800 appearance-none"
          >
            <option value="" disabled>
              Select Service Type
            </option>
            {servicesList.map((service, index) => (
              <option key={index} value={service} className="bg-gray-800">
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-white transition-colors bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:bg-gray-800"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 font-semibold text-white transition-all bg-red-600 rounded-lg hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-500/20 active:scale-[0.98]"
        >
          {isSubmitting ? "Submitting..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
