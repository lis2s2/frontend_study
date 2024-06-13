import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearSelectedProduct, getSelectedProduct, selectProduct } from "../features/product/productSlice";
import styled, { keyframes } from "styled-components";
import { Bounce, toast } from "react-toastify";

// npm install --save react-toastify

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highlight  = keyframes`
  from { background-color: #cff4fc; }
  50% { background-color: #e8f7fa; }
  to { background-color: #cff4fc; }
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;

function ProductDetail() {
  
  const dispatch = useDispatch();
  
  const product = useSelector(selectProduct);
  
  const { productlId } = useParams();
  
  const [time, setTime] = useState(true);
  const [orderCount, setOrderCount] = useState(1);

  const formatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/lis2s2/db-shop/products/${productlId}`);
        console.log(response);
        dispatch(getSelectedProduct(response.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductById();

    // 상품 상세 페이지가 언마운트 될 때 전역 상태 초기화
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [])

  const handleChangeOrderCount = (e) => {
    // 숫자 외 입력 시 유효성 검사 후 경고 토스트 띄우기
    if (isNaN(e.target.value)) {
      toast('🦄숫자만 입력하세요!');
      return;
    }
    setOrderCount(Number(e.target.value));
  };


  return (
    <Container className="pt-3">
      {/* Alert을 띄우고 3초 뒤에 사라지게 만들기 
        (힌트: 1) state만들고 처음 렌더링 됐을 때 3) seTimeout으로 타이머 설정 + 2) 조건부 렌더링) */}
      {time &&
        <StyledAlert variant="info" onClose={() => setTime(false)} dismissible>
          현재 28명이 이 상품을 보고 있습니다.
        </StyledAlert>
      }

      <Row>
        <Col md={6}>
          <img src={product?.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{product?.title}</h4>
          <p>{product?.content}</p>
          <p>{formatter.format(product?.price)}원</p>

          <Col md={4} className="m-auto mb-3">
            {/* 퀴즈: text input을 제어 컴포넌트로 만들기 */}
            <Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount} />
          </Col>

          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;