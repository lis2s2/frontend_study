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

// <Todoitem onChange={handleChange}>
  {/* {todo.map(item => <TodoItem item={item} />)} */}
{/* </Todoitem> */}
function TodoItem(props) {
  const { item, handleChange } = props;
  
  return (
    <>
      <p>gdd    
      </p>
    </>
  );
};

export default TodoItem;