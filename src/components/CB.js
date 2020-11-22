import React from "react";
import { connect } from "react-redux";

function CB({ todo }) {
  return (
    <div className='CB'>
      <h6>CB</h6>
      {todo.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

export default connect(mapStateToProps)(CB);
