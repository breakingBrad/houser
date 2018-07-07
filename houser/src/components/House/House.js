import React from 'react';

function House({ name, address, city, state, zip }) {
  return (
    <div className="house-details">
      <p>Property Name:   {name}</p>
      <p>Address:         {address}</p>
      <p>City:            {city}</p>
      <p>State:           {state}</p>
      <p>Zip:             {zip}</p>
      <button className="delete-button">Delete</button>
    </div>
  )
}

export default House; 