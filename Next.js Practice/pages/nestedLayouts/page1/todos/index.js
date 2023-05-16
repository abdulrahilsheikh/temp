import React, { useEffect, useState } from "react";
import { Page1Layout } from "../index";
import { NestedLayout } from "./../../index";
import List from "./../../../../components/List";
import { use } from "../../../../utils/use";

function index() {
	// const [state, setState] = useState("");
	// const fetchData = async () => {
	// 	const res = await fetch("https://jsonplaceholder.typicode.com/todos");
	// 	const data = await res.json();
	// 	setState(data.slice(0, 3));
	// };
	// useEffect(() => {
	// 	fetchData();
	// }, []);

	const data = use(() =>
		fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
			res.json()
		)
	);

	return (
		<Page1Layout>
			<div>{data ? <List list={data} /> : <div>loading</div>}</div>
		</Page1Layout>
	);
}
index.layout = NestedLayout;
export default index;
