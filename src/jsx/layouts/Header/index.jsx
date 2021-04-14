import React, { useState } from "react";
import './index.scss'
import Logo from '../../../assets/icons/logo.svg'
import i18n from '../../core/i18n';
import { withTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className="navbar">
                        <nav className="nav">
                            <a href="/" className="nav__link">
                                <img src={Logo} alt="" />
                            </a>
                            <div
                                className="nav__link nav__link_extended"
                                onClick={(e) => e.preventDefault()}
                            >
                                BY World
                                <svg className="nav__link-toggle" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L5 3.58579L8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#141414" />
                                </svg>


                                <div className="nav__submenu">
                                    <div>
                                        <AnchorLink offset="200" href="#projects" className="nav__link">{"Специальные проекты & колоборации"}</AnchorLink>
                                        <AnchorLink offset="100" href="#entertainment" className="nav__link">By Entertainment</AnchorLink>
                                        <AnchorLink offset="100" href="#gastro" className="nav__link">By Gastro</AnchorLink>
                                        <AnchorLink href="" className="nav__link nav__link_disabled">By Studio</AnchorLink>
                                    </div>
                                </div>
                            </div>
                            <AnchorLink offset="180" href="#heroes" className="nav__link">
                                BY Unvrs
                            </AnchorLink>
                            <a href="" className="nav__link nav__link_disabled">
                                BY Hall
                            </a>
                            <a href="" className="nav__link nav__link_disabled">
                                BY Fund
                            </a>
                            <a href="company" className="nav__link">
                                О компании
                            </a>
                        </nav>
                    </div>
                    <div className="tools">
                        <AnchorLink offset="50" href="#byshop" className="btn btn_primary">Купить на BY-shop.ru</AnchorLink>
                        {/* <div className="language">
                            <a href=""
                                className={`language__link ${i18n.language === 'ru' ? 'language__link_active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    changeLanguage('ru')
                                    console.log(i18n.language)
                                }}
                            >RU</a>
                            <a href=""
                                className={`language__link ${i18n.language === 'en' ? 'language__link_active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    changeLanguage('en')
                                }}
                            >EN</a>
                        </div> */}
                    </div>
                </div>
            </header>
        </>
    )
}

export default withTranslation()(Header)