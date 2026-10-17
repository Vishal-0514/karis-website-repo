// Quiet motion: content below the first screen fades up as it scrolls into
// view, siblings in a grid follow one another, and the top bar gains a soft
// shadow once the page scrolls. Nothing runs when reduced motion is preferred,
// and without JavaScript every element simply shows.
(function () {
  var bar = document.querySelector('.topbar');
  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 8); }
  if (bar) { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); }

  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var selector = [
    '.section-title', '.section-lead', '.statement > *', '.facts > div', '.cream-band', '.principles > div',
    '.product', '.link-card', '.features > div', '.note', '.navy-band', '.details > div', '.hub-group',
    '.contact-info', '.form', '.publisher', '.prose > section', '.toc',
  ].join(',');
  var items = Array.prototype.slice.call(document.querySelectorAll('main ' + selector)).filter(function (el) {
    return !el.closest('.hero');
  });

  // Stagger siblings that sit together, capped so long lists never lag.
  items.forEach(function (el) {
    var group = Array.prototype.filter.call(el.parentNode.children, function (s) { return items.indexOf(s) !== -1; });
    var i = group.indexOf(el);
    if (i > 0) el.style.setProperty('--reveal-delay', Math.min(i, 5) * 70 + 'ms');
    el.classList.add('reveal');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      // Also show anything already scrolled past (a jump to an anchor or the bottom).
      if (!e.isIntersecting && e.boundingClientRect.top > 0) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();
