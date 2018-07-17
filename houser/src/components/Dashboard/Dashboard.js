import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetState } from '../../ducks/reducer'
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      img: '',
      mortgage: '',
      rent: '',
    }
  }

  fetchHouses() {
    axios.get(`/api/houses`)
      .then((res) => {
        console.log(res);
        this.setState({
          houses: res.data
        })
      })
  }

  deleteHouse = (e, id) => {
    console.log(`Removing House Id: ${id}`)
    axios.delete(`/api/houses/${id}`)
      .then(response => {
        this.fetchHouses();
      })
      .catch(err => {
        console.log(err)
      });
  }

  componentDidMount() {
    this.fetchHouses();
    this.setState({
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      img: '',
      mortgage: '',
      rent: '',
    })
  }

  render() {
    const { resetState } = this.props;
    const houses = this.state.houses
      .map((house, id) => (
        <House
          {...house}
          key={id}
          deleteHouse={this.deleteHouse} />
      ))
    return (
      <div>
        Dashboard
        <br />
        <Link to="/wizard/step1">
          <button type="submit" onClick={() => resetState(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip, this.state.img, this.state.mortgage, this.state.rent)}>
            Add New Property
          </button>
        </Link>
        {houses}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  address: state.address,
  city: state.city,
  state: state.state,
  zip: state.zip,
  img: state.img,
  mortgage: state.mortgage,
  rent: state.rent,
});

export default connect(mapStateToProps, { resetState })(Dashboard);