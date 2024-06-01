8. input 상태 관리하기
이번에는 리액트에서 사용자가 입력 할 수 있는 input 태그의 상태를 관리하는 방법

- input 파일 생성
InputSample.js
import React from 'react';

function InputSample() {
  return (
    <div>
      <input />
      <button>초기화</button>
      <div>
        <b>값: </b>
      </div>
    </div>
  );
}

export default InputSample;

밑 컴포넌트를 App 에서 렌더링

App.js
import React from 'react';
import InputSample from './InputSample';

function App() {
  return (
    <InputSample />
  );
}

export default App;

input 에 입력하는 값이 하단에 나타나게 하고, 초기화 버튼을 누르면 input 이 값이 비워지도록 구현 해보자
이번에도, useState 를 사용하고 이번에는 input 의 onChange 라는 이벤트를 사용한다.

이벤트에 등록하는 함수에서는 이벤트 객체 e 를 파라미터로 받아와서 사용 할 수 있는데 이 객체의 e.target 은 이벤트가 발생한 DOM 인 input DOM 을 가리킨다.
이 DOM 의 value 값, 즉 e.target.value 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있다.
input 의 상태를 관리할 때에는 input 태그의 value 값도 설정해주는 것이 중요하다. 그렇게 해야, 상태가 바뀌었을때 input 의 내용도 업데이트 된다.
