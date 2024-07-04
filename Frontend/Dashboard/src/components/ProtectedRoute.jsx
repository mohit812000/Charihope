import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import SidebarComp from './SideBarComp'

const ProtectedRoute = () => {
  const auth = localStorage.getItem("token");

  return (
    <div>
      {
        
        auth ? (
          <SidebarComp>
            <Outlet />
          </SidebarComp>

        ) : (
          <Navigate to="/sign-in" />
        )
      }

    </div>
  )
}

export default ProtectedRoute