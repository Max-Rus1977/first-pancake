import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import ChangesInput from "./components/ChangesInput";
import PostList from "./components/PostList";

import "./stiles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Заголовок', content: 'Какой-то интересный текст' },
    { id: 2, title: 'Заголовок', content: 'Какой-то интересный текст' },
    { id: 3, title: 'Заголовок', content: 'Какой-то интересный текст' },
  ]);

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <ChangesInput />
      <form>
        <input type="text" placeholder="Название поста" />
        <input type="text" placeholder="Описание поста" />
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title='Список постов 1' />
    </div >
  );
}

export default App;
