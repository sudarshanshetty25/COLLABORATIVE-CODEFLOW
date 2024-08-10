import React, { useState } from 'react'
import Client from '../components/Client';

const EditorPage = () => {
  const [clients,setClients]=useState([{socketId:1,username:'Rakesh k'},
    {socketId:2,username:'Jhon Deo'},
  ]);
  return <div className="mainWrap">
    <div className="aside">
      <div className="asideInner">
        <div className="logo">
          <img className="logoImage"src="/collabrative.png" alt="codeflow"/>
        </div>
        <h3>Connected </h3>
        <div className="clientsList">{
          clients.map((client) => (<Client key={client.socketId} username={client.username}/>))
}</div>
      </div>
      <button className="btn copyBtn">Copy ROOM ID</button>
      <button className="btn leaveBtn ">Leave</button>
    </div>
    <div className="editorWrap">Editor goes here....</div>
  </div>;
  
};

export default EditorPage;