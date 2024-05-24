import logo from './logo.svg';
import './App.css';
import Title from './component/Title';
import Content from './component/Content';

// Title + Content 구성
function App() {
  return (
    <div>
      {/* text를 Title 컴포넌트에 넘겨줘야 함 */}
      <Title text="Todo" />
      <Content />
    </div>
  );
}

export default App;
