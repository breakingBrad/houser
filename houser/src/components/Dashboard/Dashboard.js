import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <br />
        <Link to="/wizard">
          <button type="submit">
            Add New Property
          </button>
        </Link>
        <House />
      </div>
    );
  }
}

export default Dashboard; 