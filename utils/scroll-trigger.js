export const fadeOnScrollTrigger = (trigger, end = 'bottom 80%', start = null, scrub = 1) => ({
	opacity: 0,
	scrollTrigger: {
		trigger: trigger,
		scrub,
		end: end || 'bottom 80%',
		start
	}
});
