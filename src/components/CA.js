import React from "react";
import { connect } from "react-redux";

function CA({ theme }) {
  return (
    <div className='CA'>
      <h6>CA</h6>
      <div>
        app theme is {theme.status}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps)(CA);
