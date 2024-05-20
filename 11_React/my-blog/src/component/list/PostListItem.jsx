import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  border: 1px solid gray;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  

  &:hover {
    background: lightgrey;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

// 글의 제목만 표시해주는 컴포넌트
function PostListItem(props) {
  const { post: { id, title } } = props;

  const navigate = useNavigate();

  return (
    <Wrapper>
      <TitleText onClick={() => navigate(`/post/${id}`)}>
        {title}
      </TitleText>
    </Wrapper>
  );
};

export default PostListItem;