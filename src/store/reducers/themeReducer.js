const initialState = { status: "light" };

const THEME_STATUS = {
  light: "light",
  dark: "dark",
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, status: THEME_STATUS[action.payload] || "light" };
    default:
      return state;
  }
}

export default themeReducer;
