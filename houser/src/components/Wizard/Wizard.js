import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancel } from '../../ducks/reducer'

class Wizard extends Component {

  render() {
    const { cancel } = this.props;
    return (
      <div>
        <div className="wizard-container">
          <div className="wizard-header">
            <h2>Add New Listing</h2>
            <Link to="/">
              <button className="cancel-button" onClick={() => cancel()}>
                Cancel
              </button>
            </Link>
          </div>
          <Switch>
            <Route path="/wizard/step1" component={StepOne} />
            <Route path="/wizard/step2" component={StepTwo} />
            <Route path="/wizard/step3" component={StepThree} />
          </Switch>
        </div>
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
  img: state.img,
  mortgage: state.mortgage,
  rent: state.rent,
});

export default connect(mapStateToProps, { cancel })(Wizard); 