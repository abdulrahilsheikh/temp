import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import { getAllData } from "http/Http";
export default function Home() {
	const [satate, setState] = useState({ isLoaded: false, data: [] });

	const fetchData = async () => {
		await fetch("/api/home");
		setState({ isLoaded: false, ...satate });
		const temp = await getAllData();
		console.log(temp);
		setTimeout(() => {
			setState({ isLoaded: true, data: temp });
		}, 2000);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={styles.container}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				style={{ height: 0, width: 0 }}
				width="0"
				height="0">
				<defs>
					<filter id="gooey">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="9"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
							result="goo"
						/>
						<feComposite
							in="SourceGraphic"
							in2="goo"
							operator="atop"
						/>
					</filter>
				</defs>
			</svg>
			<div className={styles.box}>
				<div className={styles.cell}>
					{satate.isLoaded ? (
						<div className={styles.list}>
							{satate.data.map((temp) => {
								console.log(temp.id);
								return <div>{temp.id}</div>;
							})}
						</div>
					) : (
						<div className={styles.cont}>
							<div className={styles.blob}></div>
							<div className={styles.blob}></div>
							<div className={styles.blob}></div>
							<div className={styles.blob}></div>
						</div>
					)}
				</div>
				<div className={styles.boxShadow}></div>
				<div className={styles.boxShadow1}></div>
			</div>
		</div>
	);
}
