import { useAuth } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ChatList from '../../components/ChatList/ChatList';
import "./dashboardLayout.css"

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { userId, isLoaded } = useAuth()

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in")
    }
  }, [isLoaded, userId]);

  if (!isLoaded) return "Loading..."

  console.log(isLoaded, "isLoaded");
  console.log(userId, "userId");

  return (
    <div className="dashboardLayout">
      <div className="menu"><ChatList /></div>
      <div><Outlet /></div>
    </div>
  )
}

export default DashboardLayout