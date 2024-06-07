
6. 조건부 렌더링

    조건부 렌더링이란, 특정 조건에 따라 다른 결과물을 렌더링 하는 것을 의미합니다.
    예를 들어서, App 컴포넌트에서 Hello 컴포넌트를 사용 할 때, isSpecial 이라는 props 를 임의로 설정한다

        import React from 'react';
        import Hello from './Hello';
        import Wrapper from './Wrapper';


        function App() {
        return (
            <Wrapper>
            <Hello name="react" color="red" isSpecial={true}/>
            <Hello color="pink" />
            </Wrapper>
        )
        }

        export default App;

        여기서 isSpecial={true} 의 true는 자바스크립트 값이기 때문에 중괄호로 감싸준다.
        그리고, Hello 컴포넌트에서는 isSpecial 이 true 이냐 false 이냐에 따라서 컴포넌트의 좌측에 * 표시를 삼항연사자를 사용하여 보여준다.
        
        import React from 'react';

        function Hello({ color, name, isSpecial }) {
        return (
            <div style={{ color }}>
            { isSpecial ? <b>*</b> : null }
            안녕하세요 {name}
            </div>
        );
        }

        Hello.defaultProps = {
        name: '이름없음'
        }

        export default Hello;
        { isSpecial ? <b>*</b> : null }안녕하세요 {name} --> isSpecial이 true라면! *안녕하세요를 보여라 true가 아니라면 null값이 나온다

        보통 삼항 연산자를 사용한 조건부 렌더링을 주로 특정 조건에 따라 보여줘야 하는 내용이 다를 때 사용한다.
        지금은 내용이 달라지는게 아니라, 단순히 특정 조건이 true 이면 보여주고, 그렇지 않으면 null값을 반환한다,
        이러한 상황에서는 && 연산자를 사용해서 처리하는 것이 더 간편합니다.   

        { isSpecial ? <b>*</b> : null } ---> {isSpecial && <b>*</b>} 
        isSpecial && <b>*</b> 의 결과는 isSpecial 이 false 일땐 false 이고, isSpecial이 true 일 땐 <b>*</b> 가 된다.



        props 값 설정을 생략 ={true}

        <Hello name="react" color="red" isSpecial /> ---> isSpecial 이름만 넣어주면 isSpecial={true} 와 동일한 의미가된다

            
         