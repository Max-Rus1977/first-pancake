import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({ create }) {

  const [postbody, setPostbody] = useState({ title: '', body: '' });

  function addNewPost(event) {
    event.preventDefault();
    if (postbody.title !== '' && postbody.body !== '') {
      const newPost = {
        ...postbody, id: Date.now()
      }
      create(newPost);
      setPostbody({ title: '', body: '' });
    } else {
      alert('Заполните все поля!')
    }
  }


  return (
    <form className='class-form ta-cnter'>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={postbody.title}
        onChange={(event) => setPostbody({ ...postbody, title: event.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Описание поста"
        value={postbody.body}
        onChange={(event) => setPostbody({ ...postbody, body: event.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default PostForm;