import React from 'react'
import './Header.scss';
import chat from "./chat.png"
import loupe from "./loupe.png"
import menu from "./menu.png"

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img src="http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2c89.png"/>
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
                            <img src={chat} />
                        </li>
                        <li>
                            <img src={loupe} />
                        </li>
                        <li>
                            <img src={menu} />
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Header
