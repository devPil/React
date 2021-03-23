import React, { useEffect } from 'react';

const UserHook = React.memo(
  function UserHook({ user, onToggle, onRemove }) {
    const { name, email, active } = user;
    /*
    * useEffect
    * 첫번째 파라미터: function
    * 두번째 파라미터: 의존성 값이 들어있는 배열(deps)
    *   1. deps배열을 비울 경우 커포넌트가 처음 나타날때에만 useEffect에 등록한 함수가 호출됨,
    *     즉, deps = [] 일때에는 mounted일때만 발생하도록 됨
    *     또한, deps = []ㅇ고, return이 function일때 이를 cleanup라함
    *     이후, 컴포넌트가 사라질 때 발생(unmount)
    *   2. deps배열내에 값이 들어있다면 watch옵션을 준것과 비슷하게 동작함
    *     compomentDidMount, unMount, 값이 바뀌기 전에도 호출.
    *   3. deps파라미터가 생략돌 경우, 리렌더링 될대마다 호출됨
    *     즉, 렌더링시에만 지속 호출
    * */
    useEffect(() => {
      console.log('컴포넌트가 화면에 나타남');
      return () => {
        console.log('컴포넌트가 화면에서 사라짐');
      };
    }, []); // <= 여기 빈 배열[] 이 deps라 할 수 있음

    // Event 버블링 방지
    const onRemovePropagation = (evt) => {
      evt.stopPropagation();
      onRemove(user.id);
    };
    return (
      <div
        style={{
          cursor: 'pointer',
          color: active ? 'green': 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        이름: {name}, 이메일: {email}
        <button onClick={onRemovePropagation}>삭제</button>
      </div>
    );
  }
);

function UserListHook({ users, onToggle, onRemove }) {
  return (
    <div>
      {users.map(user => (
        <UserHook
          key={user.id}
          user={user}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default React.memo(UserListHook);
