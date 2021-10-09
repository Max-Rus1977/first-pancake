import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, title, remove }) {

  if (!posts.length) {
    return (
      <h4 className='non-posts'>Посты не найдены!</h4>
    )
  }

  return (
    <div>
      <h2 className='title-posts'>{title}</h2>
      {posts.map((post, index) =>
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} />)}
    </div>
  )
}

export default PostList;