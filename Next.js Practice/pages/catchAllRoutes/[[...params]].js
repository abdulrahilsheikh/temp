import React from "react";
import { useRouter } from "next/router";

function CatchAll() {
	const router = useRouter();
	const { params } = router.query;
	console.log(params);
	return (
		<div>{params && params.map((url) => <div>Viewing for {url}</div>)}</div>
	);
}

export default CatchAll;
