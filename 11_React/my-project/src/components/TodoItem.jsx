import styled, { css } from "styled-components";

const Todoitems = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: center;
  font-family: 'KyoboHandwriting2023wsa';
  margin: 0.5rem;
`;

// <Todoitem onChange={handleChange}>
  {/* {todo.map(item => <TodoItem item={item} />)} */}
{/* </Todoitem> */}
function TodoItem(props) {
  const { item, handleChange } = props;
  
  return (
    <Todoitems>
      <p>
      {item.contents}
      </p>
    </Todoitems>
  );
};

export default TodoItem;