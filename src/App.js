import React, { useEffect, useState } from "react";
import { usePost } from "./hooks/usePost";
import { useFatching } from "./hooks/useFatching";

import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import LinComponent from "./components/LinComponent";
import PostForm from "./components/PostForm";
import MyLoader from "./components/UI/loader/MyLoader";

import "./stiles/App.css";
import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [featchPost, isPostsLoading, postError] = useFatching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  const sortedAndSearchPosts = usePost(posts, filter.sort, filter.query);

  useEffect(() => {
    featchPost();
  }, [])

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

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
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading
        ? <MyLoader />
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список постов 1' />
      }
    </div >
  );
}

export default App;
