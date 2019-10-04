import React, { Component } from 'react';

export class NavBar extends Component {
  style = {
    background: '#167dfa'
  };

  render() {
    return (
      <div style={this.style}>
        <h2 className="navStyle">Item Lister</h2>
      </div>
    );
  }
}

export default NavBar;
