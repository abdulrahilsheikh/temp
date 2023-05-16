import React from "react";

function List({ list }) {
	return <div>{list.length && list.map((data) => <div>{data.id}</div>)}</div>;
}

export default List;
