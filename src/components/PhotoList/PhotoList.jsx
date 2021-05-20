import React, {useState} from 'react';
import { Photo } from '../Photo/Photo';
import { FilterName } from '../FilterName/FilterName';
import { FilterCity } from '../FilterCity/FilterCity';
import Masonry from 'react-masonry-css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import data from '../../data.js';
import './PhotoList.sass';

export function PhotoList({ grid }) {
  // cities filter
  const cities = data.map(item => item.city);
  // names filter
  const names = [];
  data.map(item => item.name).forEach(item => names.push(...item));
  // years input range data
  const years = data.map(item => item.year),
        minYears = Math.min.apply(null, years),
        maxYears = Math.max.apply(null, years);

  // change state ofcities
  const [sortCities, setSortCities] = useState("Ахангаран");
  const updateCity = income => setSortCities(income);
  console.log(sortCities)

  // change state of names
  const [sortNames, setSortNames] = useState([]);
  const updateName = income => {
    setSortNames(prev => {
      if (prev.includes(income)) {
        return prev.filter(item => item !== income);
      } else {
        return [...prev, income];
      }
    });
  }

  // change state of years
  const [year, setYear] = useState({
    min: minYears,
    max: maxYears,
  });

  // result filter array
  let photos = data.filter(element => 
    Number(element.year) >= year.min && // sort by min year
    Number(element.year) <= year.max && // sort by max year
    sortNames.find(item => element.name.includes(item)) && // sort by names
    element.city === sortCities); // sort by city
    
    
    console.log(photos)

  if (photos.length === 0) {
    photos = data.filter(element => 
      Number(element.year) >= year.min && 
      Number(element.year) <= year.max);
  }

  return (
    <div className="content">
      <div className="name-filter">
        <div className="filter-range">
          <InputRange
            draggableTrack
            minValue={minYears}
            maxValue={maxYears}
            onChange={value => setYear(value)}
            value={year}
          />
        </div>

        <FilterName
          filterNames={names}
          updateName={updateName}
        />

        <FilterCity
          filterCities={cities}
          updateCity={updateCity}
        />
      </div>



      <div className="filter-result">
        <div className="filter-result__title">{data.length} фотографий в базе, из них</div>
        <div className="filter-result__year">c {year.min} по {year.max} годы</div>
        {sortNames.map(sortName => {
          return <span className="filter-result__name">{sortName}</span>
        })}
      </div>


      <Masonry
        breakpointCols={grid}
        className="photo"
        columnClassName="photo__col">
          {photos.map(item => {
            return (
              <Photo 
                key={item.id + item.city}
                id={item.id}
                city={item.city}
                name={item.name}
                year={item.year}
                url={item.url}
                description={item.description}
              />
            )
          })}
      </Masonry>
    </div>
  )
}