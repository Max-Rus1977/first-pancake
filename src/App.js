import React, { useState } from "react";
import { usePost } from "./components/hooks/usePost";

import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import LinComponent from "./components/LinComponent";
import PostForm from "./components/PostForm";

import "./stiles/App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const sortedAndSearchPosts = usePost(posts, filter.sort, filter.query);

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
