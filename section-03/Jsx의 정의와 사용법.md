
JSX 정의와 역할
(A syntax extention to JavaScript)
 자바스크립트의 확장 문법

 JSX는 자바스크립트와 XML,HTML을 합친것이라 보면된다.
 JSX의 X는 JavaScript and XML의 앞글자를 따서 JSX라고 한다.

# JSX 예제코드
 const element = <h1>Hello, world!</h1>;
 이 코드에는 대입연산자 equal이 나온다.
 대입연산자는 오른쪽에 있는 값을 왼쪽에 있는 변수에 대입해 주는 역할을 한다.
 
 JSX 예제코드 에 대입연산자 equal의 왼쪽에 나오는 자료형 const 와 변수명인
 element는 흔히 사용하는 자바스크립트 문법이다.

 그러나 특이하게 대입연산자= 의 오른쪽에는 html코드가 나오는것을 볼 수 있다


이런 결과로 위 예제코드는 자바스크립트 코드와 html코드가 결합되어있는 JSX코드가 되는것이다

위 코드가 하는 역할은 h1태그로 둘러싸인 '문자열'을 element라는 변수에 저장하는 역할을 한다

# JSX의 역할과 사용 이유
JSX는 내부적으로 XML,HTML 코드를 JavaScript로 변환해주는 과정을 거친다
그러므로 우리가 JSX코드로 코드를 작성하더라도 최종적으로는 JavaScript가 나오게 되는것이다

여기서 'JSX 코드를 JavaScript코드로 변환해주는 것이 React의 createElement라는 함수'입니다.

- createElement의 역할

  -JSX로 짠 코드
       // Hello 라는 이름을 가진 React 컴포넌트
  class Hello extands React.Component {
    render(){
        //JS 코드와 HTML 코드가 결합된 JSX
        return <div>Hello {this.props.toWhat}</div>;
    }
  }
  //컴포넌트 React DOM의 렌더 함수를 사용하여 실제화면에 렌더링
  ReactDOM.render(
    <Hello toWhat='world"/>,
    document.getElementById('root')
  );

  ---------------------------------------------------------

  위 코드를 보면 Hello 라는 이름을 가진 React 컴포넌트가 나오고 컴포넌트 내부에서
  JavaScript 코드와 HTML 코드가 결합된 JSX를 사용하고 있는 것으로 확인된다.
  그리고 이렇게 만들어진 컴포넌트 React DOM의 렌더 함수를 사용하여 실제화면에 렌더링하고있다.

  -------------------------------------------------------

  위 코드와 비교해보자

  밑에 코드는 JSX를 사용하지 않고 순수한 JavaScript 코드만을 사용하여 
  위 JSX를 사용한 코드와 완전히 동일한 역할을 하는 코드이다.

  class Hello extends React.Component{
    render(){
        return React.createElement('div',null,`Hello ${this.props.toWhat}`);
    }
}

ReactDom.render(
    React.createElement(Hello, { toWhat: 'World'}, null),
    document.getElementById('root')
);

두 코드를 비교해보면 Hello 컴포넌트 내부에서 JSX를 사용했던 부분이

<div>Hello {this.props.toWhat}</div>; -----> React.createElement('div',null,`Hello ${this.props.toWhat}`);

React.createElement라는 함수로 대체된것을 확인할수있다.
결국 JSX 문법을 사용하게 되면 React에서는 내부적으로 모두 createElement라는 함수를 사용하도록 변환하게 된다.
그리고 최종적으로 createElement함수를 호출한 결과로 JavaScript객체라 나오게된다.

좀더 쉬운 예제로 확인해보자!

*JSX 사용코드

const element = (
    <h1 className="greeting">
    Hello,world!
    </h1>
)

*JSX 사용하지 않은 코드

const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
)

위 두 코드는 모두 동일한 역할을 합니다.
JSX를 사용한 코드도 내부적으로는 createElement함수를 사용하도록 변환되기 때문입니다.
그리고 createElement 함수 호출의 결과로 아래와 같은 JavaScript객체가 나오게 됩니다.

* React.createElement()의 결과
  const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }

  }

React는 이 객체들을 읽어서 DOM을 만드는데 사용하고 항상 최신 상태로 유지합니다
React에서는 위에 출력된 객체를 element라고 부릅니다.
함수의 이름이 createElement이기에 당연히 element를 생성해서 return해줍니다.

* 그렇다면 createElement 함수의 파라미터로는 어떤것들이 들어갈까??

React.createElement( type,[props],[...children])
이 코드는 createElement함수의 파라미터를 나타낸 예시이다

1. 첫번쨰 파라미터는 엘리먼트의 유형,타입을 나타내줍니다.
이 유형으로는 div나 span같은 html 태그가 올수도 있고 다른 react컴포넌트가 들어올수도 있습니다

2. 두번째 파라미터로는 props가 들어옵니다.props = '속성'

3. 세번쨰 파라미터로는 children이 들어가는데, 여기서 children이란 현재 엘리먼트가 포함하고있는 자식 엘리먼트라고 보면 됩니다.

react는 이런식으로 JSX코드를 모두 createElement함수를 사용하는 코드로 변환합니다.
그래서 react에서 JSX를 사용하는것은 필수는 아닙니다.
이유는 직접 모든 코드를 createElement함수를 사용하여 개발하면 되기때문이다.
하지만 JSX를 사용하였을떄 코드가 더욱 간결해지고 생산성과 가독성이 올라가기 때문에 사용을 권장한다.

--------------------------------------------------------

* JSX의 장점
  1. 코드가 간결해진다
  -ex

  JSX 
  <div> Hello, {name}</div>

  JSX 사용안함
  React.createElement('div',null,`Hello,${name}`);

  JSX를 사용한 코드의 경우 HTML의 DIV 태그를 사용하여 name이라는 변수가 들어간 Hello를 표현합니다
  JSX를 사용하지 않은 코드는 createElement함수를 사용한것 외에 동일한 작업을 수행합니다

  2. 가독성 향상
    가독성이 높을수록 코드상에 존재하는 버그 또한 쉽게 발견할 수 있기 때문이다.

  3. injection Attacks 라는 해킹방법을 방어할수있다


* JSX 의 사용법
 기본적으로 JSX는 자바스크립트 문법을 확장시킨 것이기 떄문에 모든 자바스크립트 문법을 지원하며 여기에 추가로 XML과 HTML을 섞어서 사용하면 됩니다.
 
 ex)

 const name = '관형'
 const element = <h1>안녕,{name}</h1>;

 ReactDOM.render(
  element,
  document.getElementById('root)
 )
 위 코드에서 element를 선언하는 부분의 코드처럼 HTML과 자바스크립트가 섞인 형태로 코드를 작성해 사용하면 된다.
 XML,HTML코드를 사용하다가 중간에 JavaScript 코드를 사용하고 싶으면 중괄호를 써서 묶어주면 됩니다.
 위 코드에서 중괄호로 name을 감싸 JavaScript 변수를 참조하였습니다.

 ex 2)
 
 const element = (
  <h1>
      Hello,{formatUser(user)}
  </h1>
 )

위 코드에서는 html 코드 사이에 괄호를 사용하여 변수가 아닌 formatUser라는 자바스크립트 함수를 호출하는 것을 볼 수 있습니다
이런 식으로 JSX를 사용할떄 xml,html 코드 사이의 중괄호를 사용하여 자바스크립트 변수나 함수를 사용합니다.

- HTML태그 중간이 아닌 태그의 속성에 값을 넣고 싶을 떄에는 어떻게 해야할까?

// 큰따옴표 사이에 문자열을 넣거나
const element = <div tabIndex='0'></div>;
// 중괄호 사이에 자바스크립트 코드를 넣으면 된다!
const element = <img src = {user.avatarUrl}></img>

**JSX에서는 중괄호를 사용하면 무조건 자바스크립트 코드가 들어간다!

- JSX를 사용해서 children을 정의하고싶다면?
  const element = (
    <div>
      <h1>안녕</h1>
      <h2>리액트 </h2>
    </div>
  )
  위 코드처럼 상위 태그가 하위태그를 둘러싸도록 하면 자연스럽게 children이 정의됩니다.
  위 코드에서 div태그의 children은 h1태그와 h2태그가 된다.



