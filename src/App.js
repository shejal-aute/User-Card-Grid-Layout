import React,{useState} from 'react';
import './App.css';
const App = ()=>{

  const [users,setUsers]= useState([]);

  const loadUsers = async()=>{
    const  response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUsers(jsonresponse);
  }
  return(
  <div className="App">
  <h1 className="Header">LGMVIP TASK 2</h1>
  <button onClick={loadUsers} className="btn">Get Data</button>

  <h2 className="Header1">USERS</h2>
  <ul className="ul">
    {users.map(({id,login,avatar_url})=>(
      <li key={id} className="li">Name : {login} ||
        Avatar : {avatar_url}
      </li>
      
    ))
    }
    
  </ul>
  </div>
  );
}

export default App;
