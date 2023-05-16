import { useArrows } from "@/hooks/useArrows";
import { useTerminalLoader } from "@/hooks/useTerminalLoader";
import { useTime } from "@/hooks/useTime";
import React, { useRef, useState } from "react";
import { Info } from "../Info/Info";
import styles from "./TerminalInfo.module.scss";

const data: any = {
	commands: (
		<div>
			<ul style={{ marginLeft: "1rem" }}>
				<li>Skills</li>
				<li>Commands</li>
				<li>About</li>
			</ul>
		</div>
	),
	contact: (
		<div>
			<i className="fa-solid fa-bolt"></i>contact
		</div>
	),
	about: (
		<div>
			<i className="fa-solid fa-bolt"></i>About
		</div>
	),
	skills: (
		<div>
			<i className="fa-solid fa-bolt"></i>skills
		</div>
	),
	default: (
		<div>
			<p>Please type {`"commands"`} to get list of options.</p>
			<p>Or you can use Up or Down Arrow to move options</p>
		</div>
	),
};

const error = (
	<div className={styles.error}>
		<p>Syntax Error</p>
		<p>Sorry the command you entered does not exist.</p>
		<p>Please enter a valid command.</p>
		<p>Please type {`"commands"`} to get list of options.</p>
		<p>Or you can use Up or Down Arrow to move options</p>
	</div>
);
export function TerminalInfo({ closeTerminal }: any) {
	const [commads, setCommand] = useState("");
	const [pannels, setPannels] = useState<any>([
		<Info key="" data={data.default} />,
	]);
	const { getIndex } = useArrows(setCommand);
	const ref = useRef<any>();
	const { isLoading, startLoading, loader } = useTerminalLoader(ref);
	const [hideTerminal, setHideTerminal] = useState(false);
	const handleSubmit = (e: any) => {
		e.preventDefault();
		const element = data[commads.toLowerCase()]
			? data[commads.toLowerCase()]
			: error;
		startLoading(() => {
			setPannels([...pannels, <Info key="" data={element} />]);
			document
				.getElementById(commads.toLowerCase())
				?.scrollIntoView({ behavior: "smooth" });
		});
	};

	const unmountTerminalHandler = () => {
		setHideTerminal(true);
		setTimeout(() => {
			closeTerminal();
		}, 450);
	};
	return (
		<div
			className={`${styles.container} ${
				hideTerminal ? styles.fadeOut : " "
			}`}>
			<div className={styles.header}>
				<div onClick={unmountTerminalHandler}>Exit</div>
			</div>
			<div className={styles.terminal}>
				{pannels}
				{isLoading && <Info data={loader} />}
			</div>
			<div className={styles.inputSectionContainer}>
				<form onSubmit={handleSubmit} className={styles.inputSection}>
					<i className="fa-solid fa-chevron-right"></i>
					<input
						value={commads}
						placeholder={'Type "commands" For Option list'}
						onChange={(e) => setCommand(e.target.value)}
						onKeyDown={(e) => getIndex(e.code)}
					/>
				</form>
			</div>
		</div>
	);
}
