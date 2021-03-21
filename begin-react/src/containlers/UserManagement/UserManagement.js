import UserListRef from '../../components/UserListRef';
import CreateUser from '../../components/CreateUser';
import React, { useRef, useState } from "react";

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
  const onChange = evt => {
    const { name, value } = evt.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const nextId = useRef(users.length + 1);
  const onCreate = () => {
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
  };
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  const onToggle = (id) => {
    setUsers(users.map(item => {
      if (item.id === id) item.active = !item.active;
      return item;
    }));
  }

  return (
    <>
      <h1>User관리</h1>
      <CreateUser
        name={name}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserListRef
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
};

export default UserManagement;
