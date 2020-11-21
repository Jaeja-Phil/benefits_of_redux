const initialState = { date: new Date().toISOString().slice(0, 10), status: "" };

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    // TODO: define what your action.type would do here
    default:
      return state;
  }
}

export default weatherReducer;
