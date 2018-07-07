import React from 'react';

function House({ id, name, address, city, state, zip, deleteHouse }) {
  return (
    <div className="house-details">
      <p>Property Name:   {name}</p>
      <p>Address:         {address}</p>
      <p>City:            {city}</p>
      <p>State:           {state}</p>
      <p>Zip:             {zip}</p>
      <button className="delete-button" onClick={e => deleteHouse(e, id)}>
        Delete
      </button>
    </div>
  )
}

export default House; 