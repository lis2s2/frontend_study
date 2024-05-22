import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import styled from "styled-components";
import TodoBoard from './components/TodoBoard';
import { createGlobalStyle } from 'styled-components'
import { v4 as uuidv4 } from "uuid";

const GlobalStyle = createGlobalStyle`
  body {
    /* font-family: 'KCCChassam'; */
    /* font-family: 'KyoboHandwriting2023wsa'; */
    font-family: 'PyeongChangPeace-Bold';
    font-size: 1.3rem;
    background: #e9ecef;
  }

  .Outer {
  padding-top: 30px;
  width: 800px;
  margin: 0 auto 0 auto;
}
`;

const TodoInsertWrapper = styled.form`
  display: flex;
  background: lightyellow;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  /* font-family: 'Ownglyph_meetme-Rg'; */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #000000;
  flex: 1; // 버튼을 제외한 영역을 모두 차지하기
  &::placeholder {
    color: #000000;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: #adb5bd;
  }
`;

function App() {
  const [todo, setTodo] = useState([
    {
      id: uuidv4(),
      contents: '리액트기초를 공부해봅시다.',
    },
    {
      id: uuidv4() + 1,
      contents: '리액트기초를 공부해봅시다222.',
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const [doneTodo, setDoneTodo] = useState([]);

  // 추가 기능
  const addTodo = () => {

    const newTodo = {
      id: uuidv4(),
      contents: inputValue
    };

    if (!inputValue) {
      alert('내용을 입력하세요!');
      return;
    }
    else setTodo([...todo, newTodo]);
  }

  // 할 일 삭제
  const handleRemove = (id) => {
    setTodo(todo.filter(t => t.id !== id));
  };

  // 할 일 완료 기능 
  const handledone = (d) => {
    const newDone = {
      id: d.id,
      contents: d.inputValue
    };

    setDoneTodo([...doneTodo, newDone]);
    setTodo(todo.filter(t => t.id !== d.id));
  };

  // 완료 삭제 기능
  const handleDoneRemove = (id) => {
    setDoneTodo(doneTodo.filter(d => d.id !== id));
  };

  // 완료 취소 기능
  const handleCancel = (t) => {
    const newTodo = {
      id: t.id,
      contents: t.inputValue
    };

    setTodo([...todo, newTodo]);
    setDoneTodo([doneTodo.filter(d => t.id !== d.id)]);
  };


  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const handleInsert = (text) => {
    //   setTodoList(todos.concat(addItem));
    //   nextId.current += 1;
    // };

    return (
      <main>
        <GlobalStyle />

        <TodoInsertWrapper onSubmit={handleSubmit}>
          {/* 인풋창과 버튼 */}
          {/* 인풋창에 값을 입력하고 버튼을 클릭하면 아이템 추가 */}
          <StyledInput type="text" placeholder='내용을 입력하세요' value={inputValue} onChange={handleChange} />
          
          <StyledButton type="submit" onClick={addTodo}>추가</StyledButton>
        </TodoInsertWrapper>


        <TodoBoard todo={todo} />
      </main>
    );
  }
}
export default App;
