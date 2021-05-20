import React, { useState } from 'react';
import './Filter.sass';

export function Filter() {
  const filterData = [
    {
      type: 'name',
      items: ['Алина', 'Рустам', 'Артем', 'Шариф', 'Венера', 'Замир', 'Иван']
    },
    {
      type: 'city',
      items: ['Самара', 'Ахангаран', 'Ташкент', 'Хабаровск']
    },
    {
      type: 'type',
      items: ['Фото', 'Видео', 'Анимация']
    },
  ]

  function handleClick(event) {
    event.preventDefault();
    console.log(event.target.innerText);
  }

  const [activeItem, setActiveItem] = useState(false);

  function expandFilter() {
    if (!activeItem) {
      setActiveItem(true);
      console.log(activeItem)
    }
    else {
      setActiveItem(false);
      console.log(activeItem)
    }
  }

  return (
    <div className="filter">
      <div className="range">
        <input type="range" />
      </div>
      {filterData.map(filter => {
        return (
          <div 
            key={filter.type + Math.random()}
            className={`filter__${filter.type}`}
          >
            {filter.items.map(item => {
              return (
                <div 
                  key={filter.type + Math.random()}
                  className={`filter__item ${filter.type}`}
                  onClick={handleClick}
                >
                  {item}
                </div>
              )
            })}
          </div>
        )
      })}
      

      <div className="filter__more">
        <span 
          className="filter__item more"
          onClick={expandFilter}
        >еще</span>
      </div>
    </div>
  )
}