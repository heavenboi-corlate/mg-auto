import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import React from "react";

const BookingConfirmationEmail = ({
	customerName = "Thabiso Makoko",
	serviceDate = "March 15, 2024",
	serviceTime = "10:00 AM",
	serviceType = "Full Service",
	vehicleInfo = "2020 Tesla Model 3",
	bookingReference = "BK123456",
}) => {
	const baseUrl = "https://your-domain.com";

	return (
		<Html>
			<Head />
			<Preview>
				Your Auto Care Service Booking Confirmation - {bookingReference}
			</Preview>
			<Body style={main}>
				<Container style={container}>
					{/* Header */}
					<Section style={headerSection}>
						<Img
							src={`${baseUrl}/logo.png`}
							width="120"
							height="50"
							alt="MG Auto"
							style={logo}
						/>
					</Section>

					{/* Main Content */}
					<Section style={section}>
						<Heading style={heading}>Booking Confirmation</Heading>
						<Text style={text}>Dear {customerName},</Text>
						<Text style={text}>
							Thank you for choosing AutoCare Pro. Your service booking has been
							confirmed!
						</Text>

						{/* Booking Details */}
						<Section style={detailsContainer}>
							<Heading as="h2" style={subheading}>
								Booking Details:
							</Heading>
							<Text style={detailText}>
								<strong>Service Date:</strong> {serviceDate}
							</Text>
							<Text style={detailText}>
								<strong>Time:</strong> {serviceTime}
							</Text>
							<Text style={detailText}>
								<strong>Service Type:</strong> {serviceType}
							</Text>
							<Text style={detailText}>
								<strong>Vehicle:</strong> {vehicleInfo}
							</Text>
							<Text style={detailText}>
								<strong>Booking Reference:</strong> {bookingReference}
							</Text>
						</Section>

						<Hr style={hr} />

						{/* CTA Button */}
						<Section style={buttonContainer}>
							<Button
								style={button}
								href={`${baseUrl}/booking/${bookingReference}`}
							>
								View Booking Details
							</Button>
						</Section>

						{/* Additional Information */}
						<Text style={text}>
							Please arrive 10 minutes before your scheduled appointment. If you
							need to reschedule or cancel, please do so at least 24 hours in
							advance.
						</Text>

						{/* Contact Information */}
						<Section style={contactSection}>
							<Text style={contactText}>Need assistance? Contact us:</Text>
							<Text style={contactText}>📞 1-800-AUTO-CARE</Text>
							<Text style={contactText}>✉️ support@autocarepro.com</Text>
						</Section>
					</Section>

					{/* Footer */}
					<Section style={footer}>
						<Text style={footerText}>
							© 2024 AutoCare Pro. All rights reserved.
						</Text>
						<Text style={footerLinks}>
							<Link href={`${baseUrl}/privacy`} style={link}>
								Privacy Policy
							</Link>{" "}
							•{" "}
							<Link href={`${baseUrl}/terms`} style={link}>
								Terms of Service
							</Link>
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default BookingConfirmationEmail;

const main = {
	backgroundColor: "#f6f9fc",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "20px 0 48px",
	marginBottom: "64px",
};

const headerSection = {
	padding: "24px",
	borderBottom: "1px solid #e6ebf1",
};

const logo = {
	margin: "0 auto",
};

const section = {
	padding: "24px",
};

const heading = {
	fontSize: "32px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#1f2937",
	textAlign: "center",
	margin: "16px 0",
};

const subheading = {
	fontSize: "20px",
	lineHeight: "1.3",
	fontWeight: "600",
	color: "#374151",
	margin: "16px 0",
};

const text = {
	fontSize: "16px",
	lineHeight: "1.5",
	color: "#4b5563",
	margin: "16px 0",
};

const detailsContainer = {
	backgroundColor: "#f9fafb",
	padding: "24px",
	borderRadius: "8px",
	margin: "24px 0",
};

const detailText = {
	fontSize: "16px",
	lineHeight: "1.5",
	color: "#4b5563",
	margin: "8px 0",
};

const buttonContainer = {
	textAlign: "center",
	margin: "32px 0",
};

const button = {
	backgroundColor: "#2563eb",
	borderRadius: "6px",
	color: "#fff",
	fontSize: "16px",
	fontWeight: "600",
	textDecoration: "none",
	textAlign: "center",
	display: "inline-block",
	padding: "12px 24px",
};

const hr = {
	borderColor: "#e6ebf1",
	margin: "24px 0",
};

const contactSection = {
	backgroundColor: "#f9fafb",
	padding: "24px",
	borderRadius: "8px",
	margin: "24px 0",
};

const contactText = {
	fontSize: "14px",
	lineHeight: "1.5",
	color: "#6b7280",
	margin: "4px 0",
};

const footer = {
	textAlign: "center",
	padding: "24px",
};

const footerText = {
	fontSize: "14px",
	lineHeight: "1.5",
	color: "#6b7280",
	margin: "8px 0",
};

const footerLinks = {
	fontSize: "14px",
	lineHeight: "1.5",
	color: "#6b7280",
	margin: "8px 0",
};

const link = {
	color: "#2563eb",
	textDecoration: "none",
};
