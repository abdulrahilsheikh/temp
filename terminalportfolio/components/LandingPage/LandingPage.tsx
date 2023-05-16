import React, { useState } from "react";
import { Laptop } from "../Laptop/Laptop";
import { TerminalInfo } from "../TerminalComponents/TerminalInfo/TerminalInfo";
import styles from "./LandingPage.module.scss";

export const InfoSection = ({ setScreenState }: any) => {
	return (
		<div className={styles.infoSection}>
			<h1>Hi Stranger</h1>
			<div
				role="button"
				className={styles.callToActionBtn}
				onClick={setScreenState}>
				Click To Open Terminal
			</div>
		</div>
	);
};
export function LandingPage() {
	const [screenState, setScreenState] = useState(false);
	return (
		<div className={styles.container}>
			<div className={`${styles.infoSectionContainer} `}>
				<InfoSection setScreenState={() => setScreenState(true)} />
			</div>
			<Laptop
				screenState={screenState}
				changeScreenState={() => setScreenState(false)}
			/>
		</div>
	);
}
