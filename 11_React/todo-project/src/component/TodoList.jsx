import TodoListItem from "./TodoListItem";

function TodoList(props) {
  const { items } = props;
  console.log(items);

  return (
    <div>
      {items.map((item) => <TodoListItem key={item.id} item={item} />)}
    </div>
  );
};

export default TodoList;