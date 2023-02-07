import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../MenuEnterprise/MenuEnterprise.css'

import developer from '../../../assets/MenuEnterpriseIcons/developer.png'
import logout from '../../../assets/MenuEnterpriseIcons/logout.png'
import notification from '../../../assets/MenuEnterpriseIcons/notification.png'
import user from '../../../assets/MenuEnterpriseIcons/user.png'

const MenuEnterprise = () => {
    const [ menu, setMenu ] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
        console.log(menu)
    }

    const activeStyle = {
        borderLeft: "3px solid #f6f6f6",
    }

    return (
        <section className='rola'>
            <section className={`menu ${menu && 'menu__dc'}`}>
                <section className={`menu-fixed ${menu && 'menu__dc-fixed'}`}>
                <div className={`bars__menu ${menu && 'activeBars__menu'}`} onClick={handleMenu}>
                  <span className={`line1__bars-menu ${menu && 'activeLine1__bars-menu'}`}></span>
                  <span className={`line2__bars-menu ${menu && 'activeLine2__bars-menu'}`}></span>
                  <span className={`line3__bars-menu ${menu && 'activeLine3__bars-menu'}`}></span>
                </div>
                <nav className={`nav ${menu && 'active_menu'}`}>
                        <ul className='list'>
                            <li><NavLink className='links' style={({ isActive }) => isActive ? activeStyle : undefined} to='/perfil'><img className='icon-enterprise' src={user} alt=''/> <div className='link-name'>Perfil</div></NavLink></li>
                            <li><NavLink className='links' style={({ isActive }) => isActive ? activeStyle : undefined} to='/developers'><img className='icon-enterprise' src={developer} alt=''/> <div className='link-name'>Desarrolladores</div></NavLink></li>
                            <li><NavLink className='links' style={({ isActive }) => isActive ? activeStyle : undefined} to='/notifications'><img className='icon-enterprise' src={notification} alt=''/> <div className='link-name'>Notificaciones</div></NavLink></li>
                            <li><NavLink className='links' style={({ isActive }) => isActive ? activeStyle : undefined} to='/logout'><img className='icon-enterprise' style={{marginLeft: "1.2em"}} src={logout} alt=''/> <div className='link-name'>Logout</div></NavLink></li>
                        </ul>
                </nav>
                </section>
            </section>
        </section>
    )    
}

export default MenuEnterprise

