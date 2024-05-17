import { Link, useNavigate } from "react-router-dom";

function GamePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>게임 페이지</h1>
      <ul>
        <li>
          <Link to="/games/hot">인기 게임</Link>
        </li>
        <li>
          <Link to="/games/new">신규 게임</Link>
        </li>
      </ul>

      {/* Quiz: 메인으로 돌아가는 버튼 */}
      <button type="button" onClick={() => navigate('/')}>메인으로</button>
    </>
  );
};

export default GamePage;