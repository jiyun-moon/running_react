import React from 'react';

function hello({ color, name, isSpecial }) {
  return (
    <div style={{ color: color }}>
      { isSpecial && <b>*</b>  }
      안녕하세요. {name}님
    </div>
  )
}

hello.defaultProps = {
  name: '이름없음'
}
export default hello;