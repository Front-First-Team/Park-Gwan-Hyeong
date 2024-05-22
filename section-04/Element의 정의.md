
Element란?(요소,성분)
리액트앱을 구성하는 가장 작은 블록들!

React Element는 화면에 보이는 것을 기술한다?
Element가 기술한 내용을 토대로 실제 우리가 화면에서 보게되는 DOM Element가 만들어집니다.

ex)
const element = <h1>Hello, world</h1>
이 코드가 실행될 떄 대입연산자의 오른쪽 부분은 React의 createElement 함수를 사용하여 element를 생성하게 됩니다

*React Element의 생김새
 (React Element는 자바스크립트의 객체 형태로 존재한다. 엘리멘트는 컴포넌트 유형과 속성 및 내부의 모든 자식에 대한 정보를 포함하고 있는 일반적인 자밧트립트 객체이다)
  이 객체는 마음대로 변경할 수 없는 불변성을 가진다.(한번 생성하면 바꿀수 없다)
  
  - 버튼의 코드를 나타내기 위한 엘리먼트
  #1
  {
    type: 'button',
    props: {
        className: 'bg-green'
        children: {
            type: 'b',
            props: {
                children: 'Hello, element'
            }
        }
    }
  }
  단순한 자바스크립트의 객체이다.
  위 코드처럼 타입에 html태그 이름이 문자열로 들어가는 경우 엘리먼트는 해당 태그 이름을 가진 DOM노드를 나타내고 props는 속성에 해당합니다.

---------------------------------------------------

위 엘리먼트가 실제로 렌더링 된다면 밑 코드와 같이 Dom Element가 됩니다.
#2
<button class ='bg-green'>
  <b>
    Hello,element!
  </b>
</button>
만약 엘리먼트 타입의 HTML 태그 이름이 문자열로 들어가는것이 아닌 경우라면?
#3
{
    type: Button,
    props: {
        color: 'green',
        children:'Hello,element!'
    }
}
이 Javascript 코드는 React의 컴포넌트 엘리먼트를 나타낸것입니다
이 또한 일반적인 Javascript 객체입니다.
#2 예시와 한가지 다른점은
타입의 문자열로 된 HTML태그가 아닌 React 컴포넌트의 이름이 들어갔다는 점입니다.
이 처럼 react-element는 Javascript 객체 형태로 존재합니다.

이 객체를 만드는 역할을 하는것이 createElement 함수입니다. 

createElement함수를 호출할 때에는 3가지의 파라미터를 넣는다.

React.createElement(type,[props],[...children])
여기에는 html 태그 이름이 문자열로 들어가거나 또 다른 react 컴포넌트 가 들어가게됩니다.

만약 여기에 html 태그가 아닌 react컴포넌트를 넣으면 어떻게 될까??

모든 react 컴포넌트는 최종적으로 HTML 태그를 사용하게 되어있습니다.
하나의 컴포넌트는 여러개의 자식 컴포넌트를 포함할수 있고 자식 컴포넌트를 모두 분해해보면 결국 HTML 태그가 나오게 되는것이다.

 두번쨰 파라미터의 props = 엘리먼트의 속성
 개발자 도구를 확인하게 되면 html태그안에 여러가지 클래스,스타일같은 속성이 들어가있다.
 이런 속성들을 attribute라고 부른다.

 세번쨰 파라미터로 children이 들어가게됩니다.
 해당 엘리먼트의 자식 엘리먼트들이 이부분에 들어가게됩니다.


 실제 createElement함수가 동작하느 과정을 살펴보자!
  function Button(props) {
    return (
        <button className= {`bg-${props.color`}>
        <b>
            {props.children}
        </b>
        </button>
    )
  }
  function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            <Button color = 'green'>확인</Button>
        </div>
    )
  }
  위 코드는 Button 컴포넌트와 ConfirmDialog 컴포넌트가 있으며
  ConfirmDialog 컴포넌트가 Button 컴포넌트를 포함하고있습니다.

  여기에서 ConfirmDialog 컴포넌트는 어떤 모습일까?

  ------------------------------------------

  type: 'div',
  props: {
    children: [
        {

            type:'p',
            props: {
                children:'내용을 확인하셨다면 확인버튼을 눌러주세요'
            },
            {
                type:Button,
                props:{
                    color:'green',
                    children:'확인'
                }
            }
        }
    ]
  }
여기 첫번째 children은 type이 html 태그 중 하나인 p태그 이기때문에 곧 바로 렌더링이 될수있는 상태이다.
하지만 두번째 children의 타입은 HTML 태그가 아니라 React 컴포넌트의 이름인 버튼입니다. 
이경우에는 React는 버튼 컴포넌트의 엘리먼트를 생성하여 합치게 됩니다.
type: 'div',
props: {
  children: [
      {

          type:'p',
          props: {
              children:'내용을 확인하셨다면 확인버튼을 눌러주세요'
          },
          {
              type:Button,
              props:{
                    className: 'bg-green',
                  children:{
                    type: 'b',
                    props: {
                        children: '확인'
                    }

                  }
              }
          }
      }
  ]
}

컴포넌트 렌더링을 위해 모든 컴포넌트가 createElement함수를 통해 Element로 변환됩니다.

React Element의 특징
    *(immutable)불변성을 가진다
한번 생성된 element는 변하지 않는다
 
엘리먼트 생성후에는 children이나 attribute를 바꿀수 없다?
엘리먼트는 다양한 모습으로 존재할 수 있지만 한번 생성 뒤에는 변경이 불가능 하다는 뜻이다.

그렇다면 화면에 변경된 엘리먼트들을 보여주기 위해서는 어떻게 해야할까?
이런 경우에는 기존의 엘리먼트를 변경하는 것이 아닌 새로운 엘리먼트를 생성하면 됩니다.
새로운 엘리먼트를 만들어서 기존의 엘리먼트와 바꿔치기 하는것을 말한다.

그리고 이를위해서 virtualDom(가상돔)이라는것을 사용한다고 한다.

화면에 새로운 내용을 보여주기 위해서 virtualDom은 
변경된 부분을 계산, 컴퓨트 딥 하고 해당 부분만을 다시 렌더링 한다.

엘리먼트는 불변성을 가지고 있기 때문에 화면에 새로운 내용을 보여주기 위하여
새로은 엘리먼트를 만들어 기존 엘리먼트가 연결되어 있는 부분에 바꿔서 달면 됩니다.

엘리먼트의 불변성의 특징을 잘 기억해두자
실제로 리액트를 사용하여 개발하다보면 상태관리와 더불어 상태가 얼마나 자주 갱신되는지가 성능에 큰 영향을 미칩니다.
이 과정에서 엘리먼트가 새롭게 생성된다는것을 이해하면 좀 더 원리를 잘 이해할수있다.

-------------------------------------------------------------

엘리먼트를 생성한 이후에는 
실제로 화면에 보여주기 위해서는 렌더링이라는 과정을 거쳐야합니다.

엘리먼트 렌더링 방법은?
html코드 예시
ex)
<div id= "root"></div>

위 코드는 모든 리액트 앱에 필수적으로 들어가는 아주 중요한 코드이다.
이 div태그 안에 리액트 엘리먼트들이 렌더링 되며 이것을 '루트 돔노드'라고 합니다
이 div태그 안의 모든것이 리액트 돔에 의해 관리되기 때문입니다.

오직 리액트 만으로 만들어진 모든 웹사이트들은 단 하나의 루트 돔노드를 가지게 됩니다
반면에 기존에 있던 웹사이트에 추가적으로 리액트를 연동하게되면 여러개의 분리된 수많은 루트 돔노드를 가질수도 있습니다.
루트 div에 실제로 리액트 엘리먼트를 렌더링 하기위해서는 밑과 같은 코드를 사용합니다.

const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element,document.getElementById('root'));

이 코드는 먼저 엘리먼트를 하나 생성하고 생성된 엘리먼트를 루트Div에 렌더링하는 코드입니다.
렌더링을 위해 리액트 돔에 랜더라는 함수를 사용하게 됩니다.
이 함수는 첫번째 파라미터인 React 엘리먼트를 두번쨰 파라미터인 HTML 엘리먼트,즉DOM엘리먼트에 렌더링하는 역할을 합니다.

*** React 엘리먼트와 DOM 엘리먼트는 다른 개념이다!***

React엘리먼트는 React의 virtualDom에 존재하는것이고 DOM엘리먼트는 실제 브라우저의 DOM에 존재하는 것입니다.

결국 React엘리먼트가 렌더링 되는 과정은 virtualDom에서 실제 DOM으로 이동하는과정이라할수있다.

*렌더링된 Element를 업데이트하기 위해서는?

리액트 엘리먼트의 중요한 특징중 하나는 바로 불변성이다.
엘리먼트는 한번 생성되면 바꿀수없기 때문에 엘리먼트를 업데이트하기위해서는 다시 생성해야합니다.

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

위 tick함수는 현재 시간을 포함하고 있는 엘리먼트를 생성하여 root.div에 렌더링하는 역할을 합니다.

이 코드의 실행결과는 매초 화면에 새로운 시간이 나오게된다.
*내부적으로 tick함수가 호출될떄마다 기존 엘리먼트를 변경하는것이 아니라 새로운 엘리먼트를 생성하여 바꿔치기 하는것이다.

-매초 새로운 엘리먼트가 생성되어 기존 엘리먼트와 교체되며 내용이 변경된다.




    








