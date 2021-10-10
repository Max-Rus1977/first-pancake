import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>

    </div>
  )
}

export default PostList;