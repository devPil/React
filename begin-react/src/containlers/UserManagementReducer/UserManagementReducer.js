import UserListHook from '../../components/UserListHook';
import CreateUser from '../../components/CreateUser';
import React, { useRef, useReducer, useCallback } from 'react';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중..');
  return users.filter(user => user.active).length;
};

const initialState = {
  inputs: {
    name: '',
    email: '',
  },
  users: [
    { id: 1, name: 'piljuRef1', email: 'piljuRef1@email.com' },
    { id: 2, name: 'piljuRef2', email: 'piljuRef2@email.com' },
    { id: 3, name: 'piljuRef3', email: 'piljuRef3@email.com' },
  ],
};

function reducer(state, action) {
  const { users } = state;
  switch (state.action) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: users.concat({
          ...action.inputs,
        }),
      };
    default:
      return state;
  }
};

function UserManagementReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users, inputs } = state;
  const { name, email } = inputs;
  const onChange = useCallback(evt => {
    const { name, value } = evt.target;
    dispatch({
      type: 'ONCHANGE_INPUT',
      name,
      value,
    });
  }, []);
  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       name,
  //       email,
  //     },
  //   });
  //   nextId.current += 1;
  // }, [name, email]);
  return (
    <>
      <h1>User관리 - useReducer</h1>
      <CreateUser
        name={name}
        email={email}
        onChange={onChange}
        // onCreate={onCreate}
      />
      <div>
        <h2>1. useEffect - mount, unmount</h2>
        <UserListHook
          users={users}
          // onRemove={onRemove}
          // onToggle={onToggle}
        />
      </div>
      <div>활성 사용자수: {0}</div>
    </>
  );
};

export default UserManagementReducer;
