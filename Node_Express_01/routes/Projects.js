import express, { Router } from "express";
import fs from "fs";
const router = Router();

const data = fs.readFileSync("./readme.md", "utf8");
router.get("/getMd", (req, res) => {
	try {
		console.log(data);
		res.json({ data: data });
	} catch (error) {}
});
export default router;
