import React from 'react'
import './Header.scss';
import chat from "./assets/chat.png"
import loupe from "./assets/loupe.png"
import menu from "./assets/menu.png"
import logo from "./assets/logo.png"

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img alt="img" src={logo}/>
            </div>
            <div className="header_nav">
                <div className="header_nav_left">
                    <nav>
                        <ul className="nav-list">
                            <li>
                            <span>Models</span>
                            </li>
                            <li>
                            <span>Ownership</span>
                            </li>
                            <li>
                            <span>Motorsport</span>   
                            </li>
                            <li>
                            <span>Pre-owned</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header_nav_right">
                    <nav>
                            <ul>
                                <li>
                                <span>Dealerships</span>
                                </li>
                                <li>
                                <span>Museum</span>
                                </li>
                                <li>
                                <span>Store</span>   
                                </li>
                            </ul>
                        </nav>
                </div>

            </div>
            <div className="header_nav_buttons">
                    <ul>
                        <li>
                            <img alt="img" src={chat} />
                        </li>
                        <li>
                            <img alt="img" src={loupe} />
                        </li>
                        <li>
                            <img alt="img" src={menu} />
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Header
