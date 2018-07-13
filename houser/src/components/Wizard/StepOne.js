import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepOneBuilder } from '../../ducks/reducer'

class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  render() {
    const { stepOneBuilder } = this.props;
    return (
      <div>
        <p>Property Name</p>
        <input className="input-line" type="text" name="name" onChange={this.handleChange} />
        <br />
        <p>Address</p>
        <input className="input-line" type="text" name="address" onChange={this.handleChange} />
        <br />
        <p>City</p>
        <input className="input-line" type="text" name="city" onChange={this.handleChange} />
        <p>State</p>
        <input
          className="input-line" type="text" name="state" onChange={this.handleChange} maxLength="2" />
        <br />
        <p>Zip</p>
        <input className="input-line" type="number" name="zip" onChange={this.handleChange} placeholder="0" />
        <br />
        <Link to="/wizard/step2">
          <button type="submit"
            className="step-button"
            onClick={() => stepOneBuilder(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)}
          >
            Next Step
            </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  address: state.address,
  city: state.city,
  state: state.state,
  zip: state.zip,
});

export default connect(mapStateToProps, { stepOneBuilder })(StepOne); 