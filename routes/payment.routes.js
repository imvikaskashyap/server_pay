const Payment = require("../model/Payment");

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const paymentRouter = express.Router();

paymentRouter.post("/data", async (req, res) => {
	try {
		const { name, email, phone } = req.body;

		// Check if user already exists
		const existingUser = await Payment.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Create a new user
		const user = new Payment({
			name,
			email,
			phone,
		});
		await user.save();

		// Return the user details
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			phone: user.phone,
			userId: user.userId,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

module.exports = paymentRouter;
