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
        <a className="btn" href="#preview">
          免费参加 Preview Class
        </a>
        <p className="small">
          想了解 <b>30 天老板 IP 执行系统</b>？价格与报名请联系{' '}
          <a
            href="https://wa.me/60143174319"
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
