import React, { Component } from 'react';

class Greeting extends Component {
  render() {
   
    return <h1>Thank You {this.props.role}!</h1>;
  }
}
export default Greeting

