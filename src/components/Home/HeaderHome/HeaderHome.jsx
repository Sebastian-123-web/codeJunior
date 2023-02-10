import React from "react";
import { Link } from "react-router-dom";
import './HeaderHome.css'

const HeaderHome = () => {
    return(
        <>
            <header className="header">
                <nav className="navigator-bar">
                    <h1 className="logo">Dev<span className="logo-extend">Juniors</span></h1>
                    <ul className="navigator-list">
                        <li className="navigator-item"><Link className="target" to="/" target="_self">inicio</Link></li>
                        <li className="navigator-item"><Link className="target" to="/" target="_self">acerca de</Link></li>
                        <li className="navigator-item"><Link className="target-btn" to="/login" ><button className="btn-navigator">login</button></Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export {HeaderHome};