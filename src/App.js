import "./App.css";

import { connect } from "react-redux";

import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

function App({ test }) {
  return (
    <div className='App'>
      <h1>App</h1>
      <div className='app-container'>
        <A />
        <B />
        <C />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    test: state.global,
  };
};

export default connect(mapStateToProps)(App);
