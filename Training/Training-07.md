7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기

지금까지 우리가 리액트 컴포넌트를 만들 때는, 동적인 부분이 하나도 없었습니다. 값이 바뀌는 일이 없었다.
이번에는 컴포넌트에서 보여줘야 하는 내용이 사용자 인터랙션에 따라 바뀌어야 할 때 어떻게 구현할 수 있는지에 대하여 알아보자

-1. HOOK -> usestate 
리액트 16.8 에서 Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 '상태'를 관리할 수 있게 되었다. 
이번에는 useState 라는 함수를 사용해보게 되는데, 이게 바로 리액트의 Hooks 중 하나입니다.

src 디렉터리에 Counter.js 생성

    function Counter() {
    const onIncrease = () => {
        console.log('+1')
    }
    const onDecrease = () => {
        console.log('-1');
    }
    return (
        <div>
        <h1>0</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        </div>
    );
    }
    여기서 onIncrease 와 onDecrease 는 화살표 함수를 사용하여 구현을 해주었는데,
    함수를 만들고, button 의 onClick 으로 각 함수를 연결해주었다. 리액트에서 엘리먼트에 이벤트를 설정해줄때에는 **on이벤트이름={실행하고싶은함수}** 형태로 설정해주어야 한다.
    여기서 주의하셔야 하는 점은, 함수형태를 넣어주어야 하지, 함수를 다음과 같이 실행하시면 안됩니다.
    ```
    onClick={onIncrease()}
    ```
    이렇게 하면 렌더링되는 시점에서 함수가 호출되버리기 때문입니다. 이벤트를 설정할때에는 함수 타입의 값 ->(그냥함수이름?)을 넣어주어야 한다는 것, 주의
    함수형태를 넣어주어야 하지, 함수를 다음과 같이 실행하시면 안됩니다.

-  이벤트 설정
    이제, Counter 에서 버튼이 클릭되는 이벤트가 발생 했을 때, 특정 함수가 호출되도록 설정을 해보겠습니다.

        import React from 'react';

        function Counter() {
        const onIncrease = () => {
            console.log('+1')
        }
        const onDecrease = () => {
            console.log('-1');
        }
        return (
            <div>
            <h1>0</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            </div>
        );
        }

        export default Counter;


        



