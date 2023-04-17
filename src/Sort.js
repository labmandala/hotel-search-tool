import React from 'react';

var Sort = props => (
  <div className='controls'>
    <h5 className='controls__header'>Sort By:</h5>
    <hr />
    <select onChange={props.updateSort} value={props.sortBy}>
      <option value='rating'>Rating</option>
      <option value='reviewCount'>Popularity</option>
      <option value='pricePerNight'>Price Per Night</option>
      <option value='roomsRemaining'>Rooms Remaining</option>
    </select>
  </div>
);

export default Sort;
