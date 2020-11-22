import React from "react";
import { connect } from "react-redux";

function CA({ weather }) {
  return (
    <div className='CA'>
      <h6>CA</h6>
      <div>
        {weather.date}'s weather is {weather.status}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(CA);
