import React from 'react';
import Filter from './Filter.js';
import { filterOptions } from '../data.js';

var FiltersList = props => {
  /* notice how we've moved our callback function
  inside of the FiltersList function so that we can access props
  in our definition of the renderFilter callback function */
  var renderFilter = filter => {
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes to see how the .includes array method works
    var isChecked = props.selectedFilters.includes(filter.key);
    return (
      <Filter
        key={filter.key}
        filter={filter}
        isChecked={isChecked}
        toggleFilter={props.toggleFilter}
      />
    );
  };
  var filterListElements = filterOptions.map(renderFilter);
  return (
    <div className='controls'>
      <h5 className='controls__header'>Filter By:</h5>
      <hr />
      <ul className='filters-list'>{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;
