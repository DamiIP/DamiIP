import React from 'react';

const steps = [
  { step: '01', title: '定位', desc: '找到对的空白市场' },
  { step: '02', title: '内容', desc: '做出有你味道的内容' },
  { step: '03', title: 'AI', desc: '用 AI 写脚本、拉开差异' },
  { step: '04', title: '信任', desc: '用真实经验建立信任' },
  { step: '05', title: '转化', desc: '让有需要的人选择你' },
];

export const Method: React.FC = () => {
  return (
    <section id="method" className="section">
      <div className="wrap">
        <p className="eyebrow center">老板 IP 系统</p>
        <h2 className="center">
          一套系统，
          <br />
          不是每天硬拍视频。
        </h2>
        <ol className="steps">
          {steps.map((item) => (
            <li key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
