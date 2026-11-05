import React from 'react';

const painPoints = [
  {
    title: '有人看，没人问',
    desc: '视频拍了不少，客户还是不了解你。',
  },
  {
    title: '有经验，不知道讲什么',
    desc: '做了十几年生意，却不知从哪说起。',
  },
  {
    title: '工具多，时间少',
    desc: '学了 AI 和剪辑，还是不知道今天拍什么。',
  },
];

export const PainPoints: React.FC = () => {
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="center">很努力，却还没有变成客户？</h2>
        <div className="cards three">
          {painPoints.map((item, index) => (
            <article key={index} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
        <p className="note center">你不缺料，只是经验需要被说清楚。</p>
      </div>
    </section>
  );
};
