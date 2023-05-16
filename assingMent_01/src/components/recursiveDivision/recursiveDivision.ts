import style from "../layout/Layout.module.scss";

// export const recursiveDivision = (state: any, grid: any) => {
// 	const { start, end, data } = state;
// 	let horizontal = data[0].length;
// 	let vertical = data.length;
// 	randomGrid(horizontal, vertical, data, start, end);
// };
// const getRange = (number: any) => {
// 	const array = [];
// 	for (let i = 0; i < number; i++) {
// 		array.push(i);
// 	}
// 	return array;
// };

// const randomGrid = (
// 	horizontal: any,
// 	vertical: any,
// 	grid: any,
// 	start: any,
// 	end: any
// ) => {
// 	const hrNumbers: number[] = getRange(horizontal);
// 	const vrNumbers = getRange(vertical);
// 	console.log(hrNumbers);
// 	hrNumbers.forEach((data: any) => {
// 		console.log(`${grid[vertical - 1][data]}`);
// 		const box: any = document.getElementById(`${grid[vertical - 1][data]}`);

// 		box.classList.add(style.obstacle);
// 	});
// };

let walls: any;
export function recursiveDivisionMaze(grid: any) {
	console.log("run");
	let vertical = range(grid[0].length);
	let horizontal = range(grid.length);
	walls = [];
	const startRow = +vertical[0];
	const startCol = +vertical.length - 1;
	const endRow = +horizontal[0];
	const endCol = +horizontal.length - 1;
	getRecursiveWalls(
		vertical,
		horizontal,
		grid,
		{ row: startRow, col: startCol },
		{ row: endRow, col: endCol }
	);
	console.log(walls);
	return walls;
}

function range(len: any) {
	let result = [];
	for (let i = 0; i < len; i++) {
		result.push(i);
	}
	return result;
}

//dir === 0 => Horizontal
//dir === 1 => Vertical

function getRecursiveWalls(
	vertical: any,
	horizontal: any,
	grid: any,
	startNode: any,
	finishNode: any
) {
	console.log("run");
	if (vertical.length < 2 || horizontal.length < 2) {
		return;
	}
	let dir;
	let num;
	if (vertical.length > horizontal.length) {
		dir = 0;
		num = generateOddRandomNumber(vertical);
	}
	if (vertical.length <= horizontal.length) {
		dir = 1;
		num = generateOddRandomNumber(horizontal);
	}

	if (dir === 0) {
		addWall(dir, num, vertical, horizontal, startNode, finishNode);
		getRecursiveWalls(
			vertical.slice(0, vertical.indexOf(num)),
			horizontal,
			grid,
			startNode,
			finishNode
		);
		getRecursiveWalls(
			vertical.slice(vertical.indexOf(num) + 1),
			horizontal,
			grid,
			startNode,
			finishNode
		);
	} else {
		addWall(dir, num, vertical, horizontal, startNode, finishNode);
		getRecursiveWalls(
			vertical,
			horizontal.slice(0, horizontal.indexOf(num)),
			grid,
			startNode,
			finishNode
		);
		getRecursiveWalls(
			vertical,
			horizontal.slice(horizontal.indexOf(num) + 1),
			grid,
			startNode,
			finishNode
		);
	}
}

function generateOddRandomNumber(array: any) {
	let max = array.length - 1;
	let randomNum =
		Math.floor(Math.random() * (max / 2)) +
		Math.floor(Math.random() * (max / 2));
	if (randomNum % 2 === 0) {
		if (randomNum === max) {
			randomNum -= 1;
		} else {
			randomNum += 1;
		}
	}
	return array[randomNum];
}

//dir === 0 => Horizontal
//dir === 1 => Vertical

function addWall(
	dir: any,
	num: any,
	vertical: any,
	horizontal: any,
	startNode: any,
	finishNode: any
) {
	let isStartFinish = false;
	let tempWalls = [];
	if (dir === 0) {
		if (horizontal.length === 2) return;
		for (let temp of horizontal) {
			if (
				(temp === startNode.row && num === startNode.col) ||
				(temp === finishNode.row && num === finishNode.col)
			) {
				isStartFinish = true;
				continue;
			}
			tempWalls.push([temp, num]);
		}
	} else {
		if (vertical.length === 2) return;
		for (let temp of vertical) {
			if (
				(num === startNode.row && temp === startNode.col) ||
				(num === finishNode.row && temp === finishNode.col)
			) {
				isStartFinish = true;
				continue;
			}
			tempWalls.push([num, temp]);
		}
	}
	if (!isStartFinish) {
		tempWalls.splice(generateRandomNumber(tempWalls.length), 1);
	}
	for (let wall of tempWalls) {
		walls.push(wall.join("-"));
	}
}

function generateRandomNumber(max: any) {
	let randomNum =
		Math.floor(Math.random() * (max / 2)) +
		Math.floor(Math.random() * (max / 2));
	if (randomNum % 2 !== 0) {
		if (randomNum === max) {
			randomNum -= 1;
		} else {
			randomNum += 1;
		}
	}
	return randomNum;
}
