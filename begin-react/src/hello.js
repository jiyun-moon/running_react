import React from 'react';

function hello({ color, name }) {
return <h1 style={{ color: color }}>안녕하세요. {name}님</h1>
}

hello.defaultProps = {
  name: '이름없음'
}
export default hello;