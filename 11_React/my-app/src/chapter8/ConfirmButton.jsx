import React, { useState } from 'react';

function ConfirmButton(props) {
  const [btn ,setBtn] = useState(false);
  
  const button = () => {
    setBtn(!btn);
    
    // set함수는 비동기로 처리됨(=비동기 함수)
    // console.log(btn);
  }

  return (
    <div>
      <button type="button" onClick={button} disabled = {btn} >{btn ? '확인됨' : '확인하기'}</button>

    </div>
  );
}

export default ConfirmButton;

// 퀴즈: 사용자에게 확인을 요구하는 버튼 컴포넌트
// 버튼을 누르면 '확인하기'가 '확인됨'으로 변경되면서 버튼 비활성화 처리 해보기