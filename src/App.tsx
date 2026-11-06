import React, { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { About } from './components/About';
import { Method } from './components/Method';
import { PreviewClass } from './components/PreviewClass';
import { FitCheck } from './components/FitCheck';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyCta } from './components/StickyCta';
import { WorkspaceBand } from './components/WorkspaceBand';
import { Quiz } from './components/Quiz';
import { initAnimations } from './animation';

export const App: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const previewRef = useRef<HTMLElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    initAnimations();

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    let heroVisible = true;
    let previewVisible = false;

    const updateStickyState = () => {
      setShowSticky(!heroVisible && !previewVisible);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        updateStickyState();
      },
      { threshold: 0.1 }
    );

    const previewObserver = new IntersectionObserver(
      ([entry]) => {
        previewVisible = entry.isIntersecting;
        updateStickyState();
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }
    if (previewRef.current) {
      previewObserver.observe(previewRef.current);
    }

    return () => {
      heroObserver.disconnect();
      previewObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />
      <Header />
      <main id="top">
        <Hero heroRef={heroRef} />
        <PainPoints />
        <WorkspaceBand />
        <About />
        <Method />
        <Quiz />
        <PreviewClass previewRef={previewRef} />
        <FitCheck />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta show={showSticky} />
    </>
  );
};

export default App;
