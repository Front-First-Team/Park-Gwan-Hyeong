
엘리먼트를 생성한 이후에는 
실제로 화면에 보여주기 위해서는 렌더링이라는 과정을 거쳐야한다.

**Root Dom node**

엘리먼트 렌더링 방법은?
html코드 예시
ex)
<div id= "root"></div>

위 코드는 모든 리액트 앱에 필수적으로 들어가는 중요한 코드이다.
**이 root id를 가진 div태그 안에 리액트 엘리먼트들이 렌더링 되며 이것을 '루트 돔노드'라고 한다**
        (이 div태그 안의 모든것이 리액트 돔에 의해 관리되기 때문이다.)

오직 리액트 만으로 만들어진 모든 웹사이트들은 단 하나의 루트 돔노드를 가지게 되지만
기존에 있던 웹사이트에 추가적으로 리액트를 연동하게되면 여러개의 분리된 수많은 루트 돔노드를 가질수도 있다.
루트 div에 실제로 리액트 엘리먼트를 렌더링 하기 위해서는 밑과 같은 코드를 사용해야한다.

????????
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element,document.getElementById('root'));

이 코드는 먼저 엘리먼트를 하나 생성하고 생성된 엘리먼트를 root Div에 렌더링하는 코드이다.

렌더링을 위해 ReactDOM의 createRoot()함수를 사용하여 만든 root의 render()함수를 사용하게 됩니다.
이 함수는 첫번째 파라미터인 React 엘리먼트를 두번쨰 파라미터인 HTML 엘리먼트,즉 DOM 엘리먼트에 렌더링하는 역할을 합니다.

?????????

*** React 엘리먼트와 DOM 엘리먼트는 다른 개념이다!***

React엘리먼트는 React의 virtualDom에 존재하는 것이고 DOM엘리먼트는 실제 브라우저의 DOM에 존재하는 것입니다.

결국 React 엘리먼트가 렌더링 되는 과정은 virtualDom에서 실제 DOM으로 이동하는 과정이라 할 수 있다.

*렌더링된 Element를 업데이트하기 위해서는?

리액트 엘리먼트의 중요한 특징 중 하나는 바로 불변성이다.
엘리먼트는 한번 생성되면 바꿀 수 없기 때문에 엘리먼트를 업데이트하기 위해서는 다시 생성해야 합니다.

* tick 예제코드

  function tick(){
    const element = (
        <div>
            <h1>안녕,리액트!</h1>
            <h2>현재 시각: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element,document.getElementById('root'));

  };
  setInterval(tick,1000);

(??root div 가 뭐지??)위에 명시한 html코드?
위 tick함수는 현재 시간을 포함하고 있는 엘리먼트를 생성하여 root div에 렌더링하는 역할을 한다.

이 코드의 실행결과는 매초 화면에 새로운 시간이 나오게된다.
*내부적으로 tick함수가 호출될떄마다 기존 엘리먼트를 변경하는것이 아니라 새로운 엘리먼트를 생성하여 바꿔치기 하는것이다.

-매초 새로운 엘리먼트가 생성되어 기존 엘리먼트와 교체되며 내용이 변경된다.



