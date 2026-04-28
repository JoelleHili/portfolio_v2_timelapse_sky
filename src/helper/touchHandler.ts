interface IGestureTypes {
	start: number,
	end: number
}

export const getVerticalSwipeType = ({start, end}: IGestureTypes) => {
	if (start && end) {
		const touchDistance = start - end;
		const touchFilter = 150;

		if (end < start && Math.abs(touchDistance) > touchFilter) return 'swipeUp';
		else if (end > start && Math.abs(touchDistance) > touchFilter) return 'swipeDown';
		else return '';
	} else return '';
};
