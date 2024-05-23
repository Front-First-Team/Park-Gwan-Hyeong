
react component는 크게 클레스 컴포넌트와 함수 컴포넌트로 나뉜다.

- 함수 컴포넌트
  (모든 React 컴포넌트는 pure함수와 같은 역할을 해야한다) => React 컴포넌트를 일종을 함수라고 생각한다는 뜻

  ex)
  function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
  }
위 Welcome이라는 이름을 가진 함수는 하나의 props객체를 받아서 인사가담긴 React element를 리턴하기 떄문에 React 컴포넌트라 할수있다.
그리고 이렇게 생긴것을 함수컴포넌트라 부른다.

함수 컴포넌트는 이처럼 간단한 코드를 장점으로 가진다고 할 수 있습니다.

- class컴포넌트
  (Javascript Es6의 class라는 것을 사용해서 만들어진 형태의 컴포넌트이다.)

  ex)
  class Welcome extands React.Component {
    render(){
        return <h1> 안녕, {this.props.name}</h1>;
    }
  }
  위 코드는 위의 함수 컴포넌트 Welcom과 동일한 역할을 하는 컴포넌트를 클래스 형태로 만든것이다.
  함수 컴포넌트와의 가장 큰 차이점은 React의 모든 클래스 컴포넌트는 React.Component라는 클래스를 상속받아서 만든것이다.
  상속! 이라는것은 객체지향 프로그래밍의 개념으로 한 클래스의 변수들과 함수들을 상속받아 새로운 자식 클래스를 만드는 방법이다.

  여기에서는 React.Component라는 클래스를 상속받아서 Welcom 이라는 클래스를 만들었고 
  이는 React.Component를 상속받았기 때문에 결과적으로 React컴포넌트가 되는 것이다.


