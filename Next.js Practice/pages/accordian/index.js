import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef } from "react";
import styles from "./Acc.module.scss";

const data =
	"ahdgvahgfvadhfgvdahaahgvadhgfvahdgvahgfvad hfgvdahaahgvadhg  fvahdgvahgfvadhfgvdahaahgvadhgfvahdg vahgfvadhfgvdahaahgvadhgfvah dgvahgfvadhfgvdahaahgvadhgfvahdgvahgfvadhfgvdah-"
		.repeat(4)
		.split("-");

export default function accordian() {
	const click = (id) => {
		const container = document.getElementById(`containers${id}`);

		const height = container.childNodes[0].clientHeight;
		console.log(container.clientHeight);
		console.log(height);
		if (container.clientHeight) {
			container.style.height = 0;
		} else {
			container.style.height = height + "px";
		}
	};

	return (
		<div className={styles.parent}>
			{data.map((d, i) => (
				<>
					<button onClick={() => click(i)}>Expand </button>
					<div id={`containers${i}`} className={styles.height}>
						<div>{d.repeat(i * i + 1)}</div>
					</div>
				</>
			))}
		</div>
	);
}
