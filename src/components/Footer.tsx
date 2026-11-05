import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <a className="brand" href="#top">
            大米老师 <i>Dami</i>
          </a>
          <p>把经验变成内容，把内容变成信任。</p>
        </div>
        <div className="footer-contact">
          <a
            href="https://wa.me/60102131439"
            target="_blank"
            rel="noopener noreferrer"
          >
            阿珍 · +60 10 213 1439
          </a>
          <a
            href="https://wa.me/60143174319"
            target="_blank"
            rel="noopener noreferrer"
          >
            大米助理 · +60 14 317 4319
          </a>
          <span>Me Beauty &amp; Health Sdn Bhd</span>
        </div>
      </div>
      <p className="wrap copyright">© 2026 大米老师 · 所有内容仅供学习参考</p>
    </footer>
  );
};
