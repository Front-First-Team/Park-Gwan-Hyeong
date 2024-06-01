10. useRef 로 특정 DOM 선택하기
JavaScript 를 사용 할 때에는,
 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById, querySelector 같은 DOM Selector 함수를 사용해서 DOM 을 선택한다.

리액트를 에서도 DOM 을 직접 선택해야 하는 상황이 발생 한다. 
그럴 땐, 리액트에서 ref 라는 것을 사용합니다.

함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef 라는 Hook 함수를 사용합니다. 
클래스형 컴포넌트에서는 콜백 함수를 사용하거나 React.createRef 라는 함수를 사용하는데,

우리가 만든 InputSample 에서는 초기화 버튼을 누르면 포커스가 초기화 버튼에 그대로 남아있게 된다.
한번, 초기화 버튼을 클릭했을 때 이름 input 에 포커스가 잡히도록 useRef 를 사용하여 기능을 구현해보자.


