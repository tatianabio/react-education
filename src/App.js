import React, { useState } from 'react';
import './styles/App.scss';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Java Script', body: 'Description' },
    { id: 2, title: 'Java Script 2', body: 'Description' },
    { id: 3, title: 'Java Script 3', body: 'Description' },
  ]);

  const [title, setTitle] = useState('');
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div className="App">
      <form action="">
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Посты про JS'} />
    </div>
  );
}

export default App;
