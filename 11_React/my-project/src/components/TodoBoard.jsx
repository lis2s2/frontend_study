import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoDone from "./TodoDone";

const TodoBoardWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  /* margin-top: 6rem; */
  border-radius: 4px;
  overflow: hidden;
  background: white;
  border-radius: 2rem;
  box-sizing: border-box;
  overflow-x: auto;
  /* white-space: nowrap; */
  /* flex-wrap: wrap; */

  .board-title {
  /* font-family: 'PyeongChangPeace-Bold'; */
  color: #000000;
  height: 1.5rem;
  font-size: 1.4rem;
  padding: 1.5rem 0.5rem 0.5rem 2rem;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  overflow: auto; 
}

.content {
  /* background: lightgray; */
  overflow-y: auto;
  white-space: wrap;
  margin: 0 auto;
  display: flex;
  padding: 0 3rem;
  flex-direction: row-reverse;
  }
`;

function TodoBoard(props) {
  const { todo, onRemove, onDone, onDoneRemove } = props;

  return (
    <TodoBoardWrapper>
      <h1 className="board-title">🌟List</h1>
      <div className="content">
        {todo.map(item => <TodoItem key={item.id} item={item} onRemove={onRemove} onDone={onDone} />)
          // contents={inputValue} 
        }
      </div>

      <h1 className="board-title">✔️Done</h1>
      <div className="content">
        {/* {todo.map(done => <TodoDone key={done.id} done={done} onDone={onDone} onDoneRemove={onDoneRemove} />)} */}
      </div>
    
    </TodoBoardWrapper>
  );
};

export default TodoBoard;