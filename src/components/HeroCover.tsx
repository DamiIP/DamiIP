import React from 'react';

export const HeroCover: React.FC = () => {
  return (
    <section className="hero coverhero">
      <div className="coverheading">
        <p className="eyebrow">FOR WOMEN WHO MEAN BUSINESS · 给有经验的女老板</p>
        <h1>
          你不是没有经验。<br />
          你只是还没让对的人，<br />
          <strong><em>看见</em>你的价值。</strong>
        </h1>
      </div>

      <div className="coverstage">
        <div className="coverbrand" aria-hidden="true">
          <span className="ipword">IP</span>
        </div>
        <p className="coverscript">
          Build Influence.<br />
          <span>Grow Your Business.</span>
        </p>
        <div className="coverhalo" aria-hidden="true"></div>
        <div className="coverdots" aria-hidden="true"></div>
        <div className="heroimage">
          <img
            src="/assets/portrait.jpeg"
            alt="大米老师在暖光中的自信肖像"
            fetchPriority="high"
          />
        </div>
        <div className="covercredentials">
          <a className="identitycard" href="#story">
            <strong>大米老师 <i>Dami</i></strong>
            <span>AI + IP获客教练<br />直播创业导师<br />Me Beauty &amp; Health<br />Sdn Bhd 创办人</span>
          </a>
          <a className="credential" href="#story">
            <span className="statmark" aria-hidden="true">♟</span>
            <div>
              <strong>10年+</strong>
              <span>直播与团队经验</span>
            </div>
          </a>
          <a className="credential" href="#story">
            <span className="statmark" aria-hidden="true">★</span>
            <div>
              <strong>2000万+</strong>
              <span>年度销售业绩</span>
            </div>
          </a>
          <a className="credential" href="#story">
            <span className="statmark" aria-hidden="true">♟</span>
            <div>
              <strong>培养 200+</strong>
              <span>成为直播获客的达人</span>
            </div>
          </a>
        </div>
        <blockquote className="imagecaption">
          <span className="quotemark" aria-hidden="true">“</span>
          <p>
            经验，是你的底气。<br />
            <strong>影响力，让它被看见。</strong>
          </p>
        </blockquote>
        <div className="coveractions">
          <a className="button" href="#preview">
            <span aria-hidden="true">▦</span>免费参加 Preview Class
          </a>
          <a className="button outline" href="#gift">
            <span aria-hidden="true">✦</span>看课后领取懒人包
          </a>
        </div>
      </div>

      <div className="coverintroduction">
        <p>
          我是大米老师。<br />
          从直播、带团队、做成交，到重新学习 AI 与短视频，我陪有经验的女老板，把多年积累，整理成客户看得懂、愿意相信的内容。
        </p>
        <p className="quiet">不用当网红 · 从你的经验开始 · 不懂 AI 也能学</p>
      </div>
    </section>
  );
};
