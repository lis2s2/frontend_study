import axios from "axios";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedProduct, selectProduct } from "../features/product/productSlice";


function ProductDetail() {
  const data = useSelector(selectProduct);

  const dispatch = useDispatch();

  const { productlId } = useParams();

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
  }, []);

  return (
    // console.log(data.imagePath);
    <Container className="pt-3">
      <Row>
        <Col md={6}>
          <img src={data.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{data.title}</h4>
          <p className="pt-5">{data.content}</p>
          <p>{data.price}</p>
          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;