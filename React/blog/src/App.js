import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // 자료를 잠
  let [글제목1, b] = useState(['남자 코트 추천', '여자 코트 추천', '강남 우동 맛집']);
  // let [logo, setLogo] = useState('ReactBlog');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <p style={{color: 'blue', fontWeight: 'Bold'}}>{post}</p>
      <div className="list">
        <h4>{글제목1[0]}</h4>
        <p>2024년 08월 29일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목1[1]}</h4>
        <p>2024년 08월 29일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목1[2]}</h4>
        <p>2024년 08월 29일 발행</p>
      </div>
    </div>
  );
}

export default App;
