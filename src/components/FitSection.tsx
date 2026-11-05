import React from 'react';

export const FitSection: React.FC = () => {
  return (
    <section className="fit section">
      <p className="eyebrow">不求适合每一个人</p>
      <h2>
        如果你已经有经验，<br />
        这里，也许就是你的下一步。
      </h2>
      <div className="fitgrid">
        <article>
          <h3>适合这样的你</h3>
          <p>有产品、有专业、有真实经验。</p>
          <p>愿意从客户的问题开始表达。</p>
          <p>希望建立持续的内容与信任。</p>
        </article>
        <article>
          <h3>先想清楚，再开始</h3>
          <p>如果你只想一夜爆红，或期待保证成交。</p>
          <p>如果你希望完全不投入时间，就有结果。</p>
          <p>这套方法需要练习、调整与执行。</p>
        </article>
      </div>
    </section>
  );
};
