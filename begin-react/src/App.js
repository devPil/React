import React from 'react';
import Counter from './components/Counter';
import CounterUseReducer from './components/CounterUseReducer';
import InputSample from './components/InputSample';
import UserList from './components/UserList';
import UserManagement from './containlers/UserManagement';
import UserManagementReducer from './containlers/UserManagementReducer';

function App() {

  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <div>
          <h2>Base</h2>
          <Counter />
        </div>
        <div>
          <h2>UseReduce</h2>
          <CounterUseReducer />
        </div>
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
      <hr />
      <UserManagementReducer />

    </div>
  );
}

export default App;
