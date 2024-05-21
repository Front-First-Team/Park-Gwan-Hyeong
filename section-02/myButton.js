// function MyButton(props) {
//     const [ isClicked, setIsClicked ] = React.useState(false);

//     return React.createElement(
//         'button',
//         { onclick : () => setIsClicked(true) },
//         isClicked ? 'Clicked' : 'Click here!'
//     )
// }
// const domContainer = document.querySelector('#root');
// ReactDOM.render(React.createElement(MyButton), domContainer);

function Mybutton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}//리액트의 함수 컴포넌트

// render 함수를 사용하여 리액트 컴포넌트를 돔 컨테이너에 렌더링하는 코드
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Mybutton), domContainer);

// class Hello extends React.Component{
//     render(){
//         return React.createElement('div',null,`Hello ${this.props.toWhat}`);
//     }
// }

// ReactDom.render(
//     React.createElement(Hello, { toWhat: 'World'}, null),
//     document.getElementById('root')
// );