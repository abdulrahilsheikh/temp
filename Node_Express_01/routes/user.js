// const express = require("express");
import { userModel } from "./user.schema.js";
import { getUser } from "./user.services.js";
import { createUser } from "./user.services.js";
import express, { Router } from "express";
import { v4 } from "uuid";
const router = Router();

let Token = {
	refresh_token: v4(),
	access_token: v4(),
};
// router.get("/", async (req, res, next) => {

const expireToken = () => {
	setTimeout(() => {
		console.log("token expired");
		Token = {
			...Token,
			access_token: "",
		};
	}, 5000);
};
router.post("/login", (req, res, next) => {
	try {
		console.log(req.body);
		if (req.body.username == "Admin" && req.body.password == "1234") {
			Token = {
				refresh_token: v4(),
				access_token: v4(),
			};
			expireToken();
			res.json(Token);
		}
	} catch (error) {
		console.log(error);
		res.status(403).json({ message: "Unauthorized " });
	}
});

router.get("/check", (req, res, next) => {
	try {
		console.log(req.headers.authorization);
		if (req.headers.authorization == Token.access_token) {
			res.status(200).json({ message: "All Ok" });
		} else {
			console.log("not ok");
			res.status(403).json({ message: "Token Expired " });
		}
	} catch (error) {
		console.log("not ok");
		res.status(403).json({ message: "Unauthorized " });
	}
});

router.post("/token", (req, res, next) => {
	try {
		console.log(req.body);
		if (Token.refresh_token == req.body.refresh_token) {
			Token = {
				...Token,
				access_token: v4(),
			};
		}
		expireToken();
		res.status(200).json(Token);
	} catch (error) {
		res.status(403).json({ message: "Unauthorized " });
	}
});
export default router;
