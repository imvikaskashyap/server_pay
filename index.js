const express = require("express");
const app = express();
require("./db/db.config");

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

// app.listen(PORT);
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
