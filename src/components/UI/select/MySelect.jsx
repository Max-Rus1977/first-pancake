import React from "react";
import classes from "./MySelect.module.css";

function MySelect({ options, defaultValue }) {

  return (
    <div className={classes.boxMySelect}>
      <select>
        <option disabled={true} value=''>{defaultValue}</option>

        {/* {options.map(option =>
          <option value={option.value}>
            {option.name}
          </option>
        )} */}

      </select>
    </div>
  )
}

export default MySelect;