import React from 'react';
import Comment from './Comment';

// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* <Comment />
      <Comment />
      <Comment /> */}

      {/* 퀴즈: props를 사용하여 name과 content 값 전달(데이터는 자유롭게 작성) */}
      <Comment name= "장원석" content= "그거 어쩌죠?" />
      <Comment name= "이수현" content= "이건 컴포넌트입니다." />
      <Comment name= "김수한무" content= "거북이와 두루미" />
    </div>
  );
}

export default CommentList;