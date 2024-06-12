import { createGlobalStyle } from "styled-components";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import { ToastContainer } from "react-toastify";


// 글로벌(공통) 스타일 설정
const GlobalStyle = createGlobalStyle`

  body {
    box-sizing: border-box;
    }

  * {
    box-sizing: inherit;
    font-family: 'Cafe24Meongi-W-v1.0';
  }

  #root {
    text-align: center;
  }

  .cursor-pointer {
    cursor: pointer;
    }
    
    .fontt {
      font-family: 'Cafe24Meongi-W-v1.0';
    }
`;

function App() {
  return (
    <>
      {/* 부트스트랩 연습 */}
      {/* 1) 리액트 부트스트랩 */}
      {/* <Button variant="primary">Primary</Button>{' '} */}
      {/* 2) 기존 부트스트랩 */}
      {/* <button type="button" className="btn btn-warning">Primary</button> */}

      <GlobalStyle />
      {/* 헤더 영역: 상단 내비게이션 바 */}
      {/* <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#">수상한 사탕 가게</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>홈</Nav.Link>
              <Nav.Link>장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header> */}

      {/* 퀴즈: Layout 컴포넌트로 추출 및 Nested Route 구성해보기 */}
      <Routes>
          <Route path="/" element={<Layout />}>
            {/* index: index route(여기서는 기본 자식 라우트를 의미) */}
            <Route index element={<Main />} />
            {/* 퀴즈: 상품별 상세페이지 여러 개를 라우팅하려면? URL 파라미터 사용
              예: /detail/1로 접속하면 productId에 1이 담기도록 설정 */}
            {/* <Route path="detail" element={<ProductDetail />} /> */}
            <Route path="detail/:productlId" element={<ProductDetail />} />
          </Route>
        </Routes>

        {/* 토스트 컨테이너 하나로 재사용
          만약 다른 옵션의 토스트를 쓰고 싶다면 컨테이너 여러 개 사용 */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          pauseOnFocusLoss={false}
          theme="dark"
          newestOnTop
        />

    </>
  );
}

export default App;