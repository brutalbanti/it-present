import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <a href="" className="header__logo">ЗАНИРНИ В <span>IT</span></a>
                <nav className="nav__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a href="https://weather-eight-tau.vercel.app/" className="menu__link" target="_blank">Прогноз погоди</a>
                        </li>
                        <li className="menu__item">
                            <a href="https://netflix-clone-brutalbanti.vercel.app/" className="menu__link" target="_blank">Клон Netflix</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-content__container">
                <h2 className="title-header">
                    <span>ЗАХІД</span> НА ТЕМУ <span className='span-it'>"СФЕРИ IT"</span>
                </h2>
                <p className="header__sub-title">
                    Що таке програмування? Професії в IT. 
                </p>
            </div>
        </header>
    )
}

export default Header;