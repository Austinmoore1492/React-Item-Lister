import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

export class ItemsList extends Component {
  //Set Style for component
  getStyle = () => {
    return {
      padding: '10px',
      paddingRight: '30px',
      paddingLeft: '30px',
      borderBottom: '2px solid #333',
      margin: '2rem auto',
      width: '80%'
    };
  };

  render() {
    const { id, title, created, finished } = this.props.item;

    return (
      <div
        className={this.props.item.deleted ? 'animated zoomOut' : 'items'}
        style={this.getStyle()}
      >
        <div>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            disabled={this.props.item.completed}
          />
          <p
            className="animated rotateInDownRight"
            style={{
              paddingBottom: '0.5rem',
              textDecoration: this.props.item.completed
                ? 'line-through'
                : 'none',
              color: '#1d1d1d'
            }}
          >
            {title}
          </p>
          {this.props.item.created && (
            <p
              className="animated fadeIn delay-1s"
              style={{
                paddingBottom: '0.5rem'
              }}
            >
              Assigned: <Moment format="MM/DD/YYYY">{created}</Moment> at{' '}
              <Moment format="HH:mm">{created}</Moment>
            </p>
          )}
          {this.props.item.finished && (
            <p
              className="animated fadeIn"
              style={{
                paddingBottom: '0.5rem'
              }}
            >
              Finished: <Moment format="MM/DD/YYYY">{finished}</Moment> at{' '}
              <Moment format="HH:mm">{finished}</Moment>
            </p>
          )}

          <p
            style={{
              textDecoration: 'none',
              display: 'inline',
              color: this.props.item.completed ? '#11ad3b' : 'red'
            }}
            className="animated fadeIn delay-1s"
          >
            {this.props.item.completed ? 'Completed' : 'Not Completed'}
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
