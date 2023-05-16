import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

export const Layout = ({ Component, children }) =>
	Component.layout ? (
		<Component.layout>{children}</Component.layout>
	) : (
		<>{children}</>
	);

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);
	return (
		<Layout Component={Component}>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
