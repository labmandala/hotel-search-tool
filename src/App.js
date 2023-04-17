import React, { Component } from 'react';
import Hotels from './Hotels';
import Filters from './Filters';
import Sort from './Sort.js';

class App extends Component {
  state = { selectedFilters: [], sortBy: 'rating' };
  toggleFilter = clickedFilterKey => {
    var newFilters;
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes to see how the .includes array method works
    var alreadySelected = this.state.selectedFilters.includes(clickedFilterKey);
    if (alreadySelected) {
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter to see how the .filter array method works
      newFilters = this.state.selectedFilters.filter(
        selectedFilter => selectedFilter !== clickedFilterKey,
      );
    } else {
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat to see how the .concat array method works
      newFilters = this.state.selectedFilters.concat(clickedFilterKey);
    }
    this.setState({ selectedFilters: newFilters });
  };
  updateSort = event => {
    var sortBy = event.target.value;
    this.setState({ sortBy });
  };
  render() {
    return (
      <div className='App'>
        <aside>
          <Sort sortBy={this.state.sortBy} updateSort={this.updateSort} />
          <Filters
            selectedFilters={this.state.selectedFilters}
            toggleFilter={this.toggleFilter}
          />
        </aside>
        <Hotels
          selectedFilters={this.state.selectedFilters}
          sortBy={this.state.sortBy}
        />
      </div>
    );
  }
}

export default App;
