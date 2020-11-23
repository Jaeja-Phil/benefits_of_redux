import { combineReducers, createStore } from "redux";

import globalReducer from "./reducers/globalReducer";
import todoReducer from "./reducers/todoReducer";
import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
  global: globalReducer,
});

export default createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
