import React, { Component } from "react";
import { connect } from "react-redux";

class AAA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.enterHandler = this.enterHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({ text: e.target.value });
  }

  enterHandler(e) {
    const key = e.keyCode;
    if (key !== 13) {
      return;
    }
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div className='AAA'>
        <h6>AAA</h6>
        <span>Add todo </span>
        <input
          type='text'
          value={this.state.text}
          onChange={this.inputHandler}
          onKeyDown={this.enterHandler}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch({ type: "ADD_TODO", payload: todo }),
  };
};

export default connect(null, mapDispatchToProps)(AAA);
