import React from "react";

function PostItem(props) {
  return (
    <div className="post-item">
      <div className="box-content">
        <h4>{props.post.id} {props.post.title}</h4>
        <p>{props.post.content}</p>
      </div>
      <div className="box-btn">
        <button>удалить</button>
      </div>
    </div>
  )
}

export default PostItem;