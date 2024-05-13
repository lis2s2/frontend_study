// 패키지 설치
// npm install styled-components styled-reset react-icons
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";
import * as React from 'react'
import reset, { Reset } from 'styled-reset'
import './App.css';
import './index.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// 글로벌(공통) 스타일 적용과 reset css 적용
// createGlobalStyle을 이용하여 글로벌 스타일 컴포넌트를 만들고 가장 첫번째로 렌더링하면 됨
const GlobalStyle = createGlobalStyle`
  /* reset css */
  ${reset}
  
  /* 글로벌(공통) 스타일 */
  body {
    font-family: 'Ownglyph_meetme-Rg';
    font-size: 1.3rem;
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
