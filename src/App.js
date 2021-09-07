import React, { useState } from "react";
import UpBlock from "./components/UpBlock";
import PostList from "./components/PostList";
import LinComponent from "./components/LinComponent";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

import "./stiles/App.css";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Заголовок', content: 'Какой-то интересный текст' },
    { id: 2, title: 'Заголовок', content: 'Какой-то интересный текст' },
    { id: 3, title: 'Заголовок', content: 'Какой-то интересный текст' },
  ]);

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <UpBlock />
      <LinComponent />
      <PostForm create={createPost} />
      <LinComponent />
      <MySelect
      // defaultValue='Сортировка по:'
      />
      {
        posts.length !== 0
          ? <PostList remove={removePost} posts={posts} title='Список постов 1' />
          : <h4 className='non-posts'>Постов нет!</h4>
      }

    </div >
  );
}

export default App;
