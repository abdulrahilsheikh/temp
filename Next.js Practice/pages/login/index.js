import { useEffect, useState } from "react";
import io from "Socket.IO-client";
let socket;

export default function Socket() {
	const [unique, setunique] = useState("");

	const [input, setInput] = useState("");
	const socketInit = async () => {
		await fetch("/api/socket");
		socket = io();
		socket.on("connect", () => {
			console.log("connected");
		});

		socket.on("update-input", (msg) => {
			setInput(msg);
		});
	};

	const handleInputChange = (e) => {
		setInput(e.target.value);
		socket.emit("input-change", e.target.value);
	};
	useEffect(() => {
		// socketInit();
	}, []);
	return (
		<div>
			<input value={unique} onChange={(e) => setunique(e.target.value)} />
			<button onClick={socketInit}>Join</button>
			<textarea
				style={{
					maxWidth: "99%",
					maxHeight: "99vh",
					minWidth: "99%",
					minHeight: "99vh",
				}}
				value={input}
				placeholder="bol be"
				onChange={handleInputChange}
			/>
		</div>
	);
}
