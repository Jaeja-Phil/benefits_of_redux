import React from "react";
import { connect } from "react-redux";

function AB({ changeLoginStatus }) {
  return (
    <div className='AB'>
      <h3>AB</h3>
      <button onClick={changeLoginStatus}>Change Login Status</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLoginStatus: () => dispatch({ type: "CHANGE_LOGIN_STATUS" }),
  };
};

export default connect(null, mapDispatchToProps)(AB);
