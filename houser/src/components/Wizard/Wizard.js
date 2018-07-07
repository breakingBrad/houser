import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  addHouse() {
    axios.post(`/api/houses`, this.state)
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err)
      });
  }
  render() {
    return (
      <div>
        Wizard
      <br />
        <Link to="/">
          <button type="submit" className="cancel-button">Cancel</button>
        </Link>
        <br />
        <b>Property Name</b>
        <input className="input-line" type="text" name="name" onChange={this.handleChange} />
        <br />
        <b>Address</b>
        <input className="input-line" type="text" name="address" onChange={this.handleChange} />
        <br />
        <b>City</b>
        <input className="input-line" type="text" name="city" onChange={this.handleChange} />
        <b>State</b>
        <input
          className="input-line" type="text" name="state" onChange={this.handleChange} maxLength="2" />
        <br />
        <b>Zip</b>
        <input className="input-line" type="number" name="zip" onChange={this.handleChange} placeholder="0" />
        <br />
        <Link to="/">
          <button type="submit"
            className="complete-button"
            onClick={e => this.addHouse()}
          >
            Complete
          </button>
        </Link>
      </div>
    )
  }
}

export default Wizard; 