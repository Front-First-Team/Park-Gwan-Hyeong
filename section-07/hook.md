 훅이란 무엇인가?

 컴포넌트에는 두가지 종류의 컴포넌트가 있다.
 1.함수 컴포넌트 2. 클래스 컴포넌트

 클래스 컴포넌트에서는 생성자에서 state를 정의하고 setState()함수를 통해 state를 업데이트한다.
 함수 컴포넌트는 코드도 간결하고,별도로 state를 정의해서 사용하거나
  컴포넌트의 생명주기에 맞추어 어떠한 코드를 실행되도록 할수 없다.
  하지만 hook을 사용하면 함수컴포넌트도 클래스 컴포넌트의 기능을 모두 동일하게 구현할수 있게 된다.

  Hook이란 갈고리란 뜻으로 
  프로그래밍에서는 원래 존재하는 어떤 기능에 마치 갈고리를 거는것처럼 끼어 들어가 같이 수행되는것을 의미한다.
  리액트의 훅도 마찬가지로 ..? 리액트의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든것이다.

  이러한 훅의 이름은 모두 use로 시작한다.
  -1. useState(가장 대표적이고 많이 사용되는 훅)
      함수 컴포넌트에서는 state라는 것을 제공하지 않기 떄문에 클래스 컴포넌트 처럼 state를 사용하고 싶다면 useState()훅을 사용해야한다.

      ```
      import React,{ useState } from "react";

      function Counter(props){
        var count = 0;
      }
      return(
        <div>
        <p>총 {count}번 클릭했습니다.<p>
        <button onClick ={() => count ++}>
        클릭
        </div>
      );
      ```
      위 코드에는 Counter라는 함수 컴포넌트가 등장한다.
      위 코드처럼 카운트를 함수의 변수로 선언하여 사용하게 되면 버튼 클릭시 카운트값은 증가하겠지만, 재렌더링이 일어나지 않아 새로운 카운트값이 화면에 표시되지 않게된다.
      따라서 이런경우 state를 사용하여 값이 바뀔떄마다 재렌더링 되도록 하기위해 useState()를 사용하여 state를 선언하고 업데이트해야한다.

      useState사용법
      ```
      const[변수명,set함수명] = useState(초기값);

      ```
      useState()를 호출할떄에는 파라미터로 선언할 state의 초깃값이 들어가게된다.
      usestate()를 호출하면 배열이나온다.?
      리턴된 배열에의 첫번째 항목은 state로 선언된 변수이고 두번째 항목은 해당 state의 set함수이다
      
      ```
      import React, { usestate } from "react";

      function Counter(props){
        const[ count, setCount ] = useState(0);

        return (
            <div>
                <p> 총{count}번 클릭했습니다.</p>
                <button onClick={()=> setCount(count + 1)}>
                클릭
                </button>
            <div>
        );
      }
      ```
      위 코드는 useState()를 사용하여 카운트 값을 state로 관리하도록 만든것이다.
      이 코드에서 state의 변수명과 set함수가 각각 count,setCount로 되어있는것을 볼 수 있다.



   

