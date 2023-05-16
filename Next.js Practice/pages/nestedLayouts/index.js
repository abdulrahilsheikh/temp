import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import styles from "./Navigate.module.scss";

export function NestedLayout({ children }) {
	return (
		<>
			<div className={styles.header}>
				<Link href={"/nestedLayouts/page1"}>
					<button>Page 1</button>
				</Link>
				<Link href={"/nestedLayouts/page2"}>
					<button>Page 2</button>
				</Link>
				<Link href={"/nestedLayouts/100"}>
					<button>Page 100</button>
				</Link>
			</div>
			{children}
		</>
	);
}
function Page() {
	return <div>page</div>;
}
Page.layout = NestedLayout;

export default Page;
