import React from 'react';

const faqList = [
  {
    q: '不懂 AI，可以参加吗？',
    a: '可以。课堂会从具体示范开始，一步步带你看懂。',
  },
  {
    q: '一定要每天出镜吗？',
    a: '不用。按你的行业和时间来规划，出镜只是其中一种方式。',
  },
  {
    q: '参加 Preview 就要买正式课程吗？',
    a: '不用。听完再决定。',
  },
  {
    q: '会有人带着做吗？',
    a: 'Preview 会示范步骤。正式课程的指导与答疑方式，以课程说明为准。',
  },
  {
    q: '一定可以获得客户吗？',
    a: '不保证。结果取决于行业、产品与执行，我们不承诺流量或成交。',
  },
];

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="section soft">
      <div className="wrap narrow">
        <h2 className="center">常见问题</h2>
        <div className="faq">
          {faqList.map((item, idx) => (
            <details key={idx}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
