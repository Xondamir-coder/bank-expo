export const fadeOnScrollTrigger = (trigger, end = 'bottom 80%', start) => ({
  opacity: 0,
  scrollTrigger: {
    trigger: trigger,
    end: end || 'bottom 80%',
    start
  }
});
