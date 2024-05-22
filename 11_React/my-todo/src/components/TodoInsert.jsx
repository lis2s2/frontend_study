import styled from "styled-components";
// Tip: as를 사용하여 별칭을 붙여 사용하면 추후 아이콘 바꿀 때 한 곳만 바꾸면 돼서 편함!
// import { MdAdd as AddIcon } from "react-icons/md";
import { BsPatchPlusFill } from "react-icons/bs";
import { useState } from "react";

const TodoInsertWrapper = styled.form`
  display: flex;
  background: lightyellow;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  font-family: 'Ownglyph_meetme-Rg';
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #000000;
  flex: 1; // 버튼을 제외한 영역을 모두 차지하기
  &::placeholder {
    color: #000000;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: #adb5bd;
  }
`;

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 유효성 검사 추가
    if (!value) {
      alert('할 일을 입력하세요!');
      return; // 함수 종료
    }

    onInsert(value);
    setValue('');
  };

  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput type="text" placeholder="할 일을 입력하세요." onChange={handleChange} value={value} />
      <StyledButton type="submit">
        <BsPatchPlusFill />
      </StyledButton>
    </TodoInsertWrapper>
  );
};

export default TodoInsert;