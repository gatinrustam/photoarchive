import React from 'react';
import './FilterCity.sass';

export function FilterCity({ filterCities, updateCity }) {
  function uniqueArr(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

  const data = uniqueArr(filterCities);

  return (
    <div className="filter-button">
      {data.map((item) => {
        return (
          <div 
            key={item + Math.random()}
            className="filter-button__item"
            onClick={() => updateCity(item)}
          >{item}
          <sup>{Math.ceil(Math.random() * 100)}</sup>
          </div>
        )
      })}
      {data.length > 5 ? <div className="filter-button__item more">еще</div> : ''}
    </div>
  )
}