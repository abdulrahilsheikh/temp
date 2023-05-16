import { arrowCode, optionList } from "@/utils/constants";

const store = { index: 0 };

export const useArrows = (stateSetter: (index: any) => void) => {
	const getIndex = (direction: string) => {
		let temp = 0;
		if (direction == arrowCode.ArrowUp) {
			temp = store.index - 1;
			if (temp < 0) {
				store.index = optionList.length - 1;
			} else {
				store.index = temp;
			}
			stateSetter(optionList[store.index]);
		} else if (direction == arrowCode.ArrowDown) {
			temp = store.index + 1;
			if (temp > optionList.length - 1) {
				store.index = 0;
			} else {
				store.index = temp;
			}
			stateSetter(optionList[store.index]);
		}
	};
	return { getIndex };
};
