import React from "react";
import { useRouter } from "next/router";

const Comment = () => {
	const router = useRouter();
	const { id, commentid } = router.query;
	return (
		<div>
			{id} {commentid}
		</div>
	);
};

export default Comment;
