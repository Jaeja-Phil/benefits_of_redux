import "./App.css";

import { connect } from "react-redux";

import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

function App({ test }) {
  console.log(test);
  return (
    <div className='App'>
      <A />
      <B />
      <C />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    test: state.global,
  };
};

export default connect(mapStateToProps)(App);
