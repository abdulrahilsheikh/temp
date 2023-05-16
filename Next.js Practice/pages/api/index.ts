import type { NextApiRequest, NextApiResponse } from "next";
let data = [];
export default function handler(req, res) {
	if (req.method === "POST") {
		console.log(req.body, "yo");
		data.push(req.body);
		res.send(data);
	}

	res.end();
}
