import { model, Schema } from "mongoose";

const userSchema = new Schema({
	userName: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	age: {
		type: String,
		required: true,
	},
});

export const userModel = model("user", userSchema);
