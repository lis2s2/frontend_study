import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from "styled-components";
import TodoBoard from './components/TodoBoard';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


  body {
    /* font-family: 'KCCChassam'; */
    font-family: 'KyoboHandwriting2023wsa';
    font-size: 1.3rem;
    background: #e9ecef;
  }
`;

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    setInputValue([...todoList, inputValue]);
  }
  return (
    <main>
      <GlobalStyle />
      {/* 인풋창과 버튼 */}
      {/* 인풋창에 값을 입력하고 버튼을 클릭하면 아이템 추가 */}
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={addItem}>버튼</button>

      <TodoBoard />
    </main>
  );
}

export default App;
