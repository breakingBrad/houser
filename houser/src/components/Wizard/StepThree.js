import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { stepThreeBuilder } from '../../ducks/reducer'

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      address: props.address,
      city: props.city,
      state: props.state,
      zip: props.zip,
      img: props.img,
      mortgage: '',
      rent: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  handleSubmit() {
    this.props.stepThreeBuilder(this.state.mortgage, this.state.rent);
    this.addHouse();
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
            onClick={e => this.handleSubmit()}
          >
            Complete
          </button>
        </Link>
      </div >
    )
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

export default connect(mapStateToProps, { stepThreeBuilder })(StepThree); 