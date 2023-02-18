import  './NotificationBusiness.css'

import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const NotificationBusiness = () => {
    const { mn } = useParams() 

    const activeMessage = {
        background: "#2B63FD",
        color: "#fff",
    }

  return (
    <section className='notificationBox notification-business'>
        <section className='contacts-notifications'>
            <ul>
                <li><NavLink className="links-notification" to={`/business/${mn}/notifications/Jorge`} style={({ isActive }) => isActive ? activeMessage: undefined}><div>Jorge</div></NavLink></li>
                <li><NavLink className="links-notification" to={`/business/${mn}/notifications/Fernando`} style={({ isActive }) => isActive ? activeMessage: undefined}><div>Fernando</div></NavLink></li>
                <li><NavLink className="links-notification" to={`/business/${mn}/notifications/Sebastian`} style={({ isActive }) => isActive ? activeMessage: undefined}><div>Sebastian</div></NavLink></li>
            </ul>
        </section>

        <section className='outlet-notification'>
            <Outlet/>
        </section>
    </section>
  )
}

export default NotificationBusiness
