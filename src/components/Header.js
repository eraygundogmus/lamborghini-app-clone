import React from 'react'
import './Header.scss';

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
                <div className="header_nav_buttons">
                    <ul>
                        <li>
                            <img src="https://www.flaticon.com/svg/vstatic/svg/3388/3388300.svg?token=exp=1616145687~hmac=2dfcc51b924c34d25d61d9305ab06b09" />
                        </li>
                        <li>
                            <img src="https://www.flaticon.com/svg/vstatic/svg/622/622669.svg?token=exp=1616145624~hmac=ff289a1c0d7f565356d3a6b8baebfe5d" />
                        </li>
                        <li>
                            <img src="https://www.flaticon.com/premium-icon/icons/svg/2791/2791742.svg" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
