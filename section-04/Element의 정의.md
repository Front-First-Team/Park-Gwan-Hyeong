
//내가 이해한것 - (section2~3)
( 자바스크립트의 확장 문법인 JSX 코드를 React의 createElement() 함수가 JSX 코드를 자바스크립트로 변환해주며 element(React element)를 생성하게 된다. 이렇게 생성된 React Element는 자바스크립트의 객체 형태로 존재하고 실제 렌더링 하게 된다면 Dom Element가 되어 실제 우리가 보는 화면에 나타난다.)

Element란?(요소,성분)
리액트앱을 구성하는 가장 작은 블록들!

React Element는 화면에 보이는 것을 기술한다
Element가 기술한 내용을 토대로 실제 우리가 화면에서 보게되는 DOM Element가 만들어진다.

ex) 
const element = <h1>Hello, world</h1>
이 코드가 실행될 떄 대입연산자의 오른쪽 부분은 React의 createElement() 함수를 사용하여 element를 생성하게 됩니다
이렇게 생성되는것이 리액트 엘리먼트이다.

*React Element의 생김새
 (React Element는 자바스크립트의 객체 형태로 존재한다. 
 엘리멘트는 컴포넌트 유형(ex:button)과 속성(ex:color) 및 내부의 모든 자식에 대한 정보를 포함하고 있는 일반적인 자바스크립트 객체이다)
  이 객체는 마음대로 변경할 수 없는 불변성을 가진다.(한번 생성하면 바꿀수 없다)
  
  - 버튼의 코드를 나타내기 위한 엘리먼트
  #1
  (virtual Dom?)
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
  위 코드처럼 type에 html태그 이름이 문자열로 들어가는 경우 엘리먼트는 해당 태그 이름을 가진 
  DOM노드?를 나타내고 props는 속성에 해당합니다.

---------------------------------------------------

위 엘리먼트가 실제로 렌더링 된다면 밑 코드와 같이 Dom Element가 됩니다.
#2
<button class ='bg-green'>
  <b>
    Hello,element!
  </b>
</button>
만약 엘리먼트 타입에 HTML 태그 이름이 문자열로 들어가는 것이 아닌 경우라면?
#3
{
    type: Button,
    props: {
        color: 'green',
        children:'Hello,element!'
    }
}
이 Javascript 코드는 React의 컴포넌트 Element를 나타낸것이다.
이 또한 일반적인 Javascript 객체입니다.
#1 예시와 한가지 다른점은
타입의 문자열로 된 HTML태그가 아닌 React 컴포넌트의 이름이 들어갔다는 것이다.

**이 처럼 react-element는 Javascript 객체 형태로 존재한다.**

이 객체를 만드는 역할을 하는것이 createElement() 함수이다. 
createElement함수를 호출할 때에는 3가지의 파라미터를 넣는다.

React.createElement(type,[props],[...children])
척번째 파라미터에는 type이 들어간다.
html 태그 이름이 문자열로 들어가거나 또 다른 react 컴포넌트 가 들어가게됩니다.

만약 여기에 html 태그가 아닌 react컴포넌트를 넣으면 어떻게 될까?? ----> react컴포넌트를 넣더라도 결국 html태그가 나온다

(모든 react 컴포넌트는 최종적으로 HTML 태그를 사용하게 되어있다.
하나의 컴포넌트는 여러개의 자식 컴포넌트를 포함할 수 있고 자식 컴포넌트를 모두 분해해보면 결국 HTML 태그가 나오게 되는것이다.)


 두번쨰 파라미터의 props = 엘리먼트의 속성
 개발자 도구를 확인하게 되면 html태그안에 여러가지 클래스,스타일같은 속성이 들어가있다.
 이런 속성들을 attribute라고 부른다. props는 attribute보다 상위 개념으로 Element의 속성으로 이해하자.

 세번쨰 파라미터로 children이 들어가게된다.
 해당 엘리먼트의 자식 엘리먼트들이 이부분에 들어가게됩니다.

 실제 createElement함수가 동작하는 과정을 살펴보자!
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
  ConfirmDialog 컴포넌트가 Button 컴포넌트를 포함하고있다.

  여기에서 ConfirmDialog 컴포넌트의 Element의 모습을 살펴보자

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
하지만 두번째 children의 타입은 HTML 태그가 아니라 React 컴포넌트의 이름인 버튼이다. 
이경우에는 React는 버튼 컴포넌트의 엘리먼트를 생성하여 합치게 된다.

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

                type:Button,                                   type:Button,
                props:{                                          props:{
                    color:'green',          ------>                     className: 'bg-green',
                    children:'확인'                                      children:{
                }                                                       type: 'b',
                                                                        props: {
                                                                                children: '확인'
                                                                        }

**컴포넌트 렌더링을 위해 모든 컴포넌트가 createElement함수를 통해 Element로 변환된다.**


    








