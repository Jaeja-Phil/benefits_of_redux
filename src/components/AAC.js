import React from "react";
import { connect } from "react-redux";

function AAC({ global }) {
  return (
    <div className='AAC'>
      {!global.isLogin ? (
        <div>You are not logged in!</div>
      ) : (
        <div>
          <h6>AAC</h6>
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

export default connect(mapStateToProps)(AAC);
