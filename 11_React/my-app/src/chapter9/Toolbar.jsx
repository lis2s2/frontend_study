import React from 'react';

const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid gray'
  },
  greeting: {
    marginRight: 8
  },
};

function Toolbar(props) {
  const {isLoggedIn, onClickLogin, onClickLogout} = props; // 객체 구조 분해 할당

  return (
    <div style={styles.wrapper}>
      
    </div>
  );
}

export default Toolbar;