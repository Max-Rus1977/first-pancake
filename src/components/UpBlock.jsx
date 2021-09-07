import React from "react";
import Counter from "./Counter";
import ClassCounter from "./ClassCounter";
import ChangesInput from "./ChangesInput";

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