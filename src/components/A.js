import React from "react";

import AA from "./AA";
import AB from "./AB";

export default function A() {
  return (
    <div className='A'>
      <h3>A</h3>
      <div className='a-container'>
        <AA />
        <AB />
      </div>
    </div>
  );
}
