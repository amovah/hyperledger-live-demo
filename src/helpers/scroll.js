export default (el, amount, duration = 300) => {
  let totalScrolled = 0;
  const step = amount / (duration / 10);
  const inter = setInterval(() => {
    el.scrollBy(step, 0);
    totalScrolled = totalScrolled + step;
    if (totalScrolled >= amount) {
      clearInterval(inter);
    }
  }, duration / 10);
};
