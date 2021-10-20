import React, { useState , useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

export default function App() {

  const [users,setUsers] = useState(undefined);
  const [isClicked,setClick] = useState(false);

  useEffect(() => {
    if(isClicked)
    { setTimeout(()=>{
      fetch("https://reqres.in/api/users?page=1",{
        method:"get"
    }).then(res=>res.json())
    .then(result=>{
        setUsers(result.data);
        
    })
     }, 300);  
    }   
  },[isClicked]);

  return (
    <>
    <div className="App">
     <Navbar handleClick={(res)=>{setClick(res);}} />
     {users ? 
     <div className="main" >
     {users.map((user)=>{
       return <Card key={user.id} lname={user.first_name} fname={user.last_name} email={user.email} pic={user.avatar}/>
     })}
     </div>
      : isClicked && <div className="loader"></div>}
    </div>
    </>
  );
}

 
