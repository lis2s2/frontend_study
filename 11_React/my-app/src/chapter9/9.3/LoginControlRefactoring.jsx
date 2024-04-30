import React, { useState } from 'react';
import Greeting from '../9.1/Greeting';

function LoginButton(props) {
return <button type="button" onClick={props.onClick}>로그인</button>;}

function LogoutButton(props) {
return <button type="button" onClick={props.onClick}>로그아웃</button>;}

function LoginControlRefactoring(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick = {handleLogout}/>;
  } else {
    button = <LoginButton onClick = {handleLogin}/>
  } 
  // if문 사용 + button 변수에 컴포넌트를 대입
  

  return (
    <>
      {/* Greeting 컴포넌트의 재사용 */}
      <Greeting isLoggedIn = {isLoggedIn} />
      {/* 삼항 연산자로 if-else 구문은 JSX 내부에서 표현 */}
      {/* 조건에 따라 각기 다른 엘리먼트를 렌더링하고 싶을 때 사용 */}
      {isLoggedIn
        ? <LogoutButton onClick = {handleLogout} />
        : <LoginButton onClick = {handleLogin} />
      }
    </>
  );
}

export default LoginControlRefactoring;