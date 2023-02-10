import React from "react";
import iconfb from '../../../assets/Home/assetsHome/icon-facebook.svg';
import iconig from '../../../assets/Home/assetsHome/icon-instagram.svg';
import iconlkind from '../../../assets/Home/assetsHome/icon-linkedin.svg';
import icontw from '../../../assets/Home/assetsHome/icon-twitter.svg';
import './FooterHome.css'

const FooterHome = () => {
    return(
        <>
            <footer className="footer">
                <header className="header">
                    <div className="navigator-icon">
                        <div className="logo-container">
                            <h1 className="logo">Dev<span className="logo-extend">Juniors</span></h1>
                        </div>
                        <div className="icons">
                            <div className="icon-container">
                                <img className="icon-img" src={iconfb} alt="icon facebook" />
                            </div>
                            <div className="icon-container">
                                <img className="icon-img" src={icontw} alt="icon twitter" />
                            </div>
                            <div className="icon-container">
                                <img className="icon-img" src={iconig} alt="icon instagram" />
                            </div>
                            <div className="icon-container">
                                <img className="icon-img" src={iconlkind} alt="icon linkedin" />
                            </div>
                        </div>
                    </div>
                    {/*<nav className="navigator-bar">
                        <ul className="navigator-list">
                            <li className="navigator-item">inicio</li>
                            <li className="navigator-item">acerca de</li>
                            <li className="navigator-item">login</li>
                        </ul>
                    </nav>*/}
                    <div className="copyright">
                        <div className="copyright-cover">
                            <p className="copyright-text">© Copyright 2023</p><span className="copyright-extend">CodeJuniors</span>
                        </div>
                    </div>
               </header>
            </footer>
        </>
    )
}

export {FooterHome};