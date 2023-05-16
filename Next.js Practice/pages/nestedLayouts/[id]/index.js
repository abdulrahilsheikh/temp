import React from "react";
import { NestedLayout } from "../index";
import { useRouter } from "next/router";

function index() {
	const router = useRouter();
	const { id } = router.query;
	return <div>Page {id}</div>;
}
index.layout = NestedLayout;

export default index;
