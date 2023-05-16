import { useTerminalLoader } from "@/hooks/useTerminalLoader";
import React, { useRef } from "react";
import styles from "./Info.module.scss";

const AboutInfoSection = () => {
	return <div></div>;
};

export const Info = ({ data }: any) => {
	return (
		<div className={styles.infoContainer}>
			<i className="fa-solid fa-bolt"></i>
			<div>\Desktop\Temp\Rahil_Portfolio </div>
			<div>
				<i className="fa-solid fa-chevron-right"></i>
			</div>
			<div>{data}</div>
		</div>
	);
};
