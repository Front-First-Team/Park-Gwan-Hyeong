import React from "react";
import Comment from "./comment";

const comments = [
    {
        name:"박관형",
        Comment:"안녕 나 관형 "
    }
]
function CommentList(props){
    return (
        <div>
            <Comment name={"박관형"} Comment={"안녕하세요,관형입니다"} />
            <Comment name={"유재석"} Comment={"리액트 어렵네용"} />
        </div>
    );
}

export default CommentList;