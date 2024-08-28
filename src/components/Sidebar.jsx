import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-header">
            <div className="channel-logo"></div>
            <h3 className='sidebar-primary'>channel name</h3>
            <p className='sidebar-uid'>@user_id</p>
        </div>
        <div className="sidebar-nav">
            <p className='side-nav active'>Dashboard</p>
            <p className='side-nav'>Content</p>
            <p className='side-nav'>Analytics</p>
            <p className='side-nav'>Earn</p>
            <p className='side-nav'>Settings</p>
            <p className='side-nav'>Send feedback</p>
        </div>
    </div>
  )
}

export default Sidebar