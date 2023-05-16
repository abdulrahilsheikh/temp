import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.scss";
import css from "assets/images/css.png";
import html from "assets/images/html5.png";
import firebase from "assets/images/firebase.png";
import gitlab from "assets/images/gitlab.png";
import javascript from "assets/images/javascript.png";
import mongodb from "assets/images/mongodb.png";
import nextjs from "assets/images/nextjs.png";
import nodeJs from "assets/images/node-js.png";
import react from "assets/images/react.png";
import sass from "assets/images/sass.png";
import typescript from "assets/images/typescript.png";
import Image from "next/image";

const data = [
	{ img: javascript, title: "Javascript", expertise: "9" },
	{ img: typescript, title: "Typescript", expertise: "8" },
	{ img: react, title: "React", expertise: "9" },
	{ img: nextjs, title: "Next.Js", expertise: "9" },
	{ img: css, title: "CSS", expertise: "9" },
	{ img: html, title: "HTML", expertise: "9" },
	{ img: sass, title: "SASS", expertise: "9" },
	{ img: nodeJs, title: "Node JS", expertise: "8" },
	{ img: gitlab, title: "Gitlab", expertise: "8" },
	{ img: firebase, title: "Firebase", expertise: "7" },
	{ img: mongodb, title: "MongoDb", expertise: "5" },
];
function Skills() {
	const ref: any = useRef([]);

	useEffect(() => {
		if (ref.current) {
			const observer = new IntersectionObserver(
				(entry) => {
					console.log(entry);
					entry.forEach((a) => {
						if (a.isIntersecting) {
							a.target.classList.add(styles.isVisible);
						} else {
							a.target.classList.remove(styles.isVisible);
						}
					});
				},
				{
					root: null,
					rootMargin: "0px",
					threshold: 0,
				}
			);

			// data.forEach((a: any, idx) => {
			// const doc = document.getElementById("skill" + 5);
			// observer.observe(doc!);
			// for (let i = 0; i < ref.current.length; i++) {
			// 	observer.observe(ref.current[i]);
			// }
			// console.log(ref.current);
			const doc: any = document.querySelectorAll(".skillItem");
			doc.forEach((element: any) => {
				observer.observe(element);
			});
			// });
		}
	}, [ref]);
	return (
		<div className={styles.skillsConatiner} id={"skills"}>
			<div className={styles.skillsTitle}>My Skills</div>
			<div className={styles.skillSection}>
				{data.map((a, idx) => (
					<div
						key={"skill " + idx}
						ref={(e) => {
							ref.current[idx] = e;
						}}
						id={"skill" + idx}
						className={`${styles["ag-courses_item"]} skillItem `}>
						<a href="#" className={styles["ag-courses-item_link"]}>
							<div className={styles["ag-courses-item_bg"]}></div>
							<div className={styles["ag-courses-item_title"]}>
								{a.title}
							</div>
							<div className={styles.imageContainer}>
								<Image
									className={styles.image}
									src={a.img}
									alt={a.title}
								/>
							</div>
							<p className={styles["ag-courses-item_date-box"]}>
								Rating : {a.expertise} / 10
							</p>
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
