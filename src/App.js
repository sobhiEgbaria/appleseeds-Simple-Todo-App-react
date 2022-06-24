import React, { Component } from "react";
import ToDoItems from "./Components/todoItems/Todotems.js";
import AddItem from "./Components/addItems/AddItems.js";

class APP extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    items: [
      { id: 1, name: "gogo", age: 20 },
      { id: 2, name: "lolo", age: 22 },
      { id: 3, name: "sobhi", age: 23 },
    ],
  };

  addItem = (item) => {
    item.id = Math.random();
    const items = this.state.items;
    items.push(item);
    this.setState({ items: items });
  };

  deleteItem = (id) => {
    const items = this.state.items.filter((item) => {
      return !(item.id === id);
    });
    this.setState({ items: items });
  };

  render() {
    return (
      <>
        <div className="appContainer">
          <h1 className="heder">Todo List</h1>
          <ToDoItems items={this.state.items} deleteItem={this.deleteItem} />
          <AddItem addItem={this.addItem} />
        </div>
      </>
    );
  }
}

export default APP;
