import React from 'react';

export const WhySection: React.FC = () => {
  return (
    <section className="why section">
      <div>
        <p className="eyebrow">为什么是大米老师</p>
        <h2>
          有底气，也有温度。<br />
          懂生意，也懂你的不容易。
        </h2>
      </div>
      <div className="reasons">
        <article>
          <h3>从真实生意里走出来</h3>
          <p>表达、产品、团队和成交，需要放在一起思考。</p>
        </article>
        <article>
          <h3>懂得重新开始的心情</h3>
          <p>不是你不努力。有时只是过去的方法，需要换一种做法。</p>
        </article>
        <article>
          <h3>用 AI，帮你省下力气</h3>
          <p>把时间留给客户与生意，让工具帮助你整理与表达。</p>
        </article>
        <article>
          <h3>从你已经拥有的价值开始</h3>
          <p>你不需要成为另一个人。你需要让别人更清楚地认识你。</p>
        </article>
      </div>
    </section>
  );
};
