import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <a className="brand" href="#">
        大米老师 <i>Dami</i>
      </a>
      <nav aria-label="主导航">
        <a href="#">首页</a>
        <a href="#story">关于我</a>
        <a href="#method">课程介绍</a>
        <a href="#gift">免费资源</a>
        <a href="#registration">联系我</a>
        <a className="navcta" href="#preview">
          参加 Preview Class
        </a>
      </nav>
    </header>
  );
};
