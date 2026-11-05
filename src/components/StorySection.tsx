import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="story section">
      <div className="storyimage">
        <img
          src="/assets/story.jpeg"
          alt="大米老师暖光侧面肖像"
          loading="lazy"
        />
        <div className="storycaption">
          <span>重新开始，</span>
          <strong>也是一种底气。</strong>
        </div>
      </div>
      <div>
        <p className="eyebrow">我的故事，也是很多老板的故事</p>
        <h2>
          做了这么多年，<br />
          为什么还要<span className="storyaccent">重新开始？</span>
        </h2>
        <p className="storyopening">
          当过去有效的方法，不再像以前有效，<br />
          有经验的老板，也会站在新的起点。
        </p>
        <div className="timeline">
          <article>
            <small>2018 · 从零开始</small>
            <h3>我先做生意，才学会被看见。</h3>
            <p>
              从 Facebook 直播开始，把产品讲清楚，把客户的信任一点一点累积起来。我的 IP，不是从一张漂亮的简介开始，而是从真实的生意开始。
            </p>
            <p className="storytakeaway">你有的，不只是经验。是一路做出来的底气。</p>
          </article>
          <article>
            <small>直播 × 内容 × 私域 × 团队</small>
            <h3>走过成交，也走过带团队的路。</h3>
            <p>
              内容背后，是客户、产品和团队。真正让我在意的，从来不只是有人看，而是这份信任，能不能成为生意里的连接。
            </p>
            <p className="storytakeaway">被看见很重要。被相信，更重要。</p>
          </article>
          <article>
            <small>环境改变 · 再走一次</small>
            <h3>以前做得到，不代表今天不用学。</h3>
            <p>
              当流量环境改变，我也需要重新学习 AI 与短视频。不是把过去全部推翻，而是找到新的表达方式，让积累多年的经验，继续被人看见。
            </p>
            <p className="storytakeaway">重新学习，不是承认自己不行。是让经验走得更远。</p>
          </article>
          <article>
            <small>今天 · 陪你开始</small>
            <h3>所以，我懂你的起点。</h3>
            <p>
              你有产品、有专业、有经验，只是还没找到适合自己的表达方法。我把自己重新走过的路整理成步骤，陪你从一句定位、一条内容开始。
            </p>
            <p className="storytakeaway">不必成为另一个人。先让对的人，看懂你。</p>
          </article>
        </div>
        <a className="button" href="#preview">
          和大米老师一起，迈出第一步
        </a>
      </div>
    </section>
  );
};
