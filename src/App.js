import React, { useState } from "react";
import UpBlock from "./components/UpBlock";
import PostList from "./components/PostList";
import LinComponent from "./components/LinComponent";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

import "./stiles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Заголовок первого поста', body: 'Какой-то интересный текст' },
    { id: 2, title: 'Заголовок второго', body: 'Произвольный текст' },
    { id: 3, title: 'Третий заголовок', body: 'Супер интересный пост' },
  ]);

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [selectetSort, setSelectetSort] = useState('');

  function sortPosts(sort) {
    setSelectetSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))

  }

  return (
    <div className="App">
      <UpBlock />
      <PostForm create={createPost} />
      <LinComponent />
      <MySelect
        value={selectetSort}
        onChange={sortPosts}
        defaultValue='Сщртитровка по :'
        options={[
          { value: 'title', name: 'По заголовку' },
          { value: 'body', name: 'По описанию' },
        ]}
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
