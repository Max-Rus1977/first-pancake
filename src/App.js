import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import ChangesInput from "./components/ChangesInput";
import PostList from "./components/PostList";
import LinComponent from "./components/LinComponent";
import PostForm from "./components/PostForm";

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
      <Counter />
      <ClassCounter />
      <ChangesInput />
      <LinComponent />
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title='Список постов 1' />
    </div >
  );
}

export default App;
