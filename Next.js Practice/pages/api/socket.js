import { Server } from "socket.io";

export default function SocketHandler(req, res) {
	if (res.socket.server.io) {
		console.log("Yo bro");
	} else {
		const io = new Server(res.socket.server);
		res.socket.server.io = io;
		console.log("server created");
		io.on("connection", (socket) => {
			socket.on("input-change", (msg) => {
				socket.broadcast.emit("update-input", msg);
			});
		});
	}
	res.end();
}
