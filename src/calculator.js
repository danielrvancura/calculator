import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      sum: props.sum
    }
    // {this.handleChange = this.handleChange.bind(this);
    // this.changeBody = this.changeBody.bind(this);}
  }
  render() {
    return (
<div className="container">
  <h1>Add with React!</h1>

  <div className="add">
    <input type="text" />
    <span>+</span>
    <input type="text" />
    <button onclick={this.showSum}> = </button>
    <h3>{this.state.sum}Addition results go here!</h3>
  </div>
</div>
    );
  }
}
export default App;
