
컴포넌트를 만든후 렌더링 하려면?
컴포넌트는 화면에 보이는 엘리멘트들을 찍어서 화면에 엘리먼트를 보여주는 역할을 하는것이다
렌더링을 위해선 컴포넌트로부터 엘리멘트를 만들어야한다.


  from.component.만들기 - ex)

   ex) #1 DOM 태그를 사용하여 엘리멘트를 만듬(HTML div 태그로 인식)
           const element = <div/>;

        #2 Welcome이라는 React component로 인식 (사용자가 정의한 Welcome이라는 component를 사용한 Element이다)
           const element = <Welcome name="인제" />;

    위의 두줄 코드는 모두 리액트 엘리먼트를 만들어내게된다. 그럼 이렇게 만들어진 엘리멘트들을 렌더링하면 되는것이다.

    ---------------------실제 렌더링 코드 예제

    function Welcome(props){
        return <h1>안녕, {props.name}</h1>;
    }
    const element = <Welcome name= '관형'/>;
    ReactDom.render(
        element,
        document.getElementById('root')
    );

    <질문!!----------->
     
     function Welcome(props){
        return <h1>안녕, {props.name}</h1>;
     }

     const element = <Welcome name = '인제'/>;
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(element);

     위 코드는 먼저 Welcome이라는 함수 컴포넌트를 선언합니다. 그리고 Welcome name = '인제'/> 라는 값을 가진 엘리먼트를 피라미터로 전달해서 
     root Dom Node의 render()를 호출한다.
     그 결과 리액트는 Welcom 컴포넌트에 {name : '인제'}라는 props를 넣어서 호출하고 그 결과로 리액트 엘리먼트를 생성한다.
     이렇게 생성된 엘리먼트는 최종적으로 React Dom을 통해 실제 DOM에 업데이트 되며 브라우저를 통해 볼수있게된다.

        