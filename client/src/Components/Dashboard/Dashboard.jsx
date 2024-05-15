import React from 'react'
import Sidebar from './Sidebar Section/Sidebar'
import Body from './Body Section/Body'

const Dashboard = () => {
  return (
    <div className='container'>
        <Sidebar/>
        <Body/>
    </div>
  )
}

export default Dashboard