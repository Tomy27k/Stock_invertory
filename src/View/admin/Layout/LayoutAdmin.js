import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <div>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}

export default LayoutAdmin