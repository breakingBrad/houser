import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepOneBuilder } from '../../ducks/reducer'

class StepOne extends Component {
  constructor(props) {
    super(props);
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

  componentWillMount() {
    this.setState({
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
    })
  }

  render() {
    const { stepOneBuilder } = this.props;
    return (
      <div>
        <p>Property Name</p>
        <input className="input-line" type="text" name="name" onChange={this.handleChange} value={this.state.name} />
        <br />
        <p>Address</p>
        <input className="input-line" type="text" name="address" onChange={this.handleChange} value={this.state.address} />
        <br />
        <p>City</p>
        <input className="input-line" type="text" name="city" onChange={this.handleChange} value={this.state.city} />
        <p>State</p>
        <input
          className="input-line" type="text" name="state" onChange={this.handleChange} maxLength="2" value={this.state.state} />
        <br />
        <p>Zip</p>
        <input className="input-line" type="number" name="zip" onChange={this.handleChange} placeholder="0" value={this.state.zip} />
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