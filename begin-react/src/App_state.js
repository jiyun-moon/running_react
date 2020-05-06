import React, { useRef, useState, useMemo, useCallback } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Hello from './hello'
// import Wrapper from './wrapper';
// import Counter from './counter';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중..');
  return users.filter(user => user.active).length;
}

function App() {
  // const name = "jiyun moon";
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: '1.2rem'
  // }
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback( e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  }, []);
  const [users, setUsers] = useState( [
    {
      id: 1,
      username: 'jiyun',
      email: 'jiyun0527@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'naver',
      email: 'duwkeksldpf@naver.com',
      active: false
    },
    {
      id: 3,
      username: 'bananaketchup',
      email: 'poi0987654321@hanmail.net',
      active: false
    }
  ]);
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    // setUsers([...users, user]);
    setUsers(users => users.concat(user));
    
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(
    id => {
      setUsers(users => users.filter(user => user.id !== id));
    },
    []
  );

  const onToggle = useCallback(
      id => {
      setUsers(users => users.map(user => user.id === id ? { ...user, active: !user.active } : user))
    },
    []
  );
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      {/* 주석 테스트 */}
      {/* <header style={style}>
        {name}의 러닝 리액트
      </header>
      <Hello name={name} color="red" isSpecial />
      <Counter />
      <InputSample /> */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count} </div>
    </>
  );
}

export default App;
