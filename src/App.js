import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Java Script', body: 'Description' },
        { id: 2, title: 'Java Script 2', body: 'Description' },
        { id: 3, title: 'Java Script 3', body: 'Description' },
    ]);

  return (
    <div className="App">
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
