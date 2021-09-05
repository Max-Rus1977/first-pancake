import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function incriment() {
    setCount(count + 1);
  }

  function discriment() {
    setCount(count - 1);
  }

  return (
    <div className='count disp-ilb'>
      <h3>Счётчик на хуках</h3>
      <p className='result'>{count}</p>
      <button onClick={incriment}>Incriment</button>
      <button onClick={discriment}>Dicriment</button>
    </div>
  )
}

export default Counter;

