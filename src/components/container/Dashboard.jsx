import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div>hello</div>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Dashboard />, wrapper) : false;