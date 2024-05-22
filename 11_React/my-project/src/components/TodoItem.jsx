import styled, { css } from "styled-components";

const Todoitem = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TodoItem(props) {
  const { todo, handleChange,  } = props;

  return (
    <Todoitem onChange={handleChange}>
      {todo.map(item => <TodoItem item={item} />)}
    </Todoitem>
  );
};

export default TodoItem;