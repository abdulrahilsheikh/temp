import React, { Component } from "react";
import style from "./Node.module.scss";

export default class Node extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		return (
			<div
				data-de="5s"
				className={style.node}
				id={this.props.id}
				onClick={this.props.clickable}
			></div>
		);
	}
}
