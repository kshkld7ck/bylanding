import React from 'react'
import { withTranslation } from 'react-i18next';
import './index.scss'
import Logo from '../../../assets/icons/byshoplogo.svg'
import Appstore from '../../../assets/icons/appstore.svg'
import GooglePlay from '../../../assets/icons/googleplay.svg'

function BYshop({ t }) {

    return (
        <section className="byshop" id="byshop">
            <div className="container">
                <h3><span>BY</span> Shop</h3>

                <div className="byshop__block">
                    <img src={Logo} alt="" className="byshop__logo" />

                    <div className="byshop__content">
                        <a href="https://by-shop.ru" className="byshop__link">
                            BY-shop<span>.ru</span>
                        </a>
                        <p>
                            Интернет-магазин by-shop.ru <br />
                            и мобильное приложение BY Shop
                        </p>

                        <div className="byshop__extra">Скоро!</div>
                        <div className="byshop__app">
                            <img src={Appstore} alt="AppStore"/>
                            <img src={GooglePlay} alt="Google Play"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTranslation()(BYshop)
