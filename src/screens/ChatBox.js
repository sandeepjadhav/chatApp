import React, {useState, useEffect} from "react";
import * as io from 'socket.io-client';
import { Form } from 'react-bootstrap';
import ChatSocketServer from './../utils/chatSocketServer';
import ChatHttpServer from './../utils/chatHttpServer';
const ChatBox = (props) => {
  let users = props.users;
  let [chatMessage, handleFieldChange] = useState('');
  let [conversations, saveConversion] = useState([]);
  let [userId, selectUser] = useState('');
  let [loggedInUserId, setLoggedInUserId] = useState('');

  const sendMessage = (event, user) => {
    event.preventDefault();
    if (chatMessage === '' || chatMessage === undefined || chatMessage === null) {
      alert(`Message can't be empty.`);
    } else {
      sendAndUpdateMessages({
        fromUserId: JSON.parse(localStorage.getItem('authData')).id,
        message: (chatMessage).trim(),
        toUserId: user.id,
      });
    }
  }
  const getMessages = async (fromUserId, toUserId) => {
    try {
      const messageResponse = await ChatHttpServer.getMessages(fromUserId,toUserId);
      if (!messageResponse.error) {
        saveConversion(conversations => messageResponse.messages);
      } else {
        alert('Unable to fetch messages');
      }
    } catch (error) {
      console.log('getMessages: ', error)
    }
  }

  const sendAndUpdateMessages = async (message)=> {
    // ChatSocketServer.establishSocketConnection(JSON.parse(localStorage.getItem('authData')).id)
    try {
      ChatSocketServer.sendMessage(message);
      await getMessages(JSON.parse(localStorage.getItem('authData')).id, message.toUserId)
      // saveConversion(conversations => [...conversations, message]);
    } catch (error) {
      alert(`Can't send your message`);
    }
  };


  const receiveSocketMessages = (socketResponse) => {
    console.log('socketResponse:::::::::::::::::::::::', socketResponse);
      if (loggedInUserId !== null && loggedInUserId === socketResponse.fromUserId) {
        saveConversion(conversations => [...conversations, socketResponse]);
      }
  }

  useEffect(() => {
    console.log('props:::::::::', props);
   setLoggedInUserId(loggedInUserId => JSON.parse(localStorage.getItem('authData')).id);
    ChatSocketServer.establishSocketConnection(props.loggedUser);
    ChatSocketServer.receiveMessage();
    ChatSocketServer.eventEmitter.on('add-message-response', receiveSocketMessages);
    ChatSocketServer.eventEmitter.removeListener('add-message-response', receiveSocketMessages);

    // if (prevProps.newSelectedUser === null || (this.props.newSelectedUser.id !== prevProps.newSelectedUser.id)) {
    //   this.getMessages();
    // }
  }, [props]);


  // getMessages(props.loggedUser, 7);
  const handleRemove = (i) => {
    users.splice(i);
  }

  return(
    <div>
        {users.map((user, index) => (
          <div className={'testWrap' + index} key={user.id}>
            <div className="card">
              <div className="card-header">
                  {user.first_name} {loggedInUserId}
                  <i className="fa fa-times float-right" aria-hidden="true"  onClick={() => handleRemove(index)}></i>
                </div>
                <div className="card-body text-body">
                  {conversations.map((text, index2) => (
                    <div key={index2} data-id ={text.id} className={ (loggedInUserId === text.from_user_id) ? 'messageText text-right mb-1' : 'messageText text-left mb-1' }><span>{text.message}</span></div>
                  ))}
                </div>
                <div className="textBoxWrap card-footer">
                  <Form onSubmit={e => sendMessage(e, user)}>
                    <Form.Group key={index}>
                      <Form.Control
                        data-id = {index}
                        name = {"text-" + index}
                        autoFocus
                        type="text"
                        id = {"text-" + index}
                        placeholder="Type and hit Enter"
                        value={chatMessage}
                        onChange={e => handleFieldChange(e.target.value)}
                      />
                    </Form.Group>
                    </Form>
                  </div>
              </div>
          </div>
        ))}
    </div>

  )
}

export default ChatBox;