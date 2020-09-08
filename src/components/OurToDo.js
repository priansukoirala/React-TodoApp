import React, { Component } from "react";
import ToDoForm from "./ToDoForm";

export default class OurToDo extends Component {
  state = {
    heading: "Our",
    // listItem: ["Our List"],
    listItem: ["Our Todo"],
    count: 0,
  };
  render() {
    return (
      <div>
        <ToDoForm
          heading={this.state.heading}
          listItem={this.state.listItem}
          count={this.state.count}
        />
      </div>
    );
  }
}
