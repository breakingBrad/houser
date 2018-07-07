import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      img: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  render() {
    return (
      <div>
        <p>Image URL</p>
        <input className="input-line" type="text" name="img" onChange={this.handleChange} />
        <br />
        <Link to="/wizard/step1">
          <button type="submit"
            className="step-button"
          >
            Previous Step
            </button>
        </Link>
        <Link to="/wizard/step3">
          <button type="submit"
            className="step-button"
          >
            Next Step
            </button>
        </Link>
      </div>
    )
  }
}

export default StepTwo; 