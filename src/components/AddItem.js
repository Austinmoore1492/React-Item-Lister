import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddItem extends Component {
  state = {
    title: ''
  };

  //Create New Item and reset title to empty string
  onSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({
      title: ''
    });
  };

  //Set State with value in input box, allows for more complex form submissions
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          display: 'block',
          textAlign: 'center',
          marginTop: '1rem'
        }}
      >
        <input
          type="text"
          name="title"
          className="inputForm"
          placeholder="Add An Item ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          disabled={!this.state.title}
        />
      </form>
    );
  }
}

AddItem.propTypes = {
  addItem: PropTypes.func
};

export default AddItem;
