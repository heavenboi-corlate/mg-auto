const express = require("express");
const bodyParser = require("body-parser");
const { Resend } = require("resend");
const { Email } = require("../emails/index");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY); // Use environment variable
const email_from = new process.env.EMAIL_FROM();

app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
	const { to, vehicleInfo, service, date } = req.body;

	if (!to || !vehicleInfo || !service || !date) {
		return res.status(400).json({ message: "All fields are required." });
	}

	try {
		await resend.emails.send({
			from: email_from,
			to,
			subject: "Appointment Confirmation",
			react: <Email vehicleInfo={vehicleInfo} service={service} date={date} />,
		});

		res.status(200).json({ message: "Email sent successfully!" });
	} catch (err) {
		console.error("Error sending email:", err);
		res.status(500).json({ message: "Failed to send email." });
	}
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
