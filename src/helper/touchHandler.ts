export const getGestureType = (touchStartY?: number, touchEndY?: number) => {
	if (touchStartY && touchEndY) {
		const touchDistance = touchStartY - touchEndY;
		const touchFilter = 50;

		if (touchEndY < touchStartY && Math.abs(touchDistance) > touchFilter) return 'swipeUp';
		else if (touchEndY > touchStartY && Math.abs(touchDistance) > touchFilter) return 'swipeDown';
		else return '';
	} else return '';
};
