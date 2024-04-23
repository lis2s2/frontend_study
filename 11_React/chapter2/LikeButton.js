// 리액트 함수 컴포넌트(지금은 코드 이해X)
// only JS로만 짠 코드
function LikeButton() {
  const [isClicked, setIsCliked] = React.useState(false);

  return React.createElement(
    'button', // 태그
    { onClick: () => setIsCliked(true) }, // 속성
    isClicked ? 'You liked this' : 'Like'
  );
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));

