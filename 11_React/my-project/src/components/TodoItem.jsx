import styled, { css } from "styled-components";

const Todoitem = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TodoItem() {
  return (
    <Todoitem>
      코알누 짱짱걸
    </Todoitem>
  );
};

export default TodoItem;