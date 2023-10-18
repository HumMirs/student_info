import "./style.css";
import React, { Component } from "react";

class Items extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="items-container">
        <h1>ID: {this.props.id}</h1>
        <h2>{this.props.name}</h2>
        <p>Position: {this.props.position}</p>
        <p>Department: {this.props.department}</p>
        <p>Salary: {this.props.salary} $</p>
      </div>
    );
  }
}
export default Items;
