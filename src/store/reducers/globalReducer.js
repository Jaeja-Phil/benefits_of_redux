const initialState = {
  isLogin: false,
  theme: "white",
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    // TODO: define what your action.type would do here
    case "CHANGE_LOGIN_STATUS":
      return { ...state, isLogin: !state.isLogin };
    default:
      return state;
  }
}

export default globalReducer;
