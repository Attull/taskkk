import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';
import { Users } from './Users';
import { useState } from 'react';

function App() {

  let [users, setUsers] = useState([]) 
  return (
    <div className="App">
        <Navbar setUsers={setUsers}/>
        <Users users={users}/>
    </div>
  );
}

export default App;
