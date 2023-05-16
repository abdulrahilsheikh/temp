import React, { useEffect, useState } from "react";

function crudTest(): JSX.Element {
	const [name, setName] = useState("");
	const [data, setData] = useState([]);
	const getData = async () => {
		const res = await fetch("/api/users/getUser");
		const data = await res.json();
		console.log(data);
		setData(data.data);
	};
	const postData = async () => {
		const res = await fetch("/api/users/addUser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name }),
		});
		const data = await res.json();
		console.log(data);
		setData(data.data);
	};
	const editData = async (id: any) => {
		const res = await fetch("/api/users/updateName", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...data[id], name }),
		});
		const db = await res.json();
		console.log(db);
		setData(db.data);
	};
	const deleteData = async (id: any) => {
		const res = await fetch("/api/users/deleteUser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...data[id], name }),
		});
		const db = await res.json();
		console.log(db);
		setData(db.data);
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			<div>
				<input
					name="name"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={postData}>Post</button>
			</div>
			<div>
				{data.map((d, idx) => (
					<div>
						{d.name}
						<button onClick={() => editData(idx)}>Edit</button>
						<button onClick={() => deleteData(idx)}>delete</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default crudTest;
