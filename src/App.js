import React, { useMemo, useState } from "react";

import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import LinComponent from "./components/LinComponent";
import PostForm from "./components/PostForm";

import "./stiles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Заголовок первого поста', body: 'Какой-то интересный текст' },
    { id: 2, title: 'Заголовок второго', body: 'Произвольный текст' },
    { id: 3, title: 'Третий заголовок', body: 'Супер интересный пост' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const sortedPost = useMemo(() => {

    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  //
  return (
    <div className="App">
      <MyButton
        onClick={() => setModal(true)}
      >Создать пост</MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}

      >
        <PostForm create={createPost} />
      </MyModal>
      <LinComponent />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список постов 1' />
    </div >
  );
}

export default App;
