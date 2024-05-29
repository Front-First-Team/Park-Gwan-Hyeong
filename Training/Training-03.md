3. 나의 첫번째 리액트 컴포넌트

02에서 생성된 리액트 디렉토리train에 
src 디렉터리에 Hello.js 라는 파일을 작성해보자.


- Hello.js

import React from 'react';

function Hello() {
  return <div>안녕하세요</div>
}

export default Hello;

리액트 컴포넌트를 만들 땐

import React from 'react';      -----> 라액트를 사용할때 처음에 꼭 사용해야하는것 ??
를 통하여 리액트를 불러와주어야 합니다.

코드의 최하단
export default Hello;          ------> 방금 생성한 Hello 라는 컴포넌트를 내보내겠다는 의미

-------------------------------


이제, index.js 를 열어보세요.

이런 코드가 보일 것입니다.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

여기서 const root = ReactDOM.createRoot(document.getElementById('root'));root.render 의 역할은 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠다는 것을 의미합니다.
id 가 root 인 DOM 을 선택하고 있는데, 이 DOM 이 어디있는지 볼까요?
public/index.html 을 열어보시면 내부에

<div id="root"></div>
을 찾아보실 수 있습니다.

결국, 리액트 컴포넌트가 렌더링 될 때에는, 렌더링된 결과물이 위 div 내부에 렌더링되는 것 입니다.
(id root div 안에 생성된다는 말?) --> 그럼 결국 index.html이 내가 보이는 화면이다?

