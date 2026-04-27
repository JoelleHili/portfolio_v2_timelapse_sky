export const getGestureType = (touchStartY?: number, touchEndY?: number) => {
	if (touchStartY && touchEndY) {
		if (touchEndY < touchStartY) return 'swipeUp';
		else if (touchEndY > touchStartY) return 'swipeDown';
		else return '';
	} else return '';
};
