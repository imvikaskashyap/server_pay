const razorpayInstance = require("../index");

const express = require("express");
const feeRouter = express.Router();

feeRouter.post("/checkout", async (req, res) => {
	var options = {
		amount: 50000, // amount in the smallest currency unit
		currency: "INR",
		receipt: "order_rcptid_11",
	};

	razorpayInstance.orders.create(options, function (err, order) {
		console.log(order);
	});

	res.status(200).json({
		success: true,
	});
});

module.exports = feeRouter;
