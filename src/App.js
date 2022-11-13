import React, { useState } from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Java Script', body: 'Description' },
    { id: 2, title: 'Java Script 2', body: 'Description' },
    { id: 3, title: 'Java Script 3', body: 'Description' },
  ]);

  return (
    <div className="App">
      <h1>Список постов</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
