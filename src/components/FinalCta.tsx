import React from 'react';

export const FinalCta: React.FC = () => {
  return (
    <section className="section final">
      <div className="wrap narrow center">
        <img
          className="avatar"
          src="/assets/warmth.jpeg"
          alt="大米老师"
          loading="lazy"
        />
        <h2>你的经验，值得被看见。</h2>
        <a
          className="btn"
          href="https://wa.me/60102131439?text=%E4%BD%A0%E5%A5%BD%E9%98%BF%E7%8F%8D%EF%BC%8C%E6%88%91%E6%83%B3%E5%8F%82%E5%8A%A0%E4%B8%8B%E4%B8%80%E5%9C%BA%20Preview%20Class"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp 报名 Preview Class
        </a>
        <p className="small">
          想了解 <b>30 天老板 IP 执行系统</b>？价格与报名请联系{' '}
          <a
            href="https://wa.me/60143174319?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%2030%20%E5%A4%A9%E8%80%81%E6%9D%BFIP%E6%89%A7%E8%A1%8C%E7%B3%BB%E7%BB%9F"
            target="_blank"
            rel="noopener noreferrer"
          >
            大米助理
          </a>
          。
        </p>
      </div>
    </section>
  );
};
