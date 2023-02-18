import  './NotificationBusiness.css'
import fernandoImg from '../../../../assets/ChatSeccion/fernando-img.jpg'
import jorgeImg from '../../../../assets/ChatSeccion/jorge-img.jpg'
import rodrigoImg from '../../../../assets/ChatSeccion/rodrigo-img.jpg'



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
                <li><NavLink className="links-notification" to={`/business/${mn}/notifications`} style={({ isActive }) => isActive ? activeMessage: undefined} end><div className='profile-jorge'><img className='img-profile-jorge' src={jorgeImg} alt=''/></div><div className='username-profile'>Jorge</div></NavLink></li>
                <li><NavLink className="links-notification" to={`/business/${mn}/notifications/Fernando`} style={({ isActive }) => isActive ? activeMessage: undefined}><img className='img-profile' src={fernandoImg} alt=''/><div className='username-profile'>Fernando</div></NavLink></li>
                <li><NavLink className="links-notification" to={`/business/${mn}/notifications/Sebastian`} style={({ isActive }) => isActive ? activeMessage: undefined}><img className='img-profile' src={rodrigoImg} alt=''/><div className='username-profile'>Sebastian</div></NavLink></li>
            </ul>
        </section>

        <section className='outlet-notification'>
            <Outlet/>
        </section>
    </section>
  )
}

export default NotificationBusiness
