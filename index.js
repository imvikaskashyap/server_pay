const express = require("express");
const app = express();
require("./db/db.config");
const Razorpay = require("razorpay");
const router = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8081;

// middlewares
app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(router);

const instance = new Razorpay({
	key_id: "rzp_test_bTBMIidp2ai3Lc",
	key_secret: "tHTCQrfAK9PtV8BlAZ0Mm8O8",
});

// app.listen(PORT);
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});

module.exports = instance;
