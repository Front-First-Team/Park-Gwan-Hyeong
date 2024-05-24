
컴포넌트 합성은 여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는것이다.
(리액트는 컴포넌트 안에 또 다른 컴포넌트를 사용할수 있기 때문에, 복잡한 화면을 여러개의 컴포넌트로 나눠서 구현 해볼수 있다.)

- Welcome 컴포넌트를 사용해서 컴포넌트 합성을 하는 예제
<!----질문-
  1. App의 각각 props의 값이 다르다/ 하지만 Welcome함수 컴포넌트의 중괄호 안에 App컴포넌트가 포함되어있지 않은데
  (App이라는 컴포넌트는 Welcome 컴포넌트 세개를 포함하고 있는 컴포넌트가 되는것이다.) 라고 설명해준다 ??
   App함수 컴포넌트의 포함된 값을 Welcome이 받을수있는 경로가 있는것일까?어디..?
   아 App컴포넌트의 div태그안의 Welcome 컴포넌트가 있는것을 확인할수있다!!
   
  그리고 밑에 함수 컴포넌트를 호출해주는 render() 의 소괄호 안의 <App/> 은 <App>이 아니다. 다른 이유가 있을까?
-->

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}
function App(props){
    return(
        <div>
            <Welcome name= "Mike">
            <Welcome name= "Steve">
            <Welcome name= "Jane">
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

위 코드는 props의 값을 다르게 해서 Welcome 컴포넌트를 여러번 사용하는 것을 볼 수 있다.
이렇게 하면 App이라는 컴포넌트는 Welcome 컴포넌트 세개를 포함하고 있는 컴포넌트가 되는것이다.
이렇게 여러개의 컴포넌트를 합쳐서 또다른 컴포넌트를 만드는것을 컴포넌트 합성이라한다.


---- component 추출 ----
      재사용성 up!
    (컴포넌트가 작아질수록 해당 컴포넌트의 기능과 목적이 명확해진다.)

컴포넌트 합성과 반대로 복잡한 컴포넌트를 쪼개서 여러개의 컴포넌트로 나눌수도있다. = 컴포넌트 추출
**큰 컴포넌트에서 일부를 추출하여 새로운 컴포넌트를 만든다!**

--컴포넌트 추출 과정--

function Comment(props){
    return(
        <div classNamen = "comment">
            <div classNamen = "user-info">
                <img classNamen = "avater"
                    src = {props.author.avatarUrl}
                    alt = {props.author.name}
                
                />
                <div classname = "user-info-name">
                    {props.author.name}
                </div>
            </div>

            <div className = "comment-text">
                {props.text}
            <div/>

            <div className = 'comment-date'>
                {formatDate(props.date)}
            </div>

        </div>
        
    );
}

위에 Comment라는 컴포넌트를 하나 확인해보자.
이 컴포넌트는 댓글을 표시하기위한 컴포넌트로 
내부에 작성자의 프로필 이미지,이름,댓글 내용/작성일을 포함하고있다.
Comment컴포넌트에서 하나씩 추출해보자

- 1.Avatar 추출
 <img> 태그를 사용하여 사용자의 프로필 이미지를 표시하는 부분을 추출하여 별도의 Avatar 컴포넌트를 만들어보자

 function Avatar(props) {
    return(
        <img calssName="avatar"
            src = {props.user.avatarUr}
            alt = {props.user.name}

        />
    );
 }
위 모습이 추출된 Avartar 컴포넌트이다.
 props에 기존에 사용하던 author 대신 재사용성을 고려하여 user로 이름을 바꾸었다.

 - 2. 추출한 Avatar컴포넌트를 실제 Comment 컴포넌트에 반영
    
function Comment(props){
    return(
        <div classNamen = "comment">
            <div className = "user-info">
              <Avatar user={props.author}/>
                <div className = "user-info-name">
                    {props.author.name}
                </div>
            </div>
            
            <div className = "comment-text">
                {props.text}
            </div>

            <div className = "comment-date">
                {formatDate(props.date)}
            </div>
        </div>
        
    );
}

- 3. 사용자 정보를 담고있는 Userinfo 컴포넌트 추출 
    
    function UserInfo(props) {
        return (
            <div className="user-info">
                <Avatar user={props.user} />
                <div className = "user-info-name">
                    {props.user.name}
                </div>
            </div>
        );
    }
Userinfo에 하위요소로 -2번에서 추출했던 Avatar 컴포넌트가 있기때문에 
함께 추출되었다.

- 4. 추출한 UserInfo 컴포넌트 반영 후 추출 전과 비교

                                                            - After

                                                            function Comment(props){
                                                                return(
                                                                    <div classNamen = "comment">
                                                                        <UserInfo user={props.author} />
                                                                            <div className = "comment-text">
                                                                                {props.text}
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className = "comment-date">
                                                                            {formatDate(props.date)}
                                                                        </div>
                                                                    </div>
                                                                    
                                                                );
                                                            }

- Before

function Comment(props){
    return(
        <div className = "comment">
            <div classNamen = "user-info">
                <img classNamen = "avater"
                    src = {props.author.avatarUrl}
                    alt = {props.author.name}
                
                />
                <div classname = "user-info-name">
                    {props.author.name}
                </div>
            </div>

            <div className = "comment-text">
                {props.text}
            <div/>

            <div className = 'comment-date'>
                {formatDate(props.date)}
            </div>

        </div>
        
    );
}
        -------------------------------
       |         comment 컴포넌트        |
       |    ------------------------   |
       |    |    UserInfo 컴포넌트    |  |                        
       |    |  ------------------   |  |                     
       |    |  | Avatar 컴포넌트   |  |  |                        
       |    |  ------------------   |  |                                                     
       |     ------------------------  |
        --------------------------------
Comment 컴포넌트가 UserInfo를 포함하고있고, UserInfo 컴포넌트가 Avatar컴포넌트를 포함하고 있다
컴포넌트를 추출할때는 긴으 단위로 구분하는것이 좋고, 곧바로 재사용이 가능한 형태로 추출하는것이 가장 좋다.

 


