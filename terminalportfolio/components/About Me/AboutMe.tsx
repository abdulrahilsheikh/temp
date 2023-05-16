import React, { useCallback, useEffect, useMemo, useRef } from "react";
import styles from "./AboutMe.module.scss";

const data = [
	{
		title: "Personal Info",
		details:
			"Myself Rahil Sheikh, I'm  a frontend web developer. Having specialization in React.js and Next.js",
	},

	{
		title: "Education Details",
		details:
			"I have completed my degree from RTMNU University India in the field of Mechanical Engineering",
		end: "01.07.2021",
	},
	{
		title: "How i landed In IT",
		details:
			"It all started with a project in which some programming was involved. So i fell in love with programming. I started learning JAVA and react. When the placement season started, i statrted applying for coding jobs and eventually ended as a Web Developer ",
		start: "01.07.2021",
	},
	{
		title: "Experience",
		details:
			"So im working as a associate software developer in a renound IT company . I've worked on airline ticket booking applications, worked with sockets and graphql. Build a number of projects during my training period. ",
		start: "01.07.2021",
	},
];

function AboutMe() {
	const ref: any = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				console.log(entry);

				if (entry.isIntersecting) {
					//do your actions here
					entry.target.classList.add(styles.isVisible);
					console.log("It works!", entry);
				} else {
					entry.target.classList.remove(styles.isVisible);
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);
		if (ref.current) {
			ref.current.forEach((a: any) => {
				observer.observe(a);
			});
		}
	}, [ref]);
	return (
		<div className={styles.aboutMeContainer} id="about">
			<div className={styles.aboutMe}>About Me</div>
			{data.map((a, idx) => (
				<div
					key={idx}
					ref={(e) => {
						ref.current[idx] = e;
					}}
					className={`${styles["ag-courses_item"]} `}>
					<a href="#" className={styles["ag-courses-item_link"]}>
						<div className={styles["ag-courses-item_bg"]}></div>
						<div className={styles["ag-courses-item_title"]}>
							{a.title}
						</div>
						{a.start && (
							<div className={styles["ag-courses-item_date-box"]}>
								Start:
								<span
									className={styles["ag-courses-item_date"]}>
									{a.title}
								</span>
							</div>
						)}
						{a.end && (
							<div className={styles["ag-courses-item_date-box"]}>
								End:
								<span
									className={styles["ag-courses-item_date"]}>
									{a.end}
								</span>
							</div>
						)}
						<p className={styles["ag-courses-item_date-box"]}>
							{a.details}
						</p>
					</a>
				</div>
			))}
		</div>
	);
}

export default AboutMe;
