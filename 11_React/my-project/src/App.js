import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import {reset } from 'styled-reset'
import styled from "styled-components";
import TodoBoard from './components/TodoBoard';
import { createGlobalStyle } from 'styled-components'
import { v4 as uuidv4 } from "uuid";

const GlobalStyle = createGlobalStyle`
  // 스타일 리셋
  ${reset}

  body {
    /* font-family: 'KCCChassam';  */
    font-family: 'PyeongChangPeace-Bold';
    font-size: 1.3rem;
    background: #e9ecef;
    width: 512px;
    margin: 0 auto;
    margin-top: 3rem;
    /* border-radius: 2rem; */
    overflow: hidden;
  }

  .Outer {
  padding-top: 30px;
  width: 800px;
  margin: 0 auto 0 auto;
}

.app-title {
  background: skyblue;
  font-family: 'PyeongChangPeace-Bold';
  color: white;
  height: 4rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  }
`;


const TodoInputWrapper = styled.form`
  display: flex;
  background: lightyellow;
  border-radius: 2rem;
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem 1.5rem;
  font-family: 'NanumBarunGothic';
  font-size: 1rem;
  line-height: 1.5;
  color: #000000;
  flex: 1;
  &::placeholder {
    color: #000000;
  }
`;

const StyledButton = styled.button`
  background: skyblue;
  color: white;
  border: none;
  padding: 1rem 1.7rem;
  font-family: 'NanumBarunGothic';
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;
  border-radius: 2rem;
  &:hover {
    background: lightblue;
  }
`;


function App() {
  // 기본 투두
  const [todo, setTodo] = useState([
    {
      id: uuidv4(),
      contents: '리액트기초를 공부해봅시다.',
      done : false
    },
    {
      id: uuidv4() + 1,
      contents: '리액트기초를 공부해봅시다222.',
      done : false
    }
  ]);

  // 입력 투두 
  const [inputValue, setInputValue] = useState('');

  // 완료 투두 
  const [doneTodo, setDoneTodo] = useState([]);

  // 추가 기능
  const addTodo = (contents) => {
    const newTodo = {
      id: uuidv4(),
      contents,
      done : false
    };

    if (!inputValue) {
      alert('내용을 입력하세요!');
      return;
    }
    else setTodo([...todo, newTodo]);
  }

  // 할 일 삭제
  const handleRemove = (id) => {
    setTodo(todo.filter(t=> t.id !== id));
  };

  // 할 일 완료 기능 
  const handledone = (d) => {
    const newDone = {
      id: uuidv4(),
      // contents,
      done : true
    };

    setDoneTodo([...doneTodo, newDone]);
    setTodo(todo.filter(t => t.id !== d.id));
    // setTodo(todo.map(t => t.id !== id ? {...todo, done: !todo.done} : todo));
  };

  // 완료 삭제 기능
  const handleDoneRemove = (id) => {
    setDoneTodo(doneTodo.filter(d => d.id !== id));
  };

  // 완료 취소 기능
  const handleCancel = (t) => {
    const newTodo = {
      id: t.id,
      contents: t.contents
    };

    setTodo([...todo, newTodo]);
    setDoneTodo([doneTodo.filter(d => t.id !== d.id)]);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo 함수에 값이 inputValue 
    addTodo(inputValue);

    // 다시 빈값으로 만들어줌
    setInputValue('');
    // const handleInsert = (text) => {
    //   setTodoList(todos.concat(addItem));
    //   nextId.current += 1;
    };

    return (
      <main>
        <GlobalStyle />
        {/* 타이틀 */}
        <h1 className="app-title">Todo</h1>

        {/* 인풋창과 버튼 */}
        <TodoInputWrapper onSubmit={handleSubmit}>
          {/* 인풋창에 값을 입력하고 버튼을 클릭하면 아이템 추가 */}
          <StyledInput type="text" placeholder='©lis2s2' value={inputValue} onChange={handleChange} />
          <StyledButton type="submit" onClick={handleSubmit}>추 가</StyledButton>
        </TodoInputWrapper>

        {/* 투두 */}
        <TodoBoard todo={todo} onRemove={handleRemove} onDone={handledone} onDoneRemove={handleDoneRemove} />

      </main>
    );
  }

export default App;
