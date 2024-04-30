import React, { useState } from 'react';
import Toolbar from './Toolbar';

function LandingPage(props) {
  // 사용자의 로그인 여부를 상태로 관리
  const {isLoggedIn, setIsLoggedIn} = useState(false);

  const handleClickLogin = () => {
    setIsLoggedIn(true);
  };

  const handleClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Toolbar />
      <div style={{padding: 16}}>리액트 공부 사이트ㅁ</div>
    </>
  );
}

export default LandingPage;