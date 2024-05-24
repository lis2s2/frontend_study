import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoBoardWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  // margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  .app-title {
  background: skyblue;
  color: white;
  height: 4rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PyeongChangPeace-Bold';
  }

  .content {
    background: white;
  }
`;

function TodoBoard(props) {
  const { todo, inputValue, handleRemove,  handleDoneRemove, handledone, handleCancel} = props;

  return (
    <TodoBoardWrapper>
      {/* <div className="content" handleChange={handleChange}>{todo}</div> */}
      <h1>List</h1>
      {todo.map(item => {return (<TodoItem item={item} 
                key={item.id} 
                // contents={inputValue} 
                // onRemove={handleRemove}
                onDoneRemove={handleDoneRemove} />)})
      }

      <h1>Done</h1>
      
    </TodoBoardWrapper>
  );
};

export default TodoBoard;