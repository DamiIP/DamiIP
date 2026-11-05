import React from 'react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="finalcta wine section">
      <p className="eyebrow">让你的经验，走得更远</p>
      <h2>
        你的经验，<br />
        值得被更多人看见。
      </h2>
      <p>
        做了十年、二十年的积累，<br />
        可能正是别人正在寻找的答案。
      </p>
      <div className="actions">
        <a className="button gold" href="#gift">
          先看课后领取懒人包
        </a>
        <a className="button lightoutline" href="#preview">
          参加 Preview Class
        </a>
      </div>
      <a className="courselink" href="#course">
        了解 30 天老板IP执行系统
      </a>
      <details id="course">
        <summary>30 天老板IP执行系统</summary>
        <p>
          从定位、内容规划到脚本与执行，建立自己的内容节奏。课程安排、价格与报名详情，请联系
          <a
            href="https://wa.me/60143174319"
            target="_blank"
            rel="noopener noreferrer"
          >
            大米助理 · +60 14 317 4319
          </a>
          。
        </p>
      </details>
    </section>
  );
};
