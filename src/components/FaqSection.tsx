import React from 'react';

export const FaqSection: React.FC = () => {
  return (
    <section className="faq section">
      <div>
        <p className="eyebrow">你可能正在想</p>
        <h2>
          先把顾虑，<br />
          说清楚。
        </h2>
        <img
          src="/assets/warmth.jpeg"
          alt="大米老师身穿白色服装的温柔肖话"
          loading="lazy"
        />
      </div>
      <div>
        <details open>
          <summary>不懂 AI，可以参加吗？</summary>
          <p>
            可以。Preview Class 会从具体想法与脚本示范开始，帮助你看懂工具怎样协助表达。
          </p>
        </details>
        <details>
          <summary>一定要每天出镜吗？</summary>
          <p>
            先根据行业、客户和你能投入的时间规划内容。出镜只是其中一种表达方式。
          </p>
        </details>
        <details>
          <summary>参加 Preview 就要买正式课程吗？</summary>
          <p>
            不用。先了解方法，再决定是否继续。正式课程内容与报名详情会另行说明。
          </p>
        </details>
        <details>
          <summary>会有人带着做，还是只给我工具？</summary>
          <p>
            Preview 会讲解方法并示范步骤。正式课程的指导方式、答疑安排和执行支持，以公布的课程说明为准。
          </p>
        </details>
        <details>
          <summary>一定可以获得客户吗？</summary>
          <p>
            结果与行业、产品、投入及执行有关。我们重视真实表达与持续调整，不承诺流量或成交结果。
          </p>
        </details>
      </div>
    </section>
  );
};
