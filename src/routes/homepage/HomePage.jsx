import React, { useState } from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("Human1")
  return (
    <div className="homePage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>KVK OG AI Chat</h1>
        <h2>Super charge your creativity and productivity with KVK OG Chat</h2>
        <h3>KVK OG Chat is an intelligent AI-powered messaging app designed for seamless and effortless conversations. Whether you need instant answers, creative brainstorming, or productivity boosts, KVK OG Chat is your personal AI assistant, always ready to help. Engage in smart, dynamic interactions and unlock new levels of creativity and efficiency with AI at your fingertips.</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg">
              <img src="/bot.png" alt="" className="bot" />
            </div>
          </div>
          <div className="chat">
            {typingStatus === "Human1" && (<img src="/human1.jpeg" alt="" />)}
            {typingStatus === "Human2" && (<img src="/human2.jpeg" alt="" />)}
            {typingStatus === "Bot" && (<img src="/bot.png" alt="" />)}
              <TypeAnimation
              sequence={[
                'Human1: We produce food for Mice',
                1000, () => {
                  setTypingStatus("Bot")
                },
                'Bot: We produce food for Hamsters',
                1000, () => {
                  setTypingStatus("Human2")
                },
                'Human2: We produce food for Guinea Pigs',
                1000, () => {
                  setTypingStatus("Bot")
                },
                'Bot: We produce food for Chinchillas',
                1000, () => {
                  setTypingStatus("Human1")
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
             />
              </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span> | </span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage