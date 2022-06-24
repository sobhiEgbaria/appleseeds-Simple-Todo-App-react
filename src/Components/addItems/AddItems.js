import React, { Component } from "react";
import "./AddItems.css";

class AddItem extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    age: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: [e.target.value] });
    console.log(this.state.id);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.name.value || !e.target.age.value) {
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({ name: "", age: "" });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="addItemsInputs">
          <input
            className="textInput"
            type="text"
            placeholder="Enter a name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            className="ageInput"
            type="number"
            placeholder="Enter a age"
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="ADD" className="submitInput" />
        </form>
      </>
    );
  }
}

export default AddItem;
