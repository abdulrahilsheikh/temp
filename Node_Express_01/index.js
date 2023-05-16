// const express = require("express");

import express, { json } from "express";
import cors from "cors";
import userRouter from "./routes/user.js";
import dataRouter from "./routes/Projects.js";
import { connectToMongo } from "./connection/connection.js";

const server = async () => {
	await connectToMongo();
	const app = express();
	app.set("view engine", "ejs");

	app.get("/", (req, res, next) => {
		res.render("index", {
			change: "yo",
		});
	});
	app.get("/page1", (req, res, next) => {
		res.render("view1");
	});

	// const userRouter = require("./routes/user");
	app.use(cors());
	app.use(json());
	app.use("/auth", userRouter);
	app.use("/data", dataRouter);

	app.listen(8080);
	console.log("http://localhost:8080/");
};
server();
