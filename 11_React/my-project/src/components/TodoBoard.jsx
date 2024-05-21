import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoBoard() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoItem />
      <TodoItem />
    </>
  );
};

export default TodoBoard;