import styled, { css } from "styled-components";

const Todoitems = styled.div`
  width: 200px;
  height: 150px;
  /* min-width: 150px;
  max-width: 150px; */
  border: 2px dashed black;
  border-radius: 1rem;
  font-family: 'NanumBarunGothic';
  font-size: 1rem;
  align-self: center;
  justify-content: center;
  margin: 10px;
  display: flex;
  box-sizing: border-box;
  
  /* .scroll { */
    /* display: block; */
    /* margin-right: 10px; */
    /* width: 150px;
    height: 150px; */
    text-align: center;
    line-height: 1.5rem;
    /* display: flex; */
    flex-wrap: wrap;
  /* } */
  
  .btnbox {
    /* display: flex; */
    /* border-style: none; */
    /* border-radius: 3rem; */
    /* width: 60px; */
    height: 30px;
    margin: 0 20px;
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
  const { item: { id, contents, done }, onRemove, onDone } = props;
  
  return (
    <Todoitems>
      <div className="scroll">
          {contents}
          <p className="btnbox">
            <StyledButton onClick={() => onDone(id)}>{done ? '취소' : '완료'}</StyledButton>
            <StyledButton onClick={() => onRemove(id)}>삭제</StyledButton>
            <StyledButton>수정</StyledButton>
          </p>
      </div>
    </Todoitems>
  );
};

export default TodoItem;