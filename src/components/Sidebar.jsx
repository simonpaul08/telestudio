import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const sidebarItem = [
    {
      name: 'Dashboard',
      link: '/dashboard'
    },
    {
      name: 'Content',
      link: '/dashboard/content'
    },
    {
      name: 'Analytics',
      link: '/dashboard/analytics'
    },
    {
      name: 'Earn',
      link: '/dashboard/earn'
    },
    {
      name: 'Settings',
      link: '/dashboard/settings'
    },
    {
      name: 'Send feedback',
      link: '/dashboard/feedback'
    },
    {
      name: 'Sign Out',
      link: '/'
    },
  ]

  return (
    <div className='sidebar'>
        <div className="sidebar-header">
            <div className="channel-logo"></div>
            <h3 className='sidebar-primary'>channel name</h3>
            <p className='sidebar-uid'>@user_id</p>
        </div>
        <div className="sidebar-nav">
            {sidebarItem?.map(item => (<Link className='side-nav' to={`${item.link}`}>{item.name}</Link>))}
        </div>
    </div>
  )
}

export default Sidebar