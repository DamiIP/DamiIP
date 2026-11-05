import React from 'react';

export const PainPoints: React.FC = () => {
  return (
    <section className="pain section">
      <p className="eyebrow">你已经很努力了</p>
      <h2>
        只是，有些努力<br />
        还没有变成客户。
      </h2>
      <div className="painlist">
        <article>
          <span>01</span>
          <h3>有人看，却没人问。</h3>
          <p>视频拍了不少，客户却没有因此更了解你。</p>
        </article>
        <article>
          <span>02</span>
          <h3>很有经验，却不知道讲什么。</h3>
          <p>做了十几年生意，反而不知道从哪里开始说。</p>
        </article>
        <article>
          <span>03</span>
          <h3>工具越来越多，时间越来越少。</h3>
          <p>学了 AI、剪辑、短视频，还是每天烦恼今天拍什么。</p>
        </article>
      </div>
      <p className="closingline highlight">
        你不是没有料。<strong>你的经验，需要被说清楚。</strong>
      </p>
      <a className="textlink" href="#method">
        看看我们怎样开始
      </a>
    </section>
  );
};
