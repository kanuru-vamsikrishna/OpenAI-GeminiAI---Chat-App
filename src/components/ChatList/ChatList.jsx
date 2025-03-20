import React from 'react'
import { Link } from 'react-router-dom'
import "./chatList.css"

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new chat</Link>
      <Link to="/">Explore KVK OG AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
        <div className="list">
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
          <Link to="/">My Chat title</Link>
        </div>
      <hr/>
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div>
          <span>Upgrade to KVK OG AI pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList