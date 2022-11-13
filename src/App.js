import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Java Script', body: 'Description' },
        { id: 2, title: 'Java Script 2', body: 'Description' },
        { id: 3, title: 'Java Script 3', body: 'Description' },
    ]);

  return (
    <div className="App">
        <form action="">
            <input type="text" placeholder="Название поста"/>
            <input type="text" placeholder="Описание поста"/>
            <MyButton>Создать пост</MyButton>
        </form>
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
