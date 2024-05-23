
컴포넌트 합성은 여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는것이다.
(리액트는 컴포넌트 안에 또 다른 컴포넌트를 사용할수 있기 때문에, 복잡한 화면을 여러개의 컴포넌트로 나눠서 구현 해볼수 있다.)

- Welcome 컴포넌트를 사용해서 컴포넌트 합성을 하는 예제
<!----질문-
  1. App의 각각 props의 값이 다르다/ 하지만 Welcome함수 컴포넌트의 중괄호 안에 App컴포넌트가 포함되어있지 않은데
  (App이라는 컴포넌트는 Welcome 컴포넌트 세개를 포함하고 있는 컴포넌트가 되는것이다.) 라고 설명해준다 ??
   App함수 컴포넌트의 포함된 값을 Welcome이 받을수있는 경로가 있는것일까?어디..?
   아 App컴포넌트의 div태그안의 Welcome 컴포넌트가 있는것을 확인할수있다!!
   
  그리고 밑에 함수 컴포넌트를 호출해주는 render() 의 소괄호 안의 <App/> 은 <App>이 아니다. 다른 이유가 있을까?
-->

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}
function App(props){
    return(
        <div>
            <Welcome name= "Mike">
            <Welcome name= "Steve">
            <Welcome name= "Jane">
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

위 코드는 props의 값을 다르게 해서 Welcome 컴포넌트를 여러번 사용하는 것을 볼 수 있다.
이렇게 하면 App이라는 컴포넌트는 Welcome 컴포넌트 세개를 포함하고 있는 컴포넌트가 되는것이다.
이렇게 여러개의 컴포넌트를 합쳐서 또다른 컴포넌트를 만드는것을 컴포넌트 합성이라한다.


---- component 추출 ----


