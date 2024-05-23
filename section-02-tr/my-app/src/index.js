
// 내가 만듣 컴포넌트를 실제 화면에 렌더링 하기위해 index.js 파일을 수정해야한다


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import문을 사용하여 방금 만든 라이브러리 컴포넌트를 가져온 뒤
// react돔을 사용하여 root-dom노드에 랜더링하도록 하는 코드이다.
import Clock from './chapter_04/Clock';

setInterval(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <Clock/>
    </React.StrictMode>,
    document.getElementById('root')
  );
},1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


