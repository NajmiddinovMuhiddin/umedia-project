import React from 'react';
import {Link, NavLink} from "react-router-dom";
import useScript from "./useScript";

const Layout = ({children}) => {

    const currentPathName = window.location.pathname;
    useScript(process.env.PUBLIC_URL + '/assets/js/app.js');
    return (
        <>
            <div className="wrapper">
                <header className="header">
                    <div className="header__container" data-aos="fade-down">
                        <h2><Link to={"/"} className="header__logo">
                            <picture>
                                <source srcSet={process.env.PUBLIC_URL + '/assets/img/logo.webp'} type="image/webp"/>
                                <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} alt=""/></picture>
                        </Link></h2>
                        <div className="header__menu menu">
                            <nav className="menu__body" data-da=".header, 1200, last">
                                <ul className="menu__list" id="menu">
                                    <li className="menu__item">
                                        <NavLink to={"/"} className={"menu__link" + (currentPathName == '/' ? ' --active' : '')}>Главная</NavLink>
                                    </li>
                                    <li className="menu__item">
                                        <NavLink to={"/about-company"} className={"menu__link" + (currentPathName == '/about-company' ? ' --active' : '')}>О компании</NavLink>
                                    </li>
                                    <li className="menu__item">
                                        <NavLink to={"/services"} className={"menu__link" + (currentPathName == '/services' ? ' --active': '')}>Услуги</NavLink>
                                    </li>
                                    <li className="menu__item">
                                        <NavLink to={"/portfolio"} className={"menu__link" + (currentPathName == '/portfolio' ? ' --active' : '')}>Портфолио</NavLink>
                                    </li>
                                    <li className="menu__item">
                                        <NavLink to={"/news"} className={"menu__link" + (currentPathName == '/news' ? ' --active' : '')}>Новости</NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header__language language" data-da=".menu__body, 480, last">
                                <div className="language__title _icon-globus"><span>Выберите язык:</span></div>
                                <div className="language__selected">RU</div>
                                <div className="language__items" hidden>
                                    <a href="#" className="language__item">UZ</a>
                                    <a href="#" className="language__item">ENG</a>
                                </div>
                            </div>
                            <button type="button" className="menu__icon icon-menu"><span/></button>
                        </div>
                    </div>
                </header>
                {
                    children
                }
                <footer className="footer">
                    <div className="footer__container">
                        <div className="footer__left">
                            <div className="footer__text">© 2022, UMEDIA Digital Agency </div>
                            <div className="footer__subtext">By IT Maker, All right reserved.</div>
                        </div>
                        <div className="footer__social social">
                            <a href="#" className="social__item _icon-facebook"/>
                            <a href="#" className="social__item _icon-instagram"/>
                            <a href="#" className="social__item _icon-twitter"/>
                        </div>
                    </div>
                    <div className="footer__anim-items">
                        <div className="footer__anim-circle footer__anim-circle-1"/>
                        <div className="footer__anim-circle footer__anim-circle-2"/>
                    </div>
                </footer>
            </div>
            <div className="overlay"/>
            <div className="menu-mobile"/>
        </>
    );
};

export default Layout;