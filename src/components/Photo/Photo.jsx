import React from 'react';
import './Photo.sass';

export function Photo({id, city, name, year, url, description}) {
  return (
    <div 
      key={id}
      className="photo__item"
    >
      <div className="overlay">
        {/* {id} */}
        <div className="overlay__name">
          {name.map(item => {
            return (
              <div 
                key={item + Math.random}
                className="overlay__item">
                {item}
              </div>
            )
          })}
        </div>
        <div className="overlay__description">
          {description}
        </div>
        <div className="overlay__year">
          {city}, {year} год
        </div>
      </div>
      <img src={`pictures/${url}`} alt="" />
    </div>
  )
}