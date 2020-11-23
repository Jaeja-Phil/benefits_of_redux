import React, { Component } from "react";
import { connect } from "react-redux";

class BAA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.enterHandler = this.enterHandler.bind(this);
  }

  enterHandler(e) {
    console.log(e.target.value)
    this.props.changeTheme(e.target.value);
  }

  render() {
    return (
      <div className='BAA'>
        <h6>BAA</h6>
        <span>change theme</span>
        <div>
          <label>
            <input type="radio" name="theme" value="light" onChange={this.enterHandler}></input>
          light
        </label>
        </div>
        <div>
          <label>
            <input type="radio" name="theme" value="dark" onChange={this.enterHandler}></input>
          dark
        </label>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (theme) => dispatch({ type: "CHANGE_THEME", payload: theme }),
  };
};

export default connect(null, mapDispatchToProps)(BAA);
