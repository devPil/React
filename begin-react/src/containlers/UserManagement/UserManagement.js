import UserListRef from '../../components/UserListRef';
import UserListHook from '../../components/UserListHook';
import CreateUser from '../../components/CreateUser';
import React, { useRef, useState, useMemo, useCallback } from "react";
/*
* useMemo: 메모라이즈? vue의 computed와 같다고 볼 수 있음.
*   즉, 이전에 계산한 값을 재사용한다는 의미이다.
* useCallback: useMemo와 비슷함,
*   즉, 특정 함수를 새로 만들지 않고 재사용하고싶을 때 사용.
* useCallback는 useMemo기반으로 작성되어짐
* 아래의 1, 2코드는 같다.
* 1.
* const onToggle = useMemo(
* () = > {
*   ....code
*   }
* );
* 2.
* const onToggle = useCallback(
* () => {
*   ....code
*   }
* );
* */

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중..');
  return users.filter(user => user.active).length;
};

function UserManagement() {
  // users 초기화
  const [users, setUsers] = useState([
    { id: 1, name: 'piljuRef1', email: 'piljuRef1@email.com' },
    { id: 2, name: 'piljuRef2', email: 'piljuRef2@email.com' },
    { id: 3, name: 'piljuRef3', email: 'piljuRef3@email.com' },
  ]);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const { name, email } = user;
  // const onChange = evt => {
  //   const { name, value } = evt.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };
  const onChange = useCallback(evt => {
      const { name, value } = evt.target;
      setUser({
        ...user,
        [name]: value,
      });
    }, [user] // 여기서 props, state 를 사용할 경우 항상 deps안에 넣어줘야함 그렇지 않을 경우 항상 최신 값을 사용한다고 보장 할 수 없다.
  );
  const nextId = useRef(users.length + 1);
  // const onCreate = () => {
  //   const user = {
  //     id: nextId.current,
  //     name,
  //     email,
  //   };
  //   setUsers([...users, user]);
  //   setUser({
  //     name: '',
  //     email: '',
  //   });
  //   nextId.current += 1;
  // };
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      name,
      email,
    };
    setUsers([...users, user]);
    setUser({
      name: '',
      email: '',
    });
    nextId.current += 1;
  }, [users, name, email]);
  // const onRemove = (id) => {
  //   setUsers(users.filter(user => user.id !== id));
  // };
  const onRemove = useCallback((id) => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);
  // const onToggle = (id) => {
  //   setUsers(users.map(item => {
  //     if (item.id === id) item.active = !item.active;
  //     return item;
  //   }));
  // }
  const onToggle = useCallback((id) => {
    setUsers(users.map(item => {
      if (item.id === id) item.active = !item.active;
      return item;
    }));
  }, [users]);
  // const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <h1>User관리</h1>
      <CreateUser
        name={name}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <div>
        <h2>1. 배열 - 기본</h2>
        <UserListRef
          users={users}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      </div>
      <div>
        <h2>2. useEffect - mount, unmount</h2>
        <UserListHook
          users={users}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      </div>
      <div>활성 사용자수: {count}</div>
    </>
  );
};

export default UserManagement;
