import React from 'react';

export const MethodSection: React.FC = () => {
  return (
    <section id="method" className="method section">
      <p className="eyebrow">THE BOSS IP SYSTEM</p>
      <h2>
        老板IP，是一套系统。<br />
        不是每天硬拍视频。
      </h2>
      <p className="lead">先找对方向，再让每一条内容，有它的作用。</p>
      <div className="steps">
        <article>
          <b>01</b>
          <h3>定位</h3>
          <p>
            切入一个对的空白市场，<br />
            让你的定位脱颖而出。
          </p>
        </article>
        <article>
          <b>02</b>
          <h3>内容</h3>
          <p>
            做出有你自己味道的内容，<br />
            让大众一看就知道是你。
          </p>
        </article>
        <article>
          <b>03</b>
          <h3>AI</h3>
          <p>
            设计属于你的内容脚本，<br />
            并制定与同行拉开差异化的策略。
          </p>
        </article>
        <article>
          <b>04</b>
          <h3>信任</h3>
          <p>
            用真实的经验与观点，<br />
            让陌生人快速认同和信任你。
          </p>
        </article>
        <article>
          <b>05</b>
          <h3>转化</h3>
          <p>
            让对的人、<br />
            有需求的人选择你。
          </p>
        </article>
      </div>
      <p className="methodend highlight">
        流量不是终点，<span>让对的人来找你，才有意义。</span>
      </p>
    </section>
  );
};
