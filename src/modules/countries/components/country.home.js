import React from 'react';
import { useLocation } from 'react-router-dom';

const CountryHome = () => {
  const location = useLocation();
  return (
    <div>
      <p>CountryHome</p>
      <p>{location.state.name}</p>
      <p>{location.state.capital}</p>
      <p>{location.state.population}</p>
      <p>{location.state.area}</p>
      <p>{location.state.region}</p>
      <p>{location.state.subregion}</p>
      <img src={location.state.flags} alt=''/>
      <p>{location.state.language}</p>

    </div>
  )
}

export default CountryHome;