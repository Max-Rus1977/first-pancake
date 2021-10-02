import React from "react";
import MyButton from "./UI/button/MyButton";

function PostItem(props) {
  return (
    <div className="post-item">
      <div className="box-content">
        <h4>{props.number} {props.post.title}</h4>
        <p>{props.post.body}</p>
      </div>
      <div className="box-btn">
        <MyButton onClick={() => props.remove(props.post)}>
          удалить
        </MyButton>
      </div>
    </div>
  )
}

export default PostItem;