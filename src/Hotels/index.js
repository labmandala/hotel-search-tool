import React from "react";
import Hotel from "./Hotel.js";

const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel} />;

const HotelsList = (props) => {
  if (!props.hotels) {
    return null;
  }

  return <ul className="hotels-list">{}</ul>;
};

export default HotelsList;
