import React from "react";

const Service = ({ title, description }) => {
	return (
		<div className="service">
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default Service;
