import React, {useState, useContext, useEffect} from "react";
import { authContext } from "../contexts/AuthContext";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ChatBox from './ChatBox';

const Panel = () => {
  const { setAuthData, auth } = useContext(authContext);
  const [usersData, setData] = useState([]);
  const [chatDialogs, openChatDialog] = useState([]);
  let [loggedInUserId, setLoggedInUserId] = useState('');

  const onLogOut = () => {
    setAuthData(null);
  }

  const chatUser = (selectedUser) =>{
    setLoggedInUserId(loggedInUserId => JSON.parse(localStorage.getItem('authData')).id);
    openChatDialog(chatDialogs => [...chatDialogs, selectedUser]);
  }
  const getUsers = () => {
    axios('http://localhost:3001/api/users')
    .then(response =>  {
      setData(response.data)
    });
  };
  useEffect(() => {
   //;
   getUsers();

  }, []);



  return (
    <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center" >
       <ul>
        {usersData.map(user => (
          <li key={user.id} onClick={() => chatUser(user)}>{user.first_name}  { user.is_active && (<span>Active</span>) } </li>
        ))}
      </ul>
      <div style={{ width: 300 }}>
        <h1 className="text-center"> {`Hello, ${auth.data.first_name}`} </h1>
        <Button
          variant="primary"
          type="button"
          className="w-100 mt-3"
          onClick={onLogOut}
        >
          Log out
        </Button>
      </div>
      <div>
        <div>
        <ChatBox users={chatDialogs} loggedUser={loggedInUserId}/>


        {/* {chatDialogs.map(home => <div key={home.id}>{home.first_name}</div>)} */}


        </div>
      </div>
    </div>
  );
};

export default Panel;