import React, { Component } from "react";
import { adjMatrix } from "../adjacencyMatrix/adjMatrix";
import Node from "../node/Node";
import { recursiveDivisionMaze } from "../recursiveDivision/recursiveDivision";
import style from "./Layout.module.scss";

let obstacle: Set<string> = new Set();

let offsetTime = 0;
export class Layout extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			data: [[]],
			obstacle: {},
			start: "",
			end: "",
			row: 20,
			column: 50,
			time: 0,
		};
		this.clickHandler = this.clickHandler.bind(this);
	}
	generateGrid = () => {
		const grid = [];
		for (let i = 0; i < this.state.row; i++) {
			const row = [];
			for (let j = 0; j < this.state.column; j++) {
				row.push(i + "-" + j);
			}
			grid.push(row);
		}
		// console.log(grid);
		this.setState({
			...this.state,
			data: grid,
			start: "",
			end: "",
			obstacle: {},
		});
	};

	shortestPath = (graph: any, src: any, dest: any) => {
		let visited = new Set([src]);
		let queue: any = [[src, 0, [src]]];
		let time = 0;
		while (queue.length > 0) {
			let [node, distance, nodeList] = queue.shift();

			if (node == dest) {
				this.setState({ ...this.state, time });
				return [distance, nodeList, time];
			}
			for (let neighbor of graph[node]) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push([
						neighbor,
						distance + 1,
						[...nodeList, neighbor],
					]);
					for (
						let i = 1;
						i <= queue[queue.length - 1][2].length;
						i++
					) {
						time = i * 50;
						this.setVisited(queue[queue.length - 1][2][i - 1], i);
					}
				}
			}
		}
	};

	drawPath = (path: any) => {
		for (let i = 0; i <= path[1].length; i++) {
			let item: any = document.getElementById(path[1][i]);
			if (i == 0) {
				item.classList.add(style.start);
			} else if (i == path[1].length - 1) {
				item.classList.add(style.end);
			} else {
				// let item: any = document.getElementById(path[1][i]);
				// item?.style.setProperty("--data-de", `${path[2] + i * 50}ms`);
				// item?.classList.add(style.path);
			}
		}
		setTimeout(() => {
			for (let i = 0; i <= path[1].length; i++) {
				if (i !== 0 && i !== path[1].length - 1) {
					let item: any = document.getElementById(path[1][i]);
					item?.style.setProperty("--data-de", `${i * 50}ms`);
					console.log(i * 10);

					item?.classList.add(style.path);
				}
			}
		}, this.state.time + path[2] + 50);
	};
	setVisited = (id: any, i: any) => {
		let item = document.getElementById(id);
		item?.style.setProperty("--data-de", `${i * 50}ms`);
		item?.classList.add(style.done);
	};
	runMatrix = () => {
		console.log(this.state.start, this.state.end);
		const graph = adjMatrix(this.state, obstacle);
		console.log(graph);
		const path = this.shortestPath(graph, this.state.start, this.state.end);
		console.log(path);
		this.drawPath(path);
		this.setState({ ...this.state, ran: true });
	};
	resetState = () => {
		// this.generateGrid();
		offsetTime = 0;
		this.setState({
			...this.state,
			data: [[]],
			obstacle: {},
			start: "",
			end: "",
			ran: false,
		});
		obstacle = new Set();
	};
	componentDidMount() {
		this.generateGrid();
	}
	clickHandler(event: any) {
		const id = event.target.id;
		console.log(id);
		if (!this.state.start) {
			this.setState({ ...this.state, start: id });
			event.target?.classList.add(style.start);
		} else if (!this.state.end) {
			this.setState({ ...this.state, end: id });
			event.target?.classList.add(style.end);
		} else {
			obstacle.add(id);
			this.setState({ ...this.state, obstacle: obstacle });
			event.target?.classList.add(style.obstacle);
		}
	}
	generateRandomObstacle = () => {
		for (let times = 0; times < 4; times++) {
			let size = Math.ceil(Math.random() * 10);
			size = size > 4 ? size : size * 2;
			for (let i = 0; i < Math.floor(this.state.row / size); i++) {
				for (let j = 0; j < Math.floor(this.state.column / size); j++) {
					const id =
						Math.floor(Math.random() * +this.state.row) +
						"-" +
						Math.floor(Math.random() * +this.state.column);
					obstacle.add(id);
					document.getElementById(id)?.classList.add(style.obstacle);
				}
			}
		}
		this.setState({ ...this.state, obstacle: obstacle });
	};
	componentDidUpdate(prevProps: any, prevState: any) {
		if (
			prevState.ran != this.state.ran ||
			prevState.row != this.state.row ||
			prevState.column != this.state.column
		) {
			this.generateGrid();
		}
	}
	setObstacle = (obstacle: any) => {
		obstacle.forEach((data: any, index: number) => {
			document.getElementById(data)?.classList.add(style.obstacle);
		});
	};
	render() {
		return (
			<div className={style.container}>
				{this.state.ran ? (
					<button onClick={this.resetState}>Reset</button>
				) : (
					<>
						<button onClick={this.runMatrix}>Run</button>
						<button onClick={this.generateRandomObstacle}>
							Random
						</button>
					</>
				)}
				<div>
					<input
						type="number"
						min="10"
						placeholder="Row"
						value={this.state.row}
						onChange={(e) => {
							this.setState({
								...this.state,
								row: e.target.value,
							});
						}}
					/>
					<input
						type="number"
						min="10"
						placeholder="Column"
						value={this.state.column}
						onChange={(e) => {
							this.setState({
								...this.state,
								column: e.target.value,
							});
						}}
					/>
					<button
						onClick={() => {
							const obs = recursiveDivisionMaze(this.state.data);
							obstacle = new Set(obs);
							this.setObstacle(obs);
							this.setState({ ...this.state, obstacle: obs });
						}}>
						Recursive Maze
					</button>
				</div>
				<div className={style.grid}>
					{this.state.data.map((data: any) => (
						<div className={style.row}>
							{data.map((node: any) => (
								<Node clickable={this.clickHandler} id={node} />
							))}
						</div>
					))}
				</div>
			</div>
		);
	}
}
