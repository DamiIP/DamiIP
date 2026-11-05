// ==========================================================================
// Dami IP Landing Page - Vanilla JS Controller
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ------------------------------------------------------------------------
  // 1. Stat Strip Number Count-Up Animation (1.5s ease-out)
  // ------------------------------------------------------------------------
  const statCounters = document.querySelectorAll('.counter[data-target]');
  const statSection = document.getElementById('stats');

  if (statSection && statCounters.length > 0) {
    if (isReducedMotion) {
      statCounters.forEach((counter) => {
        counter.textContent = counter.getAttribute('data-target') || counter.textContent;
      });
    } else {
      // Initialize with 0
      statCounters.forEach((counter) => {
        counter.textContent = '0';
      });

      const animateCounters = () => {
        const duration = 1500; // 1.5s
        const startTime = performance.now();

        const updateNumbers = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic curve
          const easeOut = 1 - Math.pow(1 - progress, 3);

          statCounters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target') || '0', 10);
            const current = Math.floor(easeOut * target);
            counter.textContent = current.toLocaleString();
          });

          if (progress < 1) {
            requestAnimationFrame(updateNumbers);
          } else {
            statCounters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-target') || '0', 10);
              counter.textContent = target.toLocaleString();
            });
          }
        };

        requestAnimationFrame(updateNumbers);
      };

      if ('IntersectionObserver' in window) {
        const statObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.25 }
        );
        statObserver.observe(statSection);
      } else {
        animateCounters();
      }
    }
  }

  // ------------------------------------------------------------------------
  // 2. Subtle Scroll-Reveal Effect for Sections & Cards
  // ------------------------------------------------------------------------
  const revealItems = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window && !isReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    // Reveal all immediately if no IntersectionObserver or reduced motion
    revealItems.forEach((item) => item.classList.add('is-revealed'));
  }

  // ------------------------------------------------------------------------
  // 3. Mobile Bottom Sticky Bar
  // Hide while #hero is visible; slide up after hero; hide when #preview visible
  // ------------------------------------------------------------------------
  const stickyBar = document.getElementById('sticky-bar');
  const heroSection = document.getElementById('hero');
  const previewSection = document.getElementById('preview');

  if (stickyBar && heroSection) {
    let isHeroVisible = true;
    let isPreviewVisible = false;

    const updateStickyState = () => {
      if (!isHeroVisible && !isPreviewVisible) {
        stickyBar.classList.add('is-visible');
      } else {
        stickyBar.classList.remove('is-visible');
      }
    };

    if ('IntersectionObserver' in window) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isHeroVisible = entry.isIntersecting;
            updateStickyState();
          });
        },
        { threshold: 0.05 }
      );
      heroObserver.observe(heroSection);

      if (previewSection) {
        const previewObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              isPreviewVisible = entry.isIntersecting;
              updateStickyState();
            });
          },
          { threshold: 0.1 }
        );
        previewObserver.observe(previewSection);
      }
    } else {
      // Scroll fallback
      const handleScroll = () => {
        const heroRect = heroSection.getBoundingClientRect();
        const previewRect = previewSection ? previewSection.getBoundingClientRect() : null;
        const pastHero = heroRect.bottom < 100;
        const inPreview = previewRect
          ? previewRect.top < window.innerHeight && previewRect.bottom > 0
          : false;

        isHeroVisible = !pastHero;
        isPreviewVisible = inPreview;
        updateStickyState();
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
  }

  // ------------------------------------------------------------------------
  // 3.5. Header Scroll State (Thin bottom border appears only after scrolling)
  // ------------------------------------------------------------------------
  const header = document.querySelector('header');
  if (header) {
    const handleHeaderScroll = () => {
      header.classList.toggle('has-scrolled', window.scrollY > 15);
    };
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();
  }

  // ------------------------------------------------------------------------
  // 4. Background Music Controller (Preserved)
  // ------------------------------------------------------------------------
  const backgroundMusicSource = '';
  const audio = document.getElementById('backgroundmusic');
  const toggle = document.getElementById('musictoggle');

  if (backgroundMusicSource && audio && toggle) {
    audio.src = backgroundMusicSource;
    audio.volume = 0.15;
    toggle.hidden = false;

    const showPaused = () => {
      toggle.textContent = '开启音乐';
      toggle.setAttribute('aria-pressed', 'false');
    };

    audio.addEventListener('pause', showPaused);
    audio.addEventListener('error', () => {
      audio.pause();
      toggle.textContent = '音乐暂时无法播放';
    });

    toggle.addEventListener('click', async () => {
      if (!audio.paused) {
        audio.pause();
        return;
      }
      try {
        await audio.play();
        toggle.textContent = '暂停音乐';
        toggle.setAttribute('aria-pressed', 'true');
      } catch {
        toggle.textContent = '点击重试音乐';
      }
    });

    document.addEventListener(
      'play',
      (event) => {
        if (event.target && event.target.tagName === 'VIDEO') {
          audio.pause();
        }
      },
      true
    );
  }
});
