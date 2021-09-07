import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({ create }) {

  const [postContent, setPostContent] = useState({ title: '', content: '' });

  function addNewPost(event) {
    event.preventDefault();
    const newPost = {
      ...postContent, id: Date.now()
    }
    create(newPost);
    //setPosts([...posts, { ...postContent, id: Date.now() }]);
    setPostContent({ title: '', content: '' });
  }

  return (
    <form className='class-form ta-cnter'>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={postContent.title}
        onChange={(event) => setPostContent({ ...postContent, title: event.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Описание поста"
        value={postContent.content}
        onChange={(event) => setPostContent({ ...postContent, content: event.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default PostForm;