/**
 * 大米老师｜敢敢做IP — Smooth, Premium Animations & Interactions
 * Elegant, luxury beauty brand feel.
 * Pure Vanilla JS, zero external libraries.
 */

export function initApp() {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasIntersectionObserver = 'IntersectionObserver' in window;

  // 1. Thin gold scroll-progress bar at the very top of the page
  const progressBar = document.getElementById('scroll-progress');
  const updateProgress = () => {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // 2. Gentle Parallax on hero glow and #story photo (desktop only, disabled for reduced motion)
  if (!prefersReducedMotion) {
    let ticking = false;
    const updateParallax = () => {
      ticking = false;
      if (window.innerWidth < 900) return;

      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Hero glow parallax (moves at 0.9x scroll speed -> +0.1 scroll offset)
      const heroPhoto = document.querySelector('.hero-photo');
      if (heroPhoto) {
        const glowOffset = Math.round(scrollY * 0.1);
        heroPhoto.style.setProperty('--hero-glow-y', `${glowOffset}px`);
      }

      // #story photo parallax
      const storySection = document.getElementById('story');
      const storyPhoto = document.querySelector('#story .split-photo');
      if (storySection && storyPhoto) {
        const rect = storySection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const relativeScroll = (window.innerHeight - rect.top) * 0.1;
          storyPhoto.style.setProperty('--story-photo-y', `${Math.round(relativeScroll)}px`);
        }
      }
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  // STRICT SAFETY RULE:
  // If reduced motion is requested or IntersectionObserver is missing, do not animate scroll reveals.
  if (prefersReducedMotion || !hasIntersectionObserver) {
    return;
  }

  // Mark HTML with js-anim class now that JS is confirmed running & supported
  document.documentElement.classList.add('js-anim');

  // 3. Header shadow on scroll
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 4. Stats count-up (10年+, 2000万+, 200+)
  const statsContainer = document.querySelector('.stats');
  const statElements = document.querySelectorAll('.stat-count');
  if (statsContainer && statElements.length > 0) {
    const statsObserver = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          obs.unobserve(statsContainer);
          statElements.forEach((el) => {
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            const suffix = el.getAttribute('data-suffix') || '';
            const duration = 1400; // ms
            const startTime = performance.now();

            const animateCount = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // cubic-bezier(.22, 1, .36, 1) approx easing
              const ease = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(target * ease);
              el.textContent = `${current}${suffix}`;

              if (progress < 1) {
                requestAnimationFrame(animateCount);
              } else {
                el.textContent = `${target}${suffix}`;
              }
            };
            requestAnimationFrame(animateCount);
          });
        }
      },
      { threshold: 0.3 }
    );
    statsObserver.observe(statsContainer);
  }

  // 5. Scroll reveals for headings & card groups
  const containers = document.querySelectorAll('.cards, .steps, .faq');
  containers.forEach((container) => {
    const children = container.querySelectorAll('.card, li, details');
    children.forEach((child, idx) => {
      child.style.setProperty('--stagger-i', String(idx));
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12,
    }
  );

  // Headings in sections after hero
  const headings = document.querySelectorAll('.section:not(.hero) h2, main > section:not(.hero) h2');
  headings.forEach((h) => {
    h.classList.add('reveal-heading');
    revealObserver.observe(h);
  });

  // Cards, step items, gift box, faq items
  const items = document.querySelectorAll('.card, .steps li, .gift, .faq details');
  items.forEach((item) => {
    item.classList.add('reveal-item');
    revealObserver.observe(item);
  });

  // 6. FAQ smooth height open/close animation
  const faqDetailsList = document.querySelectorAll('.faq details');
  faqDetailsList.forEach((details) => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('p');
    if (!summary || !content) return;

    let animation = null;
    let isClosing = false;
    let isExpanding = false;

    summary.addEventListener('click', (e) => {
      e.preventDefault();
      details.style.overflow = 'hidden';

      if (isClosing || !details.open) {
        // Open
        details.style.height = `${details.offsetHeight}px`;
        details.open = true;
        window.requestAnimationFrame(() => {
          isExpanding = true;
          const startHeight = `${details.offsetHeight}px`;
          const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;

          if (animation) animation.cancel();
          animation = details.animate(
            { height: [startHeight, endHeight] },
            { duration: 380, easing: 'cubic-bezier(.22, 1, .36, 1)' }
          );
          animation.onfinish = () => {
            details.open = true;
            animation = null;
            isExpanding = false;
            details.style.height = '';
            details.style.overflow = '';
          };
          animation.oncancel = () => {
            isExpanding = false;
          };
        });
      } else if (isExpanding || details.open) {
        // Close
        isClosing = true;
        const startHeight = `${details.offsetHeight}px`;
        const endHeight = `${summary.offsetHeight}px`;

        if (animation) animation.cancel();
        animation = details.animate(
          { height: [startHeight, endHeight] },
          { duration: 340, easing: 'cubic-bezier(.22, 1, .36, 1)' }
        );
        animation.onfinish = () => {
          details.open = false;
          animation = null;
          isClosing = false;
          details.style.height = '';
          details.style.overflow = '';
        };
        animation.oncancel = () => {
          isClosing = false;
        };
      }
    });
  });

  // 7. Smooth in-page anchor scrolling with fixed header offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 72;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // 8. Mobile bottom sticky button scroll watcher
  const sticky = document.getElementById('sticky');
  const hero = document.querySelector('.hero');
  const preview = document.getElementById('preview');
  if (sticky && hero) {
    let heroVisible = true;
    let previewVisible = false;
    const updateSticky = () => {
      sticky.classList.toggle('show', !heroVisible && !previewVisible);
    };

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        updateSticky();
      },
      { threshold: 0.1 }
    );
    heroObs.observe(hero);

    if (preview) {
      const previewObs = new IntersectionObserver(
        ([entry]) => {
          previewVisible = entry.isIntersecting;
          updateSticky();
        },
        { threshold: 0.1 }
      );
      previewObs.observe(preview);
    }
  }
}

// Auto-run when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}
