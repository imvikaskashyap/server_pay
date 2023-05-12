const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		userId: { type: Number, unique: true },
		name: String,
		email: String,
		phone: Number,
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	const user = this;
	if (!user.isNew) {
		return next();
	}
	try {
		const lastUser = await mongoose
			.model("userPay", userSchema)
			.findOne({})
			.sort({ userId: -1 })
			.exec();
		user.userId = lastUser ? lastUser.userId + 1 : 1;
		next();
	} catch (error) {
		next(error);
	}
});

module.exports = mongoose.model("userPay", userSchema);
