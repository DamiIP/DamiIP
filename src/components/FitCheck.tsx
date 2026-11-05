import React from 'react';

const fitItems = [
  '有产品、有专业、有经验',
  '愿意从客户的问题出发',
  '想建立长期的信任',
];

const unfitItems = [
  '只想一夜爆红',
  '期待保证成交',
  '不打算投入时间练习',
];

export const FitCheck: React.FC = () => {
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="center">适合你吗？</h2>
        <div className="cards two">
          <article className="card">
            <h3 className="yes">适合你，如果你</h3>
            <ul className="plain">
              {fitItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3 className="no">不适合，如果你</h3>
            <ul className="plain">
              {unfitItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
