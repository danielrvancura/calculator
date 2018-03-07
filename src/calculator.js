import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super();
    this.state = {
    value1: 0,
    value2: 0,
    sum: ''
    }
    // {this.handleChange = this.handleChange.bind(this);
    // this.changeBody = this.changeBody.bind(this);}
  }

handleChange1 = (e) => {
  let newvalue = parseInt(e.target.value)
  this.setState({
    value1: newvalue
  })
}
handleChange2 = (e) => {
  let newvalue = parseInt(e.target.value)
  this.setState({
    value2: newvalue
  })
}

add = (e) => {
  let newvalue = this.state.value1 + this.state.value2
  this.setState({
    sum: newvalue
  })
}

  render() {
    return (
<div className="container">
  <h1>Add with React!</h1>

  <div className="add">
    <input type="text" onChange={this.handleChange1} />
    <span>+</span>
    <input type="text" onChange={this.handleChange2} />
    <button onClick={this.add}> = </button>
    <h3>{this.state.sum}Addition results go here!</h3>
  </div>
</div>
    );
  }
}
export default Calculator;
