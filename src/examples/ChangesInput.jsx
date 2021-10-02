import React, { useState } from "react";

function ChangesInput() {
  const [value, setValue] = useState('введите текст');

  return (
    <div className='box-input-changes mt-20 disp-ilb'>
      <h3>Изменеие ткста через инпут</h3>
      <p className='result'>{value}</p>
      <input
        type="text"
        value={value}
        onChange={(event) => { setValue(event.target.value) }}
      />
    </div>
  )
}

export default ChangesInput;
