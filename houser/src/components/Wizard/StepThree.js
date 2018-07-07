import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: '',
      rent: '',
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
        <p>Recommended Rent: ${!this.state.mortgage == '' ? this.state.mortgage * 1.25 : 0} </p>
        <p>Monthly Mortgage Amount</p>
        <input className="input-line" type="number" name="mortgage" onChange={this.handleChange} placeholder="0" />
        <br />
        <p>Desired Monthly Rent</p>
        <input className="input-line" type="number" name="rent" onChange={this.handleChange} placeholder="0" />
        <br />
        <Link to="/wizard/step2">
          <button type="submit"
            className="step-button"
          >
            Previous Step
            </button>
        </Link>
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

export default StepThree; 