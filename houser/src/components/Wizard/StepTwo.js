import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepTwoBuilder } from '../../ducks/reducer'

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  componentWillMount() {
    this.setState({
      img: this.props.img
    })
  }

  render() {
    const { stepTwoBuilder } = this.props;
    return (
      <div>
        <div className="input-container">
          <p>Image URL</p>
          <input className="input-line" type="text" name="img" onChange={this.handleChange} value={this.state.img} />
          <br />
        </div>
        <Link to="/wizard/step1">
          <button type="submit"
            className="step-button"
          >
            Previous Step
            </button>
        </Link>
        <br /><br />
        <Link to="/wizard/step3">
          <button type="submit"
            className="step-button"
            onClick={() => stepTwoBuilder(this.state.img)}
          >
            Next Step
            </button>
        </Link>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  img: state.img,
});

export default connect(mapStateToProps, { stepTwoBuilder })(StepTwo); 