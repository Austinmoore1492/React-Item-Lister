import React, { Component } from 'react';
import ItemsList from './ItemsList';
import PropTypes from 'prop-types';

class Items extends Component {
  render() {
    return this.props.items.map(item => (
      <ItemsList
        key={item.id}
        item={item}
        markComplete={this.props.markComplete}
        delItems={this.props.delItems}
      />
    ));
  }
}

Items.propTypes = {
  items: PropTypes.array.isRequired
};
export default Items;
