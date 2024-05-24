function Title(props) {
  // App.js에서 props.text 받아오기
  const { text } = props;

  return (
    <div>
      {/* 표현식 */}
      {text}
    </div>
  );
};

export default Title;