import React from "react";
import AboutMe from "../About Me/AboutMe";
import { LandingPage } from "../LandingPage/LandingPage";
import Skills from "../Skills/Skills";

export function Main() {
	return (
		<div>
			<LandingPage />
			<AboutMe />
			<Skills />
			<a
				href="https://codesandbox.io/p/github/abdulrahilsheikh/3d_cards_demo/draft/elastic-danilo?workspace=%257B%2522activeFilepath%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clgkh17ah000e2a6h2vbe871h%2522%253A%257B%2522key%2522%253A%2522clgkh17ah000e2a6h2vbe871h%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clgkh8aun004j2a6hwi9fvcsg%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clgkh1b4g005v2a6hhxwcgb45%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clgkh19fz00282a6ht3w02e13%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clgkh17ah000e2a6h2vbe871h%2522%252C%2522spacesOrder%2522%253A%255B%2522clgkh17ah000e2a6h2vbe871h%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D"
				target="_blank">
				Demo
			</a>
		</div>
	);
}
