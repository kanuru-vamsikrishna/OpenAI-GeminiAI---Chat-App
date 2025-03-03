import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './rootLayout.css'

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/">
          <img src="/public/logo.png" alt=""/>
          <span>AI Chat</span>
        </Link>
        <div className="user">User</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout