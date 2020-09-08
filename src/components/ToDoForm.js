import React, { Component } from "react";

export default class ToDoForm extends Component {
  // Using the props from Parent Class and storing it in a new state in Child class; Could also be done by using getDerivedStateFromProps method
  state = {
    inputText: "",
    heading: this.props.heading,
    listItems: this.props.listItem,
    count: this.props.count + 1,
    shouldHide: false,
    buttonStatus: "-",
    defaultColor: "default",
    bgColorOptions: ["red", "purple", "green", "default"],
  };

  // static getDerivedStateFromProps(prevProps, prevState) {
  //   return {
  //     listItems: prevProps.listItem,
  //   };
  // }
  userInput(myInput) {
    this.setState({
      inputText: myInput,
    });
  }
  // addNewItem(myInput) {
  //   let newItemArray = this.state.listItems;
  //   newItemArray.push(myInput);

  //   this.setState({
  //     listItem: newItemArray,
  //     inputText: "",
  //   });
  // }
  addNewItem(myInput) {
    this.setState({
      listItems: [...this.state.listItems, myInput],
      inputText: "",
    });
  }
  deleteItem(index) {
    let newItemArray = this.state.listItems;
    newItemArray.splice(index, 1);
    this.setState({
      listItem: newItemArray,
    });
  }
  showHideToDoList(shouldHideValue) {
    if (!shouldHideValue) {
      this.setState({
        shouldHide: true,
        buttonStatus: "+",
      });
    } else {
      this.setState({
        shouldHide: false,
        buttonStatus: "-",
      });
    }
  }
  // isChecked(index) {
  //   if (this.state.listItems[index].isChecked) {
  //     this.setState({
  //       listItems: update(this.state.listItems, {
  //         index: { isChecked: { $set: false } },
  //       }),
  //     });
  //   } else {
  //     this.setState({
  //       listItems: update(this.state.listItems, {
  //         index: { isChecked: { $set: true } },
  //       }),
  //     });
  //   }
  // }
  changeBgColor(bgColor) {
    this.setState({
      defaultColor: bgColor,
    });
  }
  shouldComponentUpdate(props, state) {
    if (state.count === 1) {
      return true;
    }
  }
  componentDidUpdate() {
    console.log("Component did update");
  }
  render() {
    return (
      <div className={`ToDoList bg-${this.state.defaultColor}`}>
        {this.state.bgColorOptions.map((bgColor) => (
          <button
            onClick={() => this.changeBgColor(bgColor)}
            style={{ backgroundColor: `${this.state.bgColor}` }}
            className={`my-bg bg-${bgColor}`}
          >
            {/* {bgColor} */}
          </button>
        ))}

        <div className="ToDoHeader">
          <h2>{this.state.heading}</h2>
          <button onClick={() => this.showHideToDoList(this.state.shouldHide)}>
            <b>{this.state.buttonStatus}</b>
          </button>
        </div>
        <div
          className={
            this.state.shouldHide ? "hiddenToDoContent" : "shownToDoContent"
          }
        >
          <form onSubmit={() => this.addNewItem(this.state.inputText)}>
            <input
              className="inputText"
              placeholder="New Item"
              type="text"
              value={this.state.inputText}
              onChange={(e) => this.userInput(e.target.value)}
              autoFocus
            ></input>
            <button
              className={`addButton ${
                this.state.defaultColor === "purple"
                  ? "bg-red"
                  : this.state.defaultColor === "red"
                  ? "bg-purple"
                  : this.state.defaultColor === "green"
                  ? "bg-default"
                  : "bg-green"
              }`}
              onClick={() => this.addNewItem(this.state.inputText)}
              disabled={!this.state.inputText}
            >
              + ADD
            </button>
          </form>
          <p>{this.state.inputText}</p>
          <ul>
            {this.state.listItems.map((val, index) => (
              <li
                key={index}
                className={this.state.isChecked ? "striked" : "unstriked"}
              >
                {val}
                <input type="checkbox" />
                <button
                  className="removeButton"
                  onClick={() => this.deleteItem(index)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
