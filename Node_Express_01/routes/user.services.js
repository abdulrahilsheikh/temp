import { userModel } from "./user.schema.js";
export const createUser = (data) => {
	userModel.create(data);
};
export const getUser = async () => {
	return await userModel.find();
};
