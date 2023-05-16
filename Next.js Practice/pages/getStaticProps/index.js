function SSG() {
	const func = async () => {
		const res = await fetch("");
		const data = await res.json();
		console.log(data);
	};
	func();
	return <div>SSG</div>;
}

export default SSG;
