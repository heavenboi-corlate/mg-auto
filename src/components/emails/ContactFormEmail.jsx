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

const ContactFormEmail = ({
	name = "John Doe",
	email = "john@example.com",
	message = "Hello, I'm interested in your services.",
}) => {
	const baseUrl = "https://your-domain.com";

	return (
		<Html>
			<Head />
			<Preview>New Contact Form Message from {name}</Preview>
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
						<Heading style={heading}>New Contact Form Message</Heading>
						<Text style={text}>You have received a new message from your website's contact form.</Text>

						{/* Message Details */}
						<Section style={detailsContainer}>
							<Heading as="h2" style={subheading}>
								Message Details:
							</Heading>
							<Text style={detailText}>
								<strong>Name:</strong> {name}
							</Text>
							<Text style={detailText}>
								<strong>Email:</strong> {email}
							</Text>
							<Text style={detailText}>
								<strong>Message:</strong>
							</Text>
							<Text style={messageText}>{message}</Text>
						</Section>

						<Hr style={hr} />

						{/* Footer */}
						<Section style={footer}>
							<Text style={footerText}>
								© {new Date().getFullYear()} MG Auto. All rights reserved.
							</Text>
						</Section>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default ContactFormEmail;

// Styles
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

const messageText = {
	fontSize: "16px",
	lineHeight: "1.5",
	color: "#4b5563",
	margin: "12px 0",
	padding: "16px",
	backgroundColor: "#ffffff",
	borderRadius: "4px",
	whiteSpace: "pre-wrap",
};

const hr = {
	borderColor: "#e6ebf1",
	margin: "24px 0",
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
