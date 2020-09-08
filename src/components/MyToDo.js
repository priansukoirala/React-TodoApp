import React, { Component } from "react";
import ToDoForm from "./ToDoForm";

export default class MyToDo extends Component {
  state = {
    heading: "My",
    listItem: ["My List"],
    count: 0,
  };
  render() {
    return (
      <div>
        {/* <ToDoForm
          heading={this.state.heading}
          inputText={this.state.inputText}
          listItem={this.state.listItem}
          userInput={this.userInput.bind(this)}
          addNewItem={this.addNewItem.bind(this)}
          deleteItem={this.deleteItem.bind(this)}
        /> */}
        <ToDoForm
          heading={this.state.heading}
          listItem={this.state.listItem}
          count={this.state.count}
        />
      </div>
    );
  }
}
