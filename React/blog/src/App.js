import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집'; // 서버에서 가져온 데이터라고 가정
  // document.querySelector('h4').innerHTML = post;  -> JS 내에서 post 변수의 값을 넣을 때 작성하는 코드

  return (
    <div className="App">
      <div className='nav'>
        <h4 style={{color : 'red', fontSize: '16px'}}>BLOG</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
