import React from 'react';

function House(props) {
  return (
    <div className="house-container">
      <div><img className="house-img" src={props.img} alt="house" /></div>
      <div className="house-details">
        <p>Property Name:   {props.name}</p>
        <p>Address:         {props.address}</p>
        <p>City:            {props.city}</p>
        <p>State:           {props.state}</p>
        <p>Zip:             {props.zip}</p>
      </div>
      <div className="price-details">
        <p>Monthly Mortgage: {props.mortgage}</p>
        <p>Desired Rent: {props.rent}</p>
      </div>
      <div className="button-container">
        <button className="delete-button" onClick={e => props.deleteHouse(e, props.id)}>
          Delete
      </button>
      </div>

    </div>
  )
}

export default House; 