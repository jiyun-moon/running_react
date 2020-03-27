import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './hello'

function App() {
  const name = "jiyun moon"
  return (
    <div className="App">
      <header>
        {name}의 러닝 리액트
      </header>
      <Hello />
    </div>
  );
}

export default App;
