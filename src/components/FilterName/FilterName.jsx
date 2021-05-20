import React from 'react';
import './FilterName.sass';

export function FilterName({ filterNames, updateName }) {
  function uniqueArr(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

  const data = uniqueArr(filterNames);

  return (
    <div className="filter-button">
      {data.map((item) => {
        return (
          <div 
            key={item + Math.random()}
            className="filter-button__item"
            onClick={() => updateName(item)}
          >{item}
          <sup>{Math.ceil(Math.random() * 100)}</sup>
          </div>
        )
      })}
      {data.length > 5 ? <div className="filter-button__item more">еще</div> : ''}
    </div>
  )
}