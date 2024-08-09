import React from 'react'

const Home = () => {
  return <div className="homePageWrpper">
    <div className="formWrapper">
      <img src="/logo192.png" alt="Codeflow" />
      <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
      <div className="inputGroup">
        <input type="text" className="inputBox" placeholder="ROOMID"/>

        <input type="text" className="inputBox" placeholder="USERNAME"/>

        <button className="btn joinBtn">Join</button>
        <span className="createInfo">
          If you don't have an invite then create &nbsp;
          <a href="" className="createNewBtn">New Room</a>
        </span>
      </div>
    </div>
    <footer>
    <h4>Built With By <a href="">Codeflow</a></h4>
    </footer>
  </div>;

};
export default Home;