import { useRouter } from "next/router";
function Nav() {
	const router = useRouter();
	function navigateTO(word) {
		// router.push(router.basePath + word);
		console.log(router.pathname + word);
		router.push(router.pathname + "/" + word);
	}

	return (
		<>
			{`asdfghjkl`.split("").map((word) => (
				<button onClick={() => navigateTO(word)}>{word}</button>
			))}
		</>
	);
}

export default Nav;
