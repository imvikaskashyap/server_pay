let express = require("express");
let router = express.Router();

let paymentRoutes = require("./payment.routes");

router.use("/", paymentRoutes);

module.exports = router;
