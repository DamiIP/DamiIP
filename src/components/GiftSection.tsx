import React from 'react';

export const GiftSection: React.FC = () => {
  return (
    <section id="gift" className="gift section">
      <div>
        <p className="eyebrow">看完 PREVIEW CLASS · 课后赠礼</p>
        <h2>
          老板IP<br />
          起号懒人包
        </h2>
        <p>
          先听懂方法，再带走工具。<br />
          看完 Preview Class 后，由助理发给你，帮助你把第一条内容写出来。
        </p>
        <ol>
          <li>一句话 IP 定位公式</li>
          <li>30 个老板可以直接拍的 Hook</li>
          <li>5P 内容框架</li>
          <li>AI 短视频脚本 Prompt</li>
          <li>7 天内容排程表</li>
        </ol>
      </div>
      <div className="afterclass">
        <p className="eyebrow">先学方法 · 再用工具</p>
        <h3>这份懒人包，留给认真听课的你。</h3>
        <p>
          先观看老板IP Preview Class。完成课程后，联系大米助理确认领取，带着课堂里的方法开始行动。
        </p>
        <a className="button" href="#preview">
          先看 Preview Class
        </a>
        <p className="formnote">
          懒人包由助理在课后发放，网站不提供提前下载。
        </p>
      </div>
    </section>
  );
};
