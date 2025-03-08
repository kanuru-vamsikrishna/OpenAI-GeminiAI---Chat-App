import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="left">
        <h1>KVK OG AI Chat</h1>
        <h2>Super charge your creativity and productivity with KVK OG Chat</h2>
        <h3>KVK OG Chat is an intelligent AI-powered messaging app designed for seamless and effortless conversations. Whether you need instant answers, creative brainstorming, or productivity boosts, KVK OG Chat is your personal AI assistant, always ready to help. Engage in smart, dynamic interactions and unlock new levels of creativity and efficiency with AI at your fingertips.</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        
      </div>
    </div>
  )
}

export default HomePage