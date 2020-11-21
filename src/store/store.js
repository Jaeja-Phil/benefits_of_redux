import { combineReducers, createStore } from "redux";

import globalReducer from "./reducers/globalReducer";
import todoReducer from "./reducers/todoReducer";
import weatherReducer from "./reducers/weatherReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  weather: weatherReducer,
  global: globalReducer,
});

export default createStore(rootReducer);
