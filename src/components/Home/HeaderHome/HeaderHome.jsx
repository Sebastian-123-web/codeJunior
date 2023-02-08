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
                        <li className="navigator-item"><a className="target" href="./index.html" target="_self">inicio</a></li>
                        <li className="navigator-item"><a className="target" href="" target="_self">acerca de</a></li>
                        <li className="navigator-item"><a href="" target="_self"><button className="btn-navigator">login</button></a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export {HeaderHome};