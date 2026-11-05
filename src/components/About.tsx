import React from 'react';

const timelineData = [
  { time: '2018', text: 'Facebook 直播起步' },
  { time: '成长', text: '直播、私域、带团队、做成交' },
  { time: '转型', text: '重新学习 AI 与短视频' },
  { time: '今天', text: '陪女老板打造个人 IP' },
];

export const About: React.FC = () => {
  return (
    <section id="story" className="section soft">
      <div className="wrap split">
        <img
          className="split-photo"
          src="/assets/story.jpeg"
          alt="大米老师侧面肖像"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">关于我</p>
          <h2>
            我先做生意，
            <br />
            才学会被看见。
          </h2>
          <p>
            流量环境变了，我也重新学习 AI 与短视频。现在，我把走过的路整理成步骤，陪你从第一条内容开始。
          </p>
          <ol className="timeline">
            {timelineData.map((item, idx) => (
              <li key={idx}>
                <b>{item.time}</b>
                {item.text}
              </li>
            ))}
          </ol>
          <p className="small">Me Beauty &amp; Health Sdn Bhd 创办人</p>
        </div>
      </div>
    </section>
  );
};
