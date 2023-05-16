// import axios from "axios";

const server = async (url) => {
	console.log(url);
	url = `https://jsonplaceholder.typicode.com/comments?postId=${url}`;
	console.log(url);
	const res = await fetch(url);
	return res;
};

export const getData = async (id) => {
	const res = await server(id | "");
	const data = await res.json();
	return data;
};
export const getAllData = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/comments");
	const data = await res.json();
	return data.slice(0, 3);
};
