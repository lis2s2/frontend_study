// 상품 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용할 수 있도록 함수로 만듦

import axios from "axios";

// 상품 목록 조회

// 특정 삼품 조회

// 상품 더보기
export const getMoreProducts = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/lis2s2/db-shop/more-products') // 3개만 꺼내와야해서 more-products 
      
    if (response.status === 200) { // 응답 코드가 200 OK 일 때만 결과를 리턴
      return response.data;
    } else { // 서버가 에러 코드 전송 시
      throw new Error(`api error!: ${response.status} ${response.statusText}`); // 내장 함수 fetch()를 사용 했을 때만 던져줌 // 지금은 axios를 써줘서 작동 안함
    } 
    
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error); 
  }
};
