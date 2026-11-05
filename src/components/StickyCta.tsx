import React from 'react';

interface StickyCtaProps {
  show: boolean;
}

export const StickyCta: React.FC<StickyCtaProps> = ({ show }) => {
  return (
    <a
      id="sticky"
      className={`sticky ${show ? 'show' : ''}`}
      href="#preview"
      aria-label="免费参加 Preview Class"
    >
      免费参加 Preview Class
    </a>
  );
};
