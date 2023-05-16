import { useEffect, useState } from "react";

export function use(func) {
	const [state, setState] = useState(undefined);
	const fetchData = async () => {
		const data = await func();
		setState(data);
	};
	useEffect(() => {
		setTimeout(() => fetchData(), 1000);
	}, []);
	return state;
}
