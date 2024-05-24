import { useState } from "react";
import TodoList from "./TodoList";

function Content(props) {
  const { itemlist } = props;

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: '리액트 과제 하기',
      body: '어려워'
    },
    {
      id: 2,
      title: '리액트 과제 안하기',
      body: '쉽다'
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const [items, setItems] = useState([
    // {
    //   id: 1,
    //   text: '집에 가기',
    //   done: false
    // },
    // {
    //   id: 2,
    //   text: '낮잠 자기',
    //   done: true
    // },
    // {
    //   id: 3,
    //   text: '저녁 먹기',
    //   done: true
    // }
  ]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    console.log(inputValue);
    setItems([...items, inputValue]);
  };

  return (
    <div>
      {/* autocomplete: 자동완성 */}
      <input id="inputValue" autocomplete="on" value={inputValue} type="text" placeholder="입력하세요" onChange={handleChange} />
      {/* <input type="button" value="➕" onClick={addItem}></input> */}
      <button type="button" onClick={addItem}>➕</button>

      {/* props를 이용하여 items을 TodoList 컴포넌트에 전달 */}
      <TodoList items={items} />
    </div>
  );
};

export default Content;