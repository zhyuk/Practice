import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // 자료를 잠시 저장할 때 사용
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 공부']);
  // let [logo, setLogo] = useState('ReactBlog');
  let [좋아요, 좋아요변경] = useState(0);

  function 함수(index) {
    // console.log(1);
    좋아요변경(좋아요 + 1);
  }

  function textChange() {
    // console.log(글제목[0]);
    let arr = [1, 2, 3];
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    console.log(copy == 글제목); // 어디서든 항상 같다고 출력될 것임.(array 객체는 주소값을 담아두기 때문에 값을 변경해도 동일한 주소값을 가지기 때문에.)
    글제목변경(copy);
  }


  function 글정렬() {
    let copy = [...글제목];
    // console.log(copy);
    copy.sort();
    // console.log(copy);
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <p style={{ color: 'blue', fontWeight: 'Bold' }}>{post}</p>
      <div className="list" key={0}>
        <h4>{글제목[0]} <span onClick={함수}>👍</span> {좋아요} </h4>
        <p>2024년 08월 29일 발행</p>
      </div>
      <div className="list" key={1}>
        <h4>{글제목[1]}</h4>
        <p>2024년 08월 29일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2024년 08월 29일 발행</p>
      </div>
      <button onClick={textChange}>글 변경</button>
      <button onClick={글정렬}>가나다순 정렬</button>

      {/* <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}

      {/* <Modal></Modal> */}
      <Modal/>

    </div>
  );
}

function Modal() {
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

export default App;
