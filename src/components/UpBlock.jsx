import React from "react";
import Counter from "../examples/Counter";
import ClassCounter from "../examples/ClassCounter";
import ChangesInput from "../examples/ChangesInput";

function UpBlock() {

  return (
    <div className='box-upBlock'>
      <Counter />
      <ClassCounter />
      <ChangesInput />
    </div>
  )
}

export default UpBlock;