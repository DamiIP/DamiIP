import React from 'react';

interface HeroProps {
  heroRef?: React.Ref<HTMLElement>;
}

export const Hero: React.FC<HeroProps> = ({ heroRef }) => {
  return (
    <section ref={heroRef} className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="eyebrow">给有经验的女老板</p>
          <h1>
            <span className="hero-line">
              <span className="hero-line-inner">你不是没有经验，</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">
                只是还没让对的人<em>看见</em>。
              </span>
            </span>
          </h1>
          <p className="lead">用 AI 与短视频，把多年经验变成客户愿意相信的内容。</p>
          <div className="hero-actions">
            <a className="btn" href="#preview">
              免费参加 Preview Class
            </a>
            <a className="link" href="#story">
              认识大米老师 →
            </a>
          </div>
          <p className="tags">不用当网红 · 不懂 AI 也能学</p>
        </div>
        <figure className="hero-photo">
          <img
            src="/assets/portrait.jpeg"
            alt="大米老师肖像"
            fetchPriority="high"
            width={853}
            height={1280}
          />
          <figcaption>
            <strong>大米老师</strong>
            <span>AI + IP 获客教练</span>
          </figcaption>
        </figure>
      </div>
      <div className="wrap">
        <ul className="stats">
          <li>
            <strong className="stat-count" data-target="10" data-suffix="年+">
              10年+
            </strong>
            <span>直播与团队经验</span>
          </li>
          <li>
            <strong className="stat-count" data-target="2000" data-suffix="万+">
              2000万+
            </strong>
            <span>年度销售业绩</span>
          </li>
          <li>
            <strong className="stat-count" data-target="200" data-suffix="+">
              200+
            </strong>
            <span>学员成为直播获客达人</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
