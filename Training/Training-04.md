4. JSX의 기본 규칙 알아보기

JSX 는 리액트에서 생김새를 정의할 때, 사용하는 문법이다. 
얼핏보면 HTML 같이 생겼지만 실제로는 JavaScript 입니다.

return <div>안녕하세요</div>;
리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel 이 JSX 를 JavaScript 로 변환을 해줍니다.

어떻게 변환되는지 예시를 봐보자

JSX 가 
JavaScript 로 변환이 되려면 지켜주어야 하는 몇가지 규칙

-1 꼭 닫혀야 하는 태그
    
    ex)import React from 'react';
        import Hello from './Hello';

            function App() {
        return (
            <div>
            <Hello />
            <Hello />
            <Hello />
            <div>
            </div>
        );
        }

    export default App; 

    위 코드의 문제점을 파악해보자  --> 태그를 열었으면 꼭, <div></div> 태그를 닫아주어야 한다.

    태그와 태그 사이에 내용이 들어가지 않을 때에는, Self Closing 태그 라는 것을 사용해야 합니다
    <br> X  <br/> O
    <input> X <input/> O

-2 꼭 감싸져야하는 태그(두가 이상의 태그는 무조건 하나의 태그로 감싸져있어야 한다.)

    ex)
        import React from 'react';                                           import React from 'react';
        import Hello from './Hello';                                         import Hello from './Hello';

        function App() {                                                      function App() {
        return (                                                                return (
            <Hello />                              ------->                         <div>
            <div>안녕히계세요.</div>                                                         <Hello />
        );                                                                                <div>안녕히계세요</div>
        }                                                                           </div>
                                                                                     );
        export default App;                                                          }
                                                                                     export default App;


    하지만, 이렇게 단순히 감싸기 위하여 불필요한 div 로 감싸는게 별로 좋지 않다. 
     "리액트의 Fragment" 라는 것을 사용하면 된다.

    - Fragment  <div> </div> (x)   <> </> (o)

                import React from 'react';
            import Hello from './Hello';

            function App() {
            return (
                <>
                <Hello />
                <div>안녕히계세요</div>
                </>
            );
            }

            export default App;

        태그를 작성 할 때 이름 없이 작성을 하게 되면 Fragment 가 만들어지는데, Fragment 는 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않는다.


-3 JSX 안에 자바스크립트 값 사용하기
    JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감싸서 보여줘야한다.

      return (
            <>
            <Hello />
            <div>{name}</div>
            </>
        );

        style 과 className
        JSX 에서 태그에 style 과 CSS class 를 설정하는 방법 인라인 스타일은 객체 형태로 작성을 해야 하며,
        background-color 처럼 - 로 구분되어 있는 이름들은 backgroundColor 처럼 camelCase 형태로 네이밍 해줘야한다.
           
            import React from 'react';
                import Hello from './Hello';
 
                function App() {
                const name = 'react';
                const style = {
                    backgroundColor: 'black',
                    color: 'aqua',
                    fontSize: 24, // 기본 단위 px
                    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
                }

                return (
                    <>
                    <Hello />
                    <div style={style}>{name}</div>
                    </>
                );
                }

                export default App;

                
            



           
       

        
        
            
           
            
            
       
      

       