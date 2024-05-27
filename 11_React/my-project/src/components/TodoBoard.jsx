import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoBoardWrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  /* margin-top: 6rem; */
  border-radius: 4px;
  /* overflow: hidden; */
  background: white;
  border-radius: 2rem;
  box-sizing: border-box;

  .board-title {
  /* font-family: 'PyeongChangPeace-Bold'; */
  color: #000000;
  height: 1.5rem;
  font-size: 1.4rem;
  padding: 1.5rem 0.5rem 0.5rem 2rem;
  overflow: auto; 
}

.content {
  /* background: lightgray; */
  overflow-y: auto;
  margin: 0 auto;
  display: flex;
  padding: 0 1rem;
  flex-direction: row;
  }
`;

function TodoBoard(props) {
  const { todo, onRemove, onDone, onEdit, onEditChange } = props;
  const list = todo.filter(d => !d.done);
  const done = todo.filter(d => d.done);

  return (
    <TodoBoardWrapper>
      <h1 className="board-title">🌟List</h1>
      <div className="content">
        {list.map(item => <TodoItem key={item.id} item={item} onDone={onDone} onRemove={onRemove} onEdit={onEdit} onEditChange={onEditChange} />)}
      </div>

      <h1 className="board-title">✔️Done</h1>
      <div className="content">
        {done.map(item => <TodoItem key={item.id} item={item} onDone={onDone} onRemove={onRemove}/>)}
      </div>
    
    </TodoBoardWrapper>
  );
};

export default TodoBoard;