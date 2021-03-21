function User({ user }) {
  const { name, email } = user;
  return (
    <div>
      이름: {name}, 이메일: {email}
    </div>
  );
};

function UserList() {
  const users = [
    { name: 'pilju1', email: 'pilju1@email.com' },
    { name: 'pilju2', email: 'pilju2@email.com' },
  ];
  return (
    <div>
      {users.map(user => (<User key={user.name} user={user}/>))}
    </div>
  );
};

export default UserList;
