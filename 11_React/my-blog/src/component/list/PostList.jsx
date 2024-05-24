import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

// map() 함수를 사용하여 PostListItem을 반복 렌더링하는 컴포넌트
function PostList(props) {
  // const posts = props.posts;
  const { posts } = props;
  return (
    <Wrapper>
      {/* post 배열을 반복 렌더링하기 */}
      {posts.map(post => <PostListItem key={post.id} post={post}>{post.title}</PostListItem>)}

    </Wrapper>
  );
};

export default PostList;