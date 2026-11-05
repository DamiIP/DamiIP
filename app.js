// Show the bottom "免费参加" button on phones once the hero has scrolled away,
// and hide it again while the Preview Class section is on screen.
(() => {
  const sticky = document.getElementById('sticky');
  const hero = document.querySelector('.hero');
  const preview = document.getElementById('preview');
  if (!sticky || !hero || !('IntersectionObserver' in window)) return;
  let heroVisible = true;
  let previewVisible = false;
  const update = () => sticky.classList.toggle('show', !heroVisible && !previewVisible);
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; update(); }).observe(hero);
  if (preview) new IntersectionObserver(([e]) => { previewVisible = e.isIntersecting; update(); }).observe(preview);
})();
