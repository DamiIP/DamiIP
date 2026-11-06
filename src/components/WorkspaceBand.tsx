import React from 'react';

export const WorkspaceBand: React.FC = () => {
  return (
    <section className="workspace-band-section" aria-label="大米老师工作场景">
      <div className="wrap">
        <figure className="workspace-band">
          <img
            src="/assets/workspace.jpg"
            alt="大米老师的优雅工作台与教学设备"
            loading="lazy"
            width={1200}
            height={675}
          />
        </figure>
      </div>
    </section>
  );
};
