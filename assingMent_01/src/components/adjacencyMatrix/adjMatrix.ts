export const adjMatrix = (list: any, obstacleSet: Set<string>) => {
	const row = list.row;
	const column = list.column;
	console.log(list, row, column);
	let adj: any = {};

	for (let rowIndex = 0; rowIndex < row; rowIndex++) {
		for (let colIndex = 0; colIndex < column; colIndex++) {
			// corner cases
			let id = `${rowIndex}-${colIndex}`;
			// check if its obstackle or not
			if (!obstacleSet.has(id)) {
				if (!(id in adj)) adj[id] = [];
				// top
				if (!(rowIndex - 1 < 0)) {
					let newId = `${rowIndex - 1}-${colIndex}`;

					if (!obstacleSet.has(newId)) adj[id].push(newId);
				}
				// rigtht
				if (!(colIndex + 1 >= column)) {
					let newId = `${rowIndex}-${colIndex + 1}`;
					if (!obstacleSet.has(newId)) adj[id].push(newId);
				}
				//bottom
				if (!(rowIndex + 1 >= row)) {
					let newId = `${rowIndex + 1}-${colIndex}`;
					if (!obstacleSet.has(newId)) adj[id].push(newId);
				}
				// left
				if (!(colIndex - 1 < 0)) {
					let newId = `${rowIndex}-${colIndex - 1}`;
					if (!obstacleSet.has(newId)) adj[id].push(newId);
				}
			}
		}
	}
	// console.log(adj);
	return adj;
};
