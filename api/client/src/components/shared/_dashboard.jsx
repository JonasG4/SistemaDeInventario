import React from 'react'
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div id="content">
        
      </div>
    </div>
  )
}
