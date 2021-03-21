import React, { useRef } from 'react';
import Counter from './components/Counter';
import InputSample from './components/InputSample';
import UserList from './components/UserList';
import UserManagement from './containlers/UserManagement';

function App() {

  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <Counter />
      </div>
      <div>
        <h1>InputSample</h1>
        <InputSample/>
      </div>
      <div>
        <h1>UserList</h1>
        <UserList />
      </div>
      <hr />
      <UserManagement />
    </div>
  );
}

export default App;
