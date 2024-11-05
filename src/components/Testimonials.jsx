import React from "react";

const Testimonials = () => {
	const testimonials = [
		{ id: 1, text: "MG Auto provided excellent service!" },
		{ id: 2, text: "I trust them with all my car needs." },
		{ id: 3, text: "Professional and reliable!" },
	];

	return (
		<section id="testimonials">
			<h2>What Our Customers Say</h2>
			<div className="testimonial-list">
				{testimonials.map((testimonial) => (
					<blockquote key={testimonial.id}>"{testimonial.text}"</blockquote>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
