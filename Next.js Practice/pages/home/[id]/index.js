import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getData } from "../../../utils/Http";

const Profile = () => {
	const route = useRouter();
	const { id, bar } = route.query;

	const [satate, setState] = useState([]);
	console.log(id, bar);
	const fetchData = async () => {
		console.log(id);
		const temp = await getData(id);
		console.log(temp, "im id page");
		setState(temp);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return <div>{JSON.stringify(satate)}</div>;
};

export default Profile;
