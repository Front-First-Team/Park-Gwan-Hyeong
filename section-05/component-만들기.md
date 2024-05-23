
react component는
크게 클레스 컴포넌트와 함수 컴포넌트로 나뉜다.

- 함수 컴포넌트
  (모든 React 컴포넌트는 pure함수와 같은 역할을 해야한다) => React 컴포넌트를 일종을 함수라고 생각한다는 뜻

  ex)
  function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
  }
위 Welcome이라는 이름을 가진 함수는 하나의 props객체를 받아서 인사가담긴 React element를 리턴하기 떄문에 React 컴포넌트라 할수있다.
그리고 이렇게 생긴것을 함수 컴포넌트라 부른다.

함수 컴포넌트는 이처럼 간단한 코드를 장점으로 가진다고 할 수 있다.

- class컴포넌트
  (Javascript Es6의 class라는 것을 사용해서 만들어진 형태의 컴포넌트이다.)

  ex)
  class Welcome extands React.Component {
    render(){
        return <h1> 안녕, {this.props.name}</h1>;
    }
  }
  위 코드는 위의 함수 컴포넌트 Welcom과 동일한 역할을 하는 컴포넌트를 클래스 형태로 만든것이다.
  
  **----이해가 어려운 부분!<질문>----**

  함수 컴포넌트와의 가장 큰 차이점은 React의 모든 클래스 컴포넌트는 React.Component라는 클래스를 상속받아서 만든것이다.
  /?? // 그럼 클래스 컴포넌트를 만들려면 React.Component 를 꼭 붙이는건가?
  상속! 이라는것은 객체지향 프로그래밍의 개념으로 한 클래스의 변수들과 함수들을 상속받아 새로운 자식 클래스를 만드는 방법이다.

  여기에서는 React.Component라는 클래스를 상속받아서 Welcom 이라는 클래스를 만들었고
   // React.Component라는 클래스를 상속받았다는건 React.Component 에 값이 따로 존재한다는것?

  이는 React.Component를 상속받았기 때문에 결과적으로 React컴포넌트가 되는 것이다. 
  // 위에 동일한 작업을 수행하는 함수 컴포넌트에는 React.Componet가 존재하지않는다. class형태로 만들기 위한 도구?

  --------------------------

  Component 이름 짓기
  - Component의 이름은 항상 대문자로 시작해야한다.
    (왜냐하면 react는 소문자로 시작하는 component를 DOM태그로 인식하기 때문이다.)

    ex)
    <div>,<span> --> 'div','span' --> React.createElement()
    <div>,<span> 과 같이 사용하는것은 문자열 형태로 React.createElement()에 전달된다.

    대문자로 시작한다면 ex) <Foo /> ----> React.createElement(Foo)의 형태로 컴파일되며 
                       사용자가 정의했거나 import한 컴포넌트를 가리킨다.

    ex) #1 DOM 태그를 사용하여 엘리멘트를 만듬(HTML div 태그로 인식)
           const element = <div/>;
           - Dom 태그들은 위와 같이 div,h1,span등 모두 소문자로 시작한다.

        #2 Welcome이라는 React component로 인식 (사용자가 정의한 Welcome이라는 component를 사용한 Element이다)
           const element = <Welcome name="인제" />;

        만약 componenet의 이름이 소문자로 시작하여 welcome이 되었다면, 리액트는 이것을 Dom 태그로 인식하게 된다.
        
         




