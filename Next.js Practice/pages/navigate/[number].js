import { useRouter } from "next/router";

function Number() {
	const router = useRouter();

	return <div>{router.query.number}</div>;
}

export default Number;
