const initialState = { date: new Date().toISOString().slice(0, 10), status: "Sunny" };

const WEATHER_STATUS = {
  Sunny: "Sunny",
  Rainy: "Rainy",
  Snowy: "Snowy",
  Cloudy: "Cloudy",
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_WEATHER":
      return { ...state, status: WEATHER_STATUS[action.payload] || "Sunny" };
    default:
      return state;
  }
}

export default weatherReducer;
