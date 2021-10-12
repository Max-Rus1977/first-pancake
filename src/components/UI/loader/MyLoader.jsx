import React from "react";
import cl from "./MyLoader.module.css";

function MyLoader() {
  return (
    <div className={cl.boxLoader}>
      <h2>Идёт загрузка
        <div className={cl.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
      </h2>
      <div className={cl.loader}></div>
    </div>
  )
}

export default MyLoader;