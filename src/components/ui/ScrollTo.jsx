const ScrollTo = (targetId) => {
	const target = document.getElementById(targetId);
	if (target) {
		target.scrollIntoView({ behavior: "smooth", block: "start" });

		// Set focus to the target element
		target.focus({ preventScroll: true }); // This prevents the default scroll behavior when focusing
	}
};

export { ScrollTo };
