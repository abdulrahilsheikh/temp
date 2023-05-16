import { connect } from "mongoose";

export const connectToMongo = async () => {
	try {
		const MONGO_CONNECTION_STRING = "mongodb://localhost:27017/test";
		await connect(MONGO_CONNECTION_STRING);

		console.log("CONNECTED TO MONGODB");
		return true;
	} catch (e) {
		throw "COULD NOT CONNECT TO MONGO DB";
	}
};
