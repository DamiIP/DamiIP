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
            href="https://wa.me/60102131439?text=%E4%BD%A0%E5%A5%BD%E9%98%BF%E7%8F%8D%EF%BC%8C%E6%88%91%E6%83%B3%E5%8F%82%E5%8A%A0%E4%B8%8B%E4%B8%80%E5%9C%BA%20Preview%20Class"
            target="_blank"
            rel="noopener noreferrer"
          >
            阿珍 · +60 10 213 1439
          </a>
          <a
            href="https://wa.me/60143174319?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%2030%20%E5%A4%A9%E8%80%81%E6%9D%BFIP%E6%89%A7%E8%A1%8C%E7%B3%BB%E7%BB%9F"
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
