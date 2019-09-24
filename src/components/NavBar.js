import React, { Component } from "react";

export class NavBar extends Component {
  style = {
    background: "#167dfa"
  };

  navStyle = {
    margin: "auto",
    width: "80%",
    color: "#f1f1f1",
    padding: "0.5rem"
  };

  render() {
    return (
      <div style={this.style}>
        <h2 style={this.navStyle}>Item Lister</h2>
      </div>
    );
  }
}

export default NavBar;
