import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
    }
  }

  fetchHouses() {
    axios.get(`api/houses`)
      .then((res) => {
        console.log(res);
        this.setState({
          houses: res.data
        })
      })
  }

  componentDidMount() {
    this.fetchHouses();
  }

  render() {
    const houses = this.state.houses
      .map((house, i) => (
        <House
          {...house} />
      ))
    return (
      <div>
        Dashboard
        <br />
        <Link to="/wizard">
          <button type="submit">
            Add New Property
          </button>
        </Link>
        {houses}
      </div>
    );
  }
}

export default Dashboard; 