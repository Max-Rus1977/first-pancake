import React from "react";
import classes from "./MySelect.module.css";

function MySelect({ options, defaultValue, value, onChange }) {

  return (
    <div className={classes.boxMySelect}>
      <select
        value={value}
        onChange={event => event.target.value}>
        <option disabled={true}>{defaultValue}</option>
        {options.map(option =>
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )}
      </select>
    </div>
  );
};

export default MySelect;