import { NavLink, Outlet, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../MenuEnterprise/MenuEnterprise.css'

import developer from '../../../assets/MenuEnterpriseIcons/developer.png'
import logout from '../../../assets/MenuEnterpriseIcons/logout.png'
import notification from '../../../assets/MenuEnterpriseIcons/notification.png'
import user from '../../../assets/MenuEnterpriseIcons/user.png'

const MenuEnterprise = () => {
    const [ menu, setMenu ] = useState(false)
    const { mn } = useParams()

    const handleMenu = () => {
        setMenu(!menu)
    }

    const activeStyle = {
        borderLeft: "3px solid #000",
        filter: "invert(67%) sepia(94%) saturate(1626%) hue-rotate(243deg) brightness(101%) contrast(104%)"
        
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
                            <li><NavLink onClick={() => menu === false ? "" : setMenu(!menu)} className='links' style={({ isActive }) => isActive ? activeStyle : undefined} to={`/business/${mn}`} end><img className='icon-enterprise' src={user} alt=''/> <div className='link-name'>Perfil</div></NavLink></li>
                            <li><NavLink onClick={() => menu === false ? "" : setMenu(!menu)} className='links' style={({ isActive }) => isActive ? activeStyle : undefined} to={`/business/${mn}/developers`}><img className='icon-enterprise' src={developer} alt=''/> <div className='link-name'>Desarrolladores</div></NavLink></li>
                            <li><NavLink onClick={() => menu === false ? "" : setMenu(!menu)} className='links' style={({ isActive }) => isActive ? activeStyle : undefined} to={`/business/${mn}/notifications`}><img className='icon-enterprise' src={notification} alt=''/> <div className='link-name'>Notificaciones</div></NavLink></li>
                            <li><NavLink onClick={() => menu === false ? "" : setMenu(!menu)} className='links' style={({ isActive }) => isActive ? activeStyle : undefined} to={`/business/${mn}/logout`}><img className='icon-enterprise' style={{marginLeft: "1.2em"}} src={logout} alt=''/> <div className='link-name'>Logout</div></NavLink></li>
                        </ul>
                </nav>
                </section>
            </section>
            <section className='outlet'>
                <Outlet/>
            </section>
        </section>
    )    
}

export default MenuEnterprise

