9. 여러개의 input 상태 관리하기

이번에는 input 이 비어져있을 때 인풋에 대한 설명을 보여주는 placeholder 값도 설정해보겠습니다.
기존에 만들었던 상태는 지워주시고, onChange 와 onReset 함수는 비워주세요.

InputSample.js
import React, { useState } from 'react';

function InputSample() {
  const onChange = (e) => {
  };

  const onReset = () => {
  };


  return (
    <div>
      <input placeholder="이름" />
      <input placeholder="닉네임" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        이름 (닉네임)
      </div>
    </div>
  );
}

export default InputSample;

input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것(코드의 중복을 없애자) 그리고, useState 에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야 합니다.

리액트 상태에서 객체를 수정해야 할 때에는,

```
inputs[name] = value;
```

이런식으로 직접 수정하면 안된다.

그 대신에, 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상태로 사용해주어야 한다.

setInputs({
  ...inputs,
  [name]: value
});
