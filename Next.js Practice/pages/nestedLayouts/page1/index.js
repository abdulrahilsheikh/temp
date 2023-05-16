import React from "react";
import { NestedLayout } from "../index";
import style from "./Page1.module.scss";
import Link from "next/link";

export function Page1Layout({ children }) {
	return (
		<div className={style.page}>
			<div className={style.sidebar}>
				<Link href="/nestedLayouts/page1/posts">Posts</Link>
				<Link href="/nestedLayouts/page1/comments">Comment</Link>
				<Link href="/nestedLayouts/page1/todos">Todo</Link>
			</div>
			<div>{children}</div>
		</div>
	);
}

function Index() {
	return <Page1Layout>{<div>Select a page</div>}</Page1Layout>;
}
Index.layout = NestedLayout;

export default Index;
