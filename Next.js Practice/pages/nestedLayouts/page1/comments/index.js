import React, { useEffect, useState } from "react";
import { Page1Layout } from "../index";
import { NestedLayout } from "./../../index";
function index({ state }) {
	const [data, setData] = useState(state);
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(e);
		const formData = new FormData(e.currentTarget);
		console.log(formData);
		const obj = {};
		for (let [key, value] of formData) {
			obj[key] = value;
		}
		obj.bsdsaas = "asdas";
		let response = await fetch("http://localhost:3000/api/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(obj),
		});
		console.log("yo ", response);
		let res = await fetch("http://localhost:3000/api/posts");
		let data2 = await res.json();
		console.log(data2);
		const data = await response.json();
		setData(data2);
	};

	return (
		<Page1Layout>
			<form onSubmit={handleSubmit}>
				<input name="type" placeholder="type" />
				<input name="value" placeholder="type" />
				<button>Button</button>
			</form>
			<div>{JSON.stringify(data)}</div>
		</Page1Layout>
	);
}
index.layout = NestedLayout;

export default index;

export async function getServerSideProps(context) {
	console.log("yo ");
	const response = await fetch("http://localhost:3000/api/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name: "Yo" }),
	});
	// console.log("yo ", response);
	const data = await response.json();
	const { params, req, res, query } = context;
	res.setHeader("Set-Cookie", ["accestoken=1000", "refreshtoken=5000"]);
	return {
		props: {
			state: data,
		},
	};
}
