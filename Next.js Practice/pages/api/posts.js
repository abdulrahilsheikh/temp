import clientPromise from "../../lib/mongodb";
export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("Project0");
	console.log(db);
	switch (req.method) {
		case "POST":
			let bodyObject = req.body;
			console.log(bodyObject, "Inside api");
			let myPost = await db.collection("posts").insertOne(bodyObject);
			console.log("[first]");
			res.json(myPost.ops[0]);
			break;
		case "GET":
			const allPosts = await db.collection("posts").find({}).toArray();
			res.json({ status: 200, data: allPosts });
			break;
	}
}
