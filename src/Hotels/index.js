import React from 'react';
import Hotel from './Hotel.js';
import { hotels } from '../data.js';

var renderHotel = hotel => <Hotel key={hotel.id} hotel={hotel} />;

var HotelsList = props => {
  var filterCallback = hotel => {
    var everyCallback = filter => hotel[filter];
    return props.selectedFilters.every(everyCallback);
  };

  var filteredHotels = hotels.filter(filterCallback);

  /* check out this cool sort method that we get for free with all JavaScript arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */
  var sortCallback = (hotelA, hotelB) =>
    hotelB[props.sortBy] - hotelA[props.sortBy];
  var sortedHotels = filteredHotels.sort(sortCallback);

  var hotelListElements = sortedHotels.map(renderHotel);
  return <ul className='hotels-list'>{hotelListElements}</ul>;
};

export default HotelsList;
