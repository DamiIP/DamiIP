import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="brand" href="#top">
          大米老师 <i>Dami</i>
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#story">关于我</a>
          <a href="#method">方法</a>
          <a href="#preview">Preview Class</a>
          <a href="#faq">常见问题</a>
        </nav>
        <a className="btn btn-small" href="#preview">
          免费参加
        </a>
      </div>
    </header>
  );
};
