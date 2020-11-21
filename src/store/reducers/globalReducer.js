const initialState = {
  isLogin: false,
  theme: "white",
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    // TODO: define what your action.type would do here
    default:
      return state;
  }
}

export default globalReducer;
