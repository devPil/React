import React from 'react';

function CreateUser({ name, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="이름"
        onChange={onChange}
        value={name}
      />
      <input
        name="email"
        type="text"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

// export default CreateUser;
export default React.memo(CreateUser);
