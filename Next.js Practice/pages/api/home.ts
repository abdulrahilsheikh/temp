import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

function home(req, res: NextApiResponse) {
	const obj = { name: "Abc", value: "cookie" };
	// res.setHeader(
	// 	"Set-Cookie",
	// 	cookie.serialize("token", "abcd", {
	// 		httpOnly: true,
	// 		maxAge: 60 * 60,
	// 		sameSite: "strict",
	// 		path: "/",
	// 	})
	// );
	// res.status(200).json({ message: "Success!" });
	res.end();
}

export default home;
