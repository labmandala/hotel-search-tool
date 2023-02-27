import React from "react";
import Hotel from "./Hotel.js";

const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel} />;

const HotelsList = (props) => {
  if (!props.hotels) {
    return null;
  }

  // In HotelsList functional component, map over the hotels prop to call
  // the renderHotel callback function for each hotel in the hotels array
  props.hotels.map(renderHotel)
  return <ul className="hotels-list">{}</ul>;
};

export default HotelsList;
