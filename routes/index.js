let express = require("express");
let router = express.Router();

let userRoutes = require("./user.routes");
let feeRoutes = require("./fees.routes");

router.use("/", userRoutes);
router.use("/", feeRoutes);

module.exports = router;
