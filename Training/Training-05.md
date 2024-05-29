5. props 를 통해 컴포넌트에게 값 전달하기 --> section-05 props참고 // App.js가 화면에 렌더링 되는구나!
   (우리가 어떠한 값을 컴포넌트에게 전달해줘야 할 때, props를 사용합니다.)

    props 의 기본 사용법
    예를 들어서, App 컴포넌트에서 Hello 컴포넌트를 사용 할 때 
    name 이라는 값을 전달해주고 싶다고 가정한다면 밑 코드처럼 코드를 작성하면 된다.
   ```
    function App() {
    return (
        <Hello name="react" 
                introduction="안녕하세요,박관형 입니다."/>      
    );
    }

    export default App;
   ```
   <!--<Hello name="react" />-->  위에 작성된 이코드가  
   Hello 컴포넌트를 사용 할 때 name 이라는 값을 전달해주고 싶다 라고 할떄 작성되는 코드?
   내가 해석하길 Hello 컴포넌트가 사용될떄 name의 값이 문자열 react가 전달된다?라고 해석 하면될까?
   
   이제, Hello 컴포넌트에서 name 값을 사용 하고 싶을 땐 어떻게 하면 되는지 알아보자
   ```
   import React from 'react';

    function Hello(props) {
    return <div>안녕하세요 {props.name}</div>
    }
    export default Hello;
    ```

   컴포넌트에게 전달되는 props 는 파라미터를 통하여 조회 할 수 있습니다. props 는 객체 형태로 전달되며, 만약 name 값을 조회하고 싶다면 props.name 을 조회하면 된다.
   위 두 코드는 APP컴포넌트에서 Hello 컴포넌트를 사용하는데, Hello 컴포넌트에 자바스크립트 객체 형태처럼 name이라는 속성을 넣어준것이다.


   <!--실습중: App컴포넌트 안에 <Hello/>를 쓰면 Hello컴포넌트에 자바스크립트 객체형태로 내가 작성한 porps가 전달되는것이라 했다
      그래서 본래 수업은 <Hello name="react" /> 인데 introduction="안녕하세요,박관형 입니다." 를 추가해줘보았다. 
      두개다 화면에서 보고싶다면 {props.introduction}{props.name} 로 따로따로 키갑과 작들을 작성해줘야한다.접근법에 대한 이해가 부족했던거같다.

      그리고 props의 값을 조회하고자 한다면 파라미터에 eventListner의 event.과 달리 props를 정확히 기재해주어야하는것같다--->
   

   <!---app.js에서 hello를 import 해주었는데 어떻게 Hello.js 파일에서 App.js에서 설정한 name값을 사용할수 있는것일까??->
   
---

   -2 여러개의 props, 비구조화 할당
        Hello 컴포넌트에 또 다른 props를 전달하기 
    ```
        color 라는 값을 설정하기
        function App() {
            return (
                <Hello name="react" color="red"/>
            );
            }
    ```
    이제 Hello 컴포넌트에 내가 위에서 설정한 파라미터에 props를 입력하여 props.color 값을 조회하여 폰트의 색상으로 설정 할 수 있다.
    ```
    import React from 'react';

        function Hello(props) {
        return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
        }

        export default Hello;
    ```
    <!--위 실습을 하다 생긴 의문점이 풀렸다 하지만 style={{}} 중괄호가 두개인 이유는 무엇일까? 중괄호가 두개가 아니면 오류가 난다>

    props 내부의 값을 조회 할 때마다 props. 를 입력하고 있는데
    함수의 파라미터에서 구조 분해 할당 문법을 사용하면 조금 더 코드를 간결하게 작성 할 수 있다.
    ```
    import React from 'react';

    function Hello({ color, name }) {
    return <div style={{ color }}>안녕하세요 {name}</div>
    }

    export default Hello;
    ```

    -3. defaultProps 로 기본값 설정

      컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면
      컴포넌트에 defaultProps 라는 값을 설정하면 된다.

        Hello.defaultProps = {
        name: '이름없음'
        }
        이렇게 지정하게 되면 Hello 자체에 값이 설정되어 <Hello/>만쓰게 되더라도 화면에 출력이 가능하다
        ex)       <Hello name="react" color="red"/>
                  <Hello color="pink"/>
                  위에 App()컴포넌트 안에 설정했던 Hello 컴포넌트의 값을 사용하는 법 과 Hello.defaultProps 를 통해 안에 값을 사용하는 법이 다르다

    - 4. 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐
        children은 컴포넌트 태그 사이의 넣어준 component의 값을 조회할수있도록 해주는 도구?(나만의 정의)

        props.children 을 조회하면 됩니다.
        이번에, props.children 을 사용하는 새로운 컴포넌트를 만들어보겠습니다.
        Wrapper.js 를 src 디렉터리에 만들어보자.

        내부의 내용이 보여지게 하기 위해서는 Wrapper 에서 props.children 을 렌더링해주어야 합니다.
        <!--새로운 Wrapper.js파일을 생성해주었고 Wrapper() 컴포넌트를 생성하여 export해주었다.그 후 App.js 파일에 Wrapper 를 import해주었다.
        그후   <Wrapper>
                <Hello name="react" color="red"/>
                <Hello color="pink"/>
            </Wrapper>
         <Wrapper> 태그로 전에 작성한 Hello 컴포넌트들을 감싸주었다 그러나 브라우저를 확인하면 Hello 컴포넌트들은 보여지지 않는다.
         그래서 내부의 내용(Hello)이 보여지게 하기 위해서는 Wrapper 에서 props.children 을 렌더링해주어야 한다.
         Wrapper파일로 돌아가서
         ```
         function Wrapper({ children }) {
                const style = {
                    border: '2px solid black',
                    padding: '16px',
                };
        ```
        Wrapper 컴포넌트 함수의 파라미터에 children을 작성해주었고

        ```
          return (
            <div style={style}>
            {children}
            </div>
        )
        }
        ```
        반환값의 div테그 내에도 자바스크립트{childre}을 넣어주었다.
        이러면 화면에 보인다
            >
        
        <!--props.children에 대한 이해가 부족하다>
        ??
        * 다시정리
          App.js에서 내가 화면에 보일 태그를 작성해준다 어떻게 감쌀것인지
          Wrapper태그 안에 hello태그가 들어가있다
          그렇다면 Wrapper 컴포넌트 태그 사이에 넣은 값(hello)을 조회하고 싶으면 props.children 을 사용하여야하는데  
          애초에 export할 컴포넌트(Wrapper)에 반환값의 태그안에  {children}으로 그 자리에 들어올것임을 명시..?
          파라미터에는 왜 {children}를 써야하는것인가 생각해보자
          본래는 파라미터에 props가 들어오는 자리이다. 근데 props의 값을 내가 App.js에서 작성한 태그안에 태그인 Hello 컴포넌트를 들이고싶다 
          App.js에서 작성한대로라면 Hello 컴포넌트는 wrapper 의 children이 된다. Wrapper의 파라미터에 children을 넣게 된다면 
          자연적으로 자신의 children인 Hello컴포넌트의 값이 전달되고 그것을 자신의 div태그안에 {children} 이 들어올것임을 명시해준것?
          












   
    