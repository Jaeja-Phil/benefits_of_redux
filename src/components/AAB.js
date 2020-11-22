import React from "react";
import { connect } from "react-redux";

function AAB({ global }) {
  return (
    <div className='AAB'>
      {!global.isLogin ? (
        <div>You are not logged in!</div>
      ) : (
        <div>
          <h6>AAB</h6>
          <div>This component is now visible!</div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    global: state.global,
  };
};

export default connect(mapStateToProps)(AAB);
