import React from 'react';

export const PreviewSection: React.FC = () => {
  return (
    <section id="preview" className="preview wine section">
      <div>
        <p className="eyebrow">老板IP PREVIEW CLASS</p>
        <h2>
          先来上一堂，<br />
          <span>再决定。</span>
        </h2>
        <p>
          你的经验值得认真对待。<br />
          先看懂这套方法，再决定是不是适合你。
        </p>
        <a
          className="button gold"
          href="https://wa.me/60102131439"
          target="_blank"
          rel="noopener noreferrer"
        >
          我要参加下一场 Preview Class
        </a>
        <p className="quiet highlight">先听懂，再决定适不适合你。</p>
      </div>

      <div className="classcontent">
        <div className="videoawait">
          <span>PREVIEW CLASS · 录播课堂</span>
          <h3>先听懂，再开始。</h3>
          <p>录播视频即将上线。目前可以联系阿珍预约课程。</p>
        </div>
        <h3>这一堂，我们一起看懂</h3>
        <ul>
          <li>为什么有人看，却没有人来问？</li>
          <li>怎样找到适合你的老板IP定位？</li>
          <li>怎样用 AI，把想法变成视频脚本？</li>
          <li>内容如何一步步建立信任？</li>
          <li>如何设计从内容到咨询的下一步？</li>
        </ul>
        <p>从定位到脚本，以具体步骤带你理解，不让你面对一堆工具自己摸索。</p>
        <div className="afterwatch">
          <h3>听完之后，你可以这样开始</h3>
          <a
            className="button gold"
            href="https://wa.me/60102131439"
            target="_blank"
            rel="noopener noreferrer"
          >
            咨询正式课程报名
          </a>
          <p>
            课后懒人包由
            <a
              href="https://wa.me/60143174319"
              target="_blank"
              rel="noopener noreferrer"
            >
              大米助理
            </a>
            确认发放。
          </p>
        </div>
        <div id="registration" className="registration">
          <strong>下一场开放通知</strong>
          <p>
            联系阿珍了解下一场日期与报名详情。<br />
            <a
              href="https://wa.me/60102131439"
              target="_blank"
              rel="noopener noreferrer"
            >
              阿珍 · +60 10 213 1439
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
