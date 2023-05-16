import { useEffect } from "react";

export const useTime = (ref: any) => {
	const time = () => {
		ref.current.innerHTML = new Date().toLocaleTimeString();
		window.requestAnimationFrame(time);
	};
	useEffect(() => {
		time();
	}, []);
};
