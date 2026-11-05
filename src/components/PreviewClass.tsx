import React from 'react';

interface PreviewClassProps {
  previewRef?: React.Ref<HTMLElement>;
}

const previewBenefits = [
  '为什么有人看，却没人问',
  '找到你的老板 IP 定位',
  '用 AI 把想法变成脚本',
  '用内容一步步建立信任',
  '从内容到咨询的下一步',
];

const giftItems = [
  '一句话 IP 定位公式',
  '30 个老板可直接拍的 Hook',
  '5P 内容框架',
  'AI 短视频脚本 Prompt',
  '7 天内容排程表',
];

export const PreviewClass: React.FC<PreviewClassProps> = ({ previewRef }) => {
  return (
    <section ref={previewRef} id="preview" className="section dark">
      <div className="wrap split">
        <div>
          <p className="eyebrow">免费 Preview Class</p>
          <h2>先上一堂，再决定。</h2>
          <p>看懂方法，再决定适不适合你。</p>
          <ul className="checks">
            {previewBenefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <a
            className="btn btn-gold"
            href="https://wa.me/60102131439"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm5.77 13.9c-.24.68-1.4 1.3-1.95 1.38-.5.07-1.13.1-1.82-.12a16.7 16.7 0 0 1-1.65-.61c-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.2-.14.31-.29.48-.14.17-.3.38-.43.5-.14.15-.3.3-.13.6.17.29.75 1.24 1.62 2 1.1.99 2.04 1.3 2.33 1.44.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.65-.14.27.1 1.68.8 1.97.94.29.15.48.22.55.34.07.12.07.7-.17 1.38Z" />
            </svg>
            WhatsApp 报名下一场
          </a>
          <p className="small muted-light">
            联系阿珍 · +60 10 213 1439　录播视频即将上线
          </p>
        </div>
        <aside id="gift" className="gift">
          <p className="eyebrow">课后赠礼</p>
          <h3>老板 IP 起号懒人包</h3>
          <ol>
            {giftItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
          <p className="small">
            上完 Preview Class 后，由
            <a
              href="https://wa.me/60143174319"
              target="_blank"
              rel="noopener noreferrer"
            >
              大米助理
            </a>
            发送给你。
          </p>
        </aside>
      </div>
    </section>
  );
};
