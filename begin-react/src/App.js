import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './hello'
import Wrapper from './wrapper';

function App() {
  const name = "jiyun moon";
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1.2rem'
  }
  return (
    <Wrapper>
      {/* 주석 테스트 */}
      <header style={style}>
        {name}의 러닝 리액트
      </header>
      <Hello name={name} color="red"/>
      <Hello color="pink"/>
      <div className="gray-box">gray box</div>
    </Wrapper>
  );
}

export default App;
