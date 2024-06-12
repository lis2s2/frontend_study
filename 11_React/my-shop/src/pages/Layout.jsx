import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  font-family: 'Cafe24Meongi-W-v1.0';
`;


function Layout() {
  const navigate = useNavigate();

  return (
    <>
      {/* 헤더 */}
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <StyledNavbar.Brand href="#" onClick={() => navigate('/')}>수상한 사탕 가게</StyledNavbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/')}>홈</Nav.Link>
              <Nav.Link onClick={() => navigate('/cart')}>장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      {/* 자식 컴포넌트가 렌더링 될 위치 */}
      <Outlet />

      <footer>
        <p className="py-5 mb-0 bg-dark text-white">
          &copy; LSH Suhyeon Lee. all Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;