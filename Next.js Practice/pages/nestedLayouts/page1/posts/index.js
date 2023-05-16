import React, { useEffect, useState } from "react";
import { Page1Layout } from "../index";
import { NestedLayout } from "./../../index";

function index() {
	const [state, setState] = useState("");
	const fetchData = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();
		setState(data.slice(0, 3));
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Page1Layout>
			<div>{JSON.stringify(state)}</div>
		</Page1Layout>
	);
}
index.layout = NestedLayout;

export default index;
