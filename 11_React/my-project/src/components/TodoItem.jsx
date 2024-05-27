import styled, { css } from "styled-components";

const Todoitems = styled.div`
  /* width: 200px; */
  height: 150px;
  min-width: 200px;
  max-width: 200px;
  border: 2px dashed black;
  border-radius: 1rem;
  font-family: 'NanumBarunGothic';
  font-size: 1rem;
  align-self: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5rem;
  margin: 10px;
  display: flex;
  box-sizing: border-box;
  word-wrap: break-word;
  flex: 1;
  overflow: hidden;
  overflow-y:  auto;
  white-space: wrap; 
  word-wrap: break-word;
  
  .btnbox {
    height: 30px;
    margin: 0 2rem;
    margin-top: 1rem;
  }
`;

const StyledButton = styled.button`
  background: skyblue;
  color: white;
  height: 30px;
  border: none;
  /* padding: 0.7rem; */
  margin: 0 2px;
  font-family: 'NanumBarunGothic';
  font-size: 0.7rem;
  font-weight: 700;
  /* display: flex; */
  /* flex-wrap: wrap; */
  align-items: center;
  /* justify-content: space-around; */
  cursor: pointer;
  transition: 0.2s background ease-in;
  border-radius: 2rem;
  &:hover {
    background: lightblue;
  }
`;



// <Todoitem onChange={handleChange}>
  {/* {todo.map(item => <TodoItem item={item} />)} */}
{/* </Todoitem> */}
function TodoItem(props) {
  const { item: { id, contents, done }, onRemove, onDone, onEdit, onEditChange, editValue, edit } = props;

  return (
    <Todoitems>
      <div>
        <p>{contents}</p>
          
        <p className="btnbox">
          <StyledButton onClick={() => onDone(id)}>{done ? '취소' : '완료'}</StyledButton>
          <StyledButton onClick={() => onRemove(id)}>삭제</StyledButton>
          <StyledButton onClick={() => onEdit(id, contents)}>수정</StyledButton>
        </p>
      </div>
    </Todoitems>
  );
};

export default TodoItem;