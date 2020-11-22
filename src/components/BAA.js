import React, { Component } from "react";
import { connect } from "react-redux";

class BAA extends Component {
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
    this.props.changeWeather(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div className='BAA'>
        <h6>BAA</h6>
        <span>change weather</span>
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
    changeWeather: (weather) => dispatch({ type: "CHANGE_WEATHER", payload: weather }),
  };
};

export default connect(null, mapDispatchToProps)(BAA);
