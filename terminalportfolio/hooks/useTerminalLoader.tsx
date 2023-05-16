import { useEffect, useRef, useState } from "react";
const spinner = ["-", "\\", "|", "/"];
let spinnerIdx = -1;
const getSpinner = () => {
	spinnerIdx++;
	if (spinnerIdx >= spinner.length) {
		spinnerIdx = 0;
	}
	return spinner[spinnerIdx];
};
export const useTerminalLoader = (ref: any) => {
	const [isLoading, setIsloading] = useState(false);
	const callBack = useRef<any>();
	const array = "_".repeat(15).split("");
	let idx = 0;
	const terminalLoader = () => {
		if (idx < array.length) {
			setTimeout(() => {
				window.requestAnimationFrame(terminalLoader);
			}, 200);
			array[idx] = "|";
			ref.current.innerHTML = `[${array.join("")}] ${getSpinner()}`;
			idx++;
		} else {
			callBack.current();
			setIsloading(false);
		}
	};
	useEffect(() => {
		if (isLoading) {
			terminalLoader();
		}
	}, [isLoading]);
	const startLoading = (stateSetter: any) => {
		setIsloading(true);
		callBack.current = stateSetter;
	};
	const loader = <div ref={ref}></div>;
	return { startLoading, isLoading, loader };
};
