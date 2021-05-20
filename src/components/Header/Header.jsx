import React from 'react';
import small from './images/small.svg';
import middle from './images/middle.svg';
import large from './images/large.svg';
import './Header.sass';

<a id="Ticker" href="http://example.com/default_link">Здесь можно вписать дефолтную ссылку.</a>


export function Header({ updateData }) {
  return (
    <header className="header">
      <div className="title">
        <div className="title__logo">
          Большой семейный альбом
        </div>
        <span className="title__span">
        Сейчас все в&nbsp;бета-тесте. Если что-то криво работает, напиши мне в&nbsp;телегу <a href="https://t.me/gatinrustam">@gatinrustam</a>
        </span>
      </div>

      <div className="menu">
        <div className="menu__grid">
          <img 
            className="menu__grid-image" 
            src={small} 
            data-columns={5} 
            onClick={() => updateData(5)}
            alt="" />
          <img 
            className="menu__grid-image" 
            src={middle} 
            data-columns={3} 
            onClick={() => updateData(3)}
            alt="" />
          <img
            className="menu__grid-image" 
            src={large} 
            data-columns={2} 
            onClick={() => updateData(2)}
            alt="" />
        </div>
        {/* <div className="menu__expand">
          Менюшка
        </div> */}
      </div>
    </header>
  )
}