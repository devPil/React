import { useState, useRef } from 'react';

function InputSample() {
  // useState의 첫 번째 매개변수의 값이 초기 값
  // 즉, useState의 초기값을 객체로 선언하고, 객체안에 name, nickname 프로퍼티를 지니도록 한다.
  const [state, setState] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef({}); // dom에 접근할 경우 useRef함수를 활용하도록 한다.
  const { name, nickname } = state;

  const onChange = (evt) => {
    const { value, name } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onReset = () => {
    setState({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        type="text"
        name="nickname"
        placeholder="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>Reset</button>
      <div>
        이름: <b>{name}</b><br/>
        닉네임: <b>{nickname}</b>
      </div>
    </div>
  );
};

export default InputSample;
