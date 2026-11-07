import React, { useState } from 'react';

type ResultType = '定位卡关' | '内容卡关' | '转化卡关';

interface QuestionOption {
  text: string;
  type: ResultType;
}

interface Question {
  title: string;
  options: QuestionOption[];
}

const quizQuestions: Question[] = [
  {
    title: '你现在最大的困扰？',
    options: [
      {
        text: '有经验，但说不清定位',
        type: '定位卡关',
      },
      {
        text: '想拍，但没脚本、没时间',
        type: '内容卡关',
      },
      {
        text: '有人看，没人问',
        type: '转化卡关',
      },
    ],
  },
  {
    title: '你拍过多少条视频？',
    options: [
      {
        text: '不到 5 条',
        type: '定位卡关',
      },
      {
        text: '5–30 条，断断续续',
        type: '内容卡关',
      },
      {
        text: '30 条以上，没有回报',
        type: '转化卡关',
      },
    ],
  },
  {
    title: '你每周能投入多少时间？',
    options: [
      {
        text: '1–2 小时',
        type: '定位卡关',
      },
      {
        text: '3–5 小时',
        type: '内容卡关',
      },
      {
        text: '5 小时以上',
        type: '转化卡关',
      },
    ],
  },
];

const resultDetails: Record<ResultType, { title: string; desc: string }> = {
  定位卡关: {
    title: '定位卡关',
    desc: '你有经验，缺的是一句说清楚的定位。',
  },
  内容卡关: {
    title: '内容卡关',
    desc: '你有想法，缺的是脚本框架和 AI 流程。',
  },
  转化卡关: {
    title: '转化卡关',
    desc: '内容有人看，缺的是从信任到咨询这一步。',
  },
};

export const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<ResultType[]>([]);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const totalSteps = quizQuestions.length;
  const isCompleted = currentStep >= totalSteps;

  const handleSelectOption = (type: ResultType) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const nextAnswers = [...answers, type];
    setAnswers(nextAnswers);

    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
      setIsTransitioning(false);
    }, 240);
  };

  const handleReset = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setAnswers([]);
      setCurrentStep(0);
      setIsTransitioning(false);
    }, 200);
  };

  // Determine top result
  const calculateResult = (): ResultType => {
    // Two matching answers win; if all three differ, trust the first question.
    const repeated = answers.find((ans, i) => answers.indexOf(ans) !== i);
    return repeated ?? answers[0];
  };

  const resultType = isCompleted ? calculateResult() : null;
  const resultInfo = resultType ? resultDetails[resultType] : null;

  const progressPercent = isCompleted
    ? 100
    : Math.round(((currentStep + 1) / totalSteps) * 100);

  const whatsappHref = resultType
    ? `https://wa.me/60102131439?text=${encodeURIComponent(
        `你好阿珍，我的测试结果是${resultType}，想了解 Preview Class`
      )}`
    : 'https://wa.me/60102131439';

  return (
    <section id="quiz" className="section quiz-section">
      <div className="wrap narrow">
        <div className="center quiz-header">
          <p className="eyebrow">30 秒小自测</p>
          <h2>你的老板 IP 卡在哪？</h2>
          <p className="lead">3 道题，看清下一步。</p>
        </div>

        <div className="quiz-card" aria-live="polite">
          {/* Progress bar */}
          <div className="quiz-progress-track" aria-hidden="true">
            <div
              className="quiz-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="quiz-card-inner">
            {!isCompleted ? (
              <div
                className={`quiz-step-pane ${
                  isTransitioning ? 'step-fade-out' : 'step-fade-in'
                }`}
              >
                <div className="quiz-step-meta">
                  <span className="quiz-step-badge">
                    第 {currentStep + 1} 题 / 共 {totalSteps} 题
                  </span>
                </div>
                <h3 className="quiz-question-title">
                  {quizQuestions[currentStep].title}
                </h3>
                <div className="quiz-options-list">
                  {quizQuestions[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="quiz-option-btn"
                      onClick={() => handleSelectOption(opt.type)}
                      disabled={isTransitioning}
                    >
                      <span className="quiz-option-letter">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="quiz-option-text">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className={`quiz-result-pane ${
                  isTransitioning ? 'step-fade-out' : 'step-fade-in'
                }`}
              >
                <div className="quiz-result-badge">测试结果诊断</div>
                <h3 className="quiz-result-title">{resultInfo?.title}</h3>
                <div className="quiz-result-desc">
                  {resultInfo?.desc.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <div className="quiz-result-actions">
                  <a
                    className="btn btn-gold quiz-cta-btn"
                    href={whatsappHref}
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
                    WhatsApp 问问阿珍
                  </a>
                  <button
                    type="button"
                    className="quiz-reset-btn"
                    onClick={handleReset}
                  >
                    重新测试
                  </button>
                </div>
                <p className="small muted-light-center">
                  联系阿珍 · +60 10 213 1439 · 免费咨询
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
