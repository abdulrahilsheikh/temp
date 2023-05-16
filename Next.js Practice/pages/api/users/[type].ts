import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
const updateName = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await clientPromise;
	const db = client.db("Project0").collection("user");

	await db.updateOne(
		{ _id: ObjectId(req.body._id) },
		{ $set: { name: req.body.name } }
	);
	const users = await db.find({}).toArray();
	return users;
};
const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await clientPromise;
	const db = client.db("Project0").collection("user");
	await db.insertOne({ name: req.body.name });
	const users = await db.find({}).toArray();
	return users;
};
const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await clientPromise;
	const db = client.db("Project0").collection("user");
	const f = await db.findOneAndDelete({ _id: ObjectId(req.body._id) });
	console.log(f);
	const users = await db.find({}).toArray();
	return users;
};
const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await clientPromise;
	const db = client.db("Project0").collection("user");
	const users = await db.find({}).toArray();
	return users;
};
const func: any = {
	updateName: updateName,
	addUser: addUser,
	deleteUser: deleteUser,
	getUser: getUser,
};
export default async function users(req: NextApiRequest, res: NextApiResponse) {
	const { type }: any = req.query;
	const data = await func[type](req, res);
	res.json({ data: data });
}
