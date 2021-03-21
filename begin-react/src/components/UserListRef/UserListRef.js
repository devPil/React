function UserRef({ user, onToggle, onRemove }) {
  const { name, email, active } = user;
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
};

function UserListRef({ users, onToggle, onRemove }) {
  return (
    <div>
      {users.map(user => (
        <UserRef
          key={user.id}
          user={user}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default UserListRef;
