import React from "react";
import cl from "./MyModal.module.css";

function MyModal({ children, visible, setVisible }) {

  const rootClasses = [cl.boxModal];

  if (visible) {
    rootClasses.push(cl.activ)
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
    >
      <div
        className={cl.modal}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default MyModal;