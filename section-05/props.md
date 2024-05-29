 **props{react component의 속성(입력)}**

 components = 틀
 porps = 재료
 element = 결과물
  
  위에서 붕어빵에 비유하자면 붕어빵에 들어가는 재료를 의미한다.
  같은 react component 라는 틀에서 나오기때문에 모양은 같지만 속은 색깔,재료가 모두 다를수있다
  이처럼 props는 같은 react components에서 눈에 보이는 글자나 색깔등의 속성을 바꾸는 components의 재료라 생각하면 된다.

  **props는 컴포넌트에 전달할 다양항 정보를 담고 있는 자바스크립트의 객체이다**
  
  property - 재산/속성
  리액트 컴포넌트의 속성



props의 특징

-Read only : 읽기 전용
 읽을수만 있다 = 값을 변경할 수 없다

 props의 값은 react component가 엘리먼트를 생성하기 위해 사용하는 값이다.
 그런데 이 값들이 엘리먼트를 생성하는 도중 갑자기 바뀌어 버리면 제대로 된 엘리먼트 생성이 불가하다.

 그렇다면 다른 props의 값으로 엘리먼트를 생성하려면 어떻게 해야할까?
 새로운 값을 component에 전달하여 새로 엘리먼트를 생성하면 된다.
 이 과정에서 엘리먼트가 다시 렌더링된다.

 -자바스크립트 함수의 속성 짚고 넘어가기!-

 1.순수한 함수 - pure 함수

 function sum(a, b){
    return a + b;
 }
 위 sum이라는 이름을 가진 함수는 a 와 b라는 두개의 파라미터를 받아서 그 둘의 합을 리턴하는 함수이다.
 이 함수에서는 a와 b라는 파라미터의 값을 변경하지 않고 있다.

 그리고 a와 b라는 파라미터 집합의 값이 같은 경우에는 항상 같은 값을 리턴할것이다.
 이런 함수를 pure하다고 한다. 함수가 순수하다는 뜻으로 입력값을 변경하지 않으며
 같은 입력값에 대해서 항상 같은 출력값을 리턴한다는 의미이다.

 2.순수하지 않은 함수 - impure함수

 function withdraw(account, amount) {
    account.total -= amount;
 }

 withdraw라는 함수는 
 account와 amount라는 파라미터를 받아서 account의 total이라는 값에서 amount를 빼는 함수이다.
 쉽게 생각하면 계좌에서 출금하는 함수인데 은행 계좌 정보와 총액을 파라미터로 받아서 
 계좌의 현재 총 잔액을 나타내는 토탈에서 출금할 금액인 amount를 빼는것이다.

여기서, withdraw 함수는 입력으로 받는 파라미터의 account의 값을 변경했다.

pure함수와 impure함수를 설명한 이유는!

React componet의 정의와 관련이 되어있기 떄문이다.

All React components must act like pure functions with respect to thier props.
모든 리액트 컴포넌트는 그들의 props에 관하여 pure함수 같은 역할을 해야 한다.
------------------
모든 React components 는 props를 직접 바꿀수없고, 같은 props에 대해서는 항상 같은 값을 보여줄것,

React components 와 javascript함수가 같은 개념이다.
그렇기 때문에 React componets의 입력으로 들어오는 props는 javascript함수의 파라미터와 같다.

함수가 순수(pure)하다는것은 함수의 입력값인 파라미터를 바꿀수없다는 의미를 포함하고 있기 때문에 
* React Component에서는 props를 바꿀수 없다는 의미가 된다.

그리고 pure 함수는 같은 입력값에 대하여 항상 같은 결과를 보여줘야 하기 떄문에 
React Components 관점에서 같은 props에 대하여 항상 같은 결과를 보여줘야 한다는 의미가 된다.
여기서 말하는 결과는 React element가 된다.

---------------------

- 정리 
  React componets의 props는 바꿀수없고, 같은 props가 들어오면 항상 같은 엘리먼트를 리턴해야한다.
  (props의 값은 react component가 엘리먼트를 생성하기 위해 사용하는 값)

---------------------

* props의 사용법은?
  props = 컴포넌트에 전달할 다양한 정보를 담고있는 자바스크립트 객체

  components에 props라는 객체를 전달하기 위해서는 어떻게 해야할까?

  ex)JSX를 사용하는 경우

   function App(props){
    return (
        <Profile 
            name="박관형"
            introduction="안녕하세요,박관형 입니다."
            viewCount={1500}
        />
    );
   }
1. 위 코드와 같이 키와 값으로 이루어진 키값상의 형태로 컴포넌트에 props를 넣을수있다.
   이 코드에서는 app컴포넌트가 나오고 그안에 profile 컴포넌트를 사용하고있다.
   그리고 profile컴포넌트에 name,inroduce,viewCount라는 3가지 속성들을 넣어주었다.
   여기서 체크 할것은 각 속성에 값을 넣을때 중괄호를 사용하는 것과 사용하지않은것의 차이이다.
   
   name과 introduction에 들어간 문자열은 중괄호를 사용하지 않았고 viewcount에 들어간 정수는 중괄호를 사용했다.
   **JSX 중괄호{}를 사용하면 무조건 javascript코드가 들어간다.**

   **그래서 마찬가지로 props에 값을 넣을떄도 문자열 이외에 정수,변수 그리고 다른 컴포넌트 등이 들어간 경우에는 중괄호를 사용해 감싸주어야한다.**
   (문자열도 중괄호로 감싸도 상관은 없다.)
    
    --> 이렇게 하면 이 속성의 값들이 모두 프로필 컴포넌트의 props로 전달되며 
        props는 밑과 같은 형태의 ***자바스크립트 객체가 됩니다.**
        {
            name:"박관형",
            introduction:"안녕하세요,박관형 입니다.",
            viewCount:1500,
        }


  - ?? props의 중괄호를 사용해서 props의 값으로 컴포넌트도 넣을수있다.
    이렇게 하면 레이아웃 컴포넌트의 props로는 정수 값을 가진 width,heigh 와 엘리먼트(요소)로 header, footer가 들어오게 됩니다.

    <!-- function App(props){
        return (
            <Layout
                width={2560}
                height={1440}
                header={
                    <Header title = "관형의 블로그. "/>
                }
                footer={
                    <Footer />
                }
            />
        );
    }  -->

    이처럼 JSX를 사용하는 경우에는 간단하게 컴포넌트에 props를 넣을수있다.
    -
    그렇다면 JSX를 사용하지 않은 경우에는 어떻게 props를 넣을수있을까? 
    Create Element 함수
    ex) Create Element 함수의 형태
    React.createElement(
        type,
        [props],
        [...children]
    )
    위 Create Element함수의 두번쨰 파라미터가 props이다.
    여기에 자바스크립트 객체를 넣으면 그게 곧 해당 컴포넌트의 props가 된다.

    -
    JSX를 사용하지않고 코드를 작성하게 된다면

     React.createElement(
        profile,
        {
             name:"박관형",
            introduction:"안녕하세요,박관형 입니다.",
            viewCount:1500
        },
        null
    );

    type에는 컴포넌트의 이름인 propfile이 들어가고 props로 Javascript 객체가 들어갔습니다.
    null이 들어간 이유는 하위컴포넌트가 없기 떄문에 Children 에 null이 들어간것이다. 












 










 