/**
 * Animate elements with GSAP either on load (above the fold) or on scroll (below the fold).
 *
 * @param {Object} options - Animation configuration
 * @param {string} options.selector - CSS selector string for elements to animate
 * @param {Object} [options.base={}] - Base GSAP animation properties
 * @param {number} [options.staggerStep=0.1] - Delay step between elements (in seconds)
 * @param {string} [options.scrollStart='top 90%'] - ScrollTrigger start position for below-fold elements
 * @param {string} [options.initialDelay=0] - initial delay
 *
 * @example
 * useAnimation({
 *   selector: '.fade-in',
 *   base: { y: 40, opacity: 0, duration: 0.8 },
 *   staggerStep: 0.2,
 *   scrollStart: 'top 85%',
 * });
 */
export default (options = {}) => {
  const {
    selector,
    base = {},
    staggerStep = 0.1,
    initialDelay = 0,
    scrollStart = '85% bottom'
  } = options;

  let ctx;
  const { $gsap } = useNuxtApp();
  const showPreloader = useState('showPreloader');

  onMounted(() => {
    document.querySelectorAll('[data-animate]').forEach(c => c.removeAttribute('data-animate'));
    ctx = $gsap.context(() => {
      nextTick(() => {
        $gsap.utils.toArray(selector).forEach((el, i) => {
          const isInView = el.getBoundingClientRect().top < window.innerHeight;

          const opts = isInView
            ? { delay: (showPreloader.value ? 3 : 0) + i * staggerStep + initialDelay }
            : { scrollTrigger: { trigger: el, start: scrollStart } };

          const defaults = { opacity: 0, duration: 0.5 };
          $gsap.from(el, {
            ...defaults,
            ...base,
            ...opts
          });
        });
      });
    });
  });
  onBeforeUnmount(() => ctx?.revert());
};
