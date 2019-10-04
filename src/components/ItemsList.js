import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ItemsList extends Component {
  //Set Style for component
  getStyle = () => {
    return {
      padding: '10px',
      paddingRight: '30px',
      paddingLeft: '30px',
      borderBottom: '2px solid #333',
      margin: '2rem auto',
      width: '75%'
    };
  };

  render() {
    const { id, title } = this.props.item;

    return (
      <div id="items" className="items" style={this.getStyle()}>
        <div>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          <p
            className="animated zoomIn"
            style={{
              textDecoration: this.props.item.completed
                ? 'line-through'
                : 'none',
              color: '#1d1d1d'
            }}
          >
            {title}
          </p>
          <p
            style={{
              textDecoration: 'none',
              display: 'inline',
              color: this.props.item.completed ? '#11ad3b' : 'red'
            }}
            className="animated fadeIn delay-1s"
          >
            {this.props.item.completed ? ' Completed' : 'Not Completed'}
          </p>
          <button
            onClick={this.props.delItems.bind(this, id)}
            className="delBtn"
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

ItemsList.propTypes = {
  todos: PropTypes.object
};

export default ItemsList;
