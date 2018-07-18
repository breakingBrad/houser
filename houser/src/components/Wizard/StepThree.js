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
      zip: props.zip,
      img: props.img,
      mortgage: 0,
      rent: 0,
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

  componentWillMount() {
    this.setState({
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
      img: this.props.img,
      mortgage: 0,
      rent: 0
    })
  }

  addHouse() {
    const newHouse = this.state
    console.log(newHouse);
    axios.post(`/api/houses`, newHouse)
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
        <span className="rent-rec">
          <p>Recommended Rent: ${!this.state.mortgage == '' ? this.state.mortgage * 1.25 : 0} </p>
        </span>
        <div className="input-container">
          <p>Monthly Mortgage Amount</p>
          <input className="input-line" type="number" name="mortgage" onChange={this.handleChange} placeholder="0" value={this.state.mortage} />
          <br />
          <p>Desired Monthly Rent</p>
          <input className="input-line" type="number" name="rent" onChange={this.handleChange} placeholder="0" value={this.state.rent} />
          <br />
        </div>
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