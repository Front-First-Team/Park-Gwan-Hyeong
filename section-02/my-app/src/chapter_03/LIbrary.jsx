import React from "react";
import Book from "./book";

// 라이브러리라는 이름의 react 함수 컴포넌트
function Library(props) {
    // 라이브러리 컴포넌트는 총 3개의 book컴포넌트를 렌더링하고 있습니다.
    return(
        <div>
            <Book name="처음 만난 파이썬"numOfPage={300}/>
            <Book name="처음 만난 AWS"numOfPage={400}/>
            <Book name="처음 만난 리액트"numOfPage={500}/>
        </div>
    )
}
export default Library; 