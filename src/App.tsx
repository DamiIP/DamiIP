import React from 'react';
import { Header } from './components/Header';
import { HeroCover } from './components/HeroCover';
import { PainPoints } from './components/PainPoints';
import { QuoteSection } from './components/QuoteSection';
import { StorySection } from './components/StorySection';
import { MethodSection } from './components/MethodSection';
import { WhySection } from './components/WhySection';
import { GiftSection } from './components/GiftSection';
import { PreviewSection } from './components/PreviewSection';
import { FitSection } from './components/FitSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { StickyBar } from './components/StickyBar';
import { MusicPlayer } from './components/MusicPlayer';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroCover />
        <PainPoints />
        <QuoteSection />
        <StorySection />
        <MethodSection />
        <WhySection />
        <GiftSection />
        <PreviewSection />
        <FitSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyBar />
      <MusicPlayer />
    </>
  );
};

export default App;
