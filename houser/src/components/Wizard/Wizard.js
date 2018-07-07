import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
  render() {
    return (
      <div>
        Wizard
      <br />
        <Link to="/">
          <button type="submit">
            Cancel
          </button>
        </Link>
      </div>
    )
  }
}

export default Wizard; 