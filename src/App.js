import React, { Component } from 'react';
import uuid from 'uuid';
import Items from './components/Items';
import NavBar from './components/NavBar';
import AddItem from './components/AddItem';

class App extends Component {
  //Set State to Local Storage or empty array if nothing is in Local Storage
  state = {
    items: JSON.parse(window.localStorage.getItem('savedItems')) || []
  };

  //Ensure that when a user leaves the component the current state is saved in Local Storage
  componentWillUnmount() {
    window.localStorage.setItem('savedItems', JSON.stringify(this.state.items));
  }

  //Mark Items as complete and update Local Storage
  markComplete = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
    window.localStorage.setItem('savedItems', JSON.stringify(this.state.items));
  };

  //Add new item and save it to Local Storage
  addItem = title => {
    if (title !== '') {
      const newItem = {
        id: uuid.v4(),
        title,
        completed: false
      };

      this.setState({ items: [...this.state.items, newItem] }, () =>
        window.localStorage.setItem(
          'savedItems',
          JSON.stringify(this.state.items)
        )
      );
    }
  };

  //Delete item and reset Local Storage
  delItems = id => {
    this.setState(
      {
        items: [...this.state.items.filter(item => item.id !== id)]
      },
      () =>
        window.localStorage.setItem(
          'savedItems',
          JSON.stringify(this.state.items)
        )
    );
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <AddItem addItem={this.addItem} />
        <Items
          items={this.state.items}
          markComplete={this.markComplete}
          delItems={this.delItems}
        />
      </div>
    );
  }
}

export default App;
