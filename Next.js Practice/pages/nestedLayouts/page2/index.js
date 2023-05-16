import React from "react";
import { NestedLayout } from "../index";
function index() {
	return <div>Page 2</div>;
}

index.layout = NestedLayout;

export default index;
