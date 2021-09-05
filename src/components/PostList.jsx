import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, title }) {
  return (
    <div>
      <h2 className='title-posts'>{title}</h2>
      {posts.map(post =>
        <PostItem post={post} key={post.id} />)}
    </div>
  )
}

export default PostList;