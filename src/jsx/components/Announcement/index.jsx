import React from 'react'
import './index.scss'
import Picture from '../Picture/index';
import Slider from "react-slick";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="announcement__arrow announcement__arrow_next"
            onClick={onClick}
        >
            <svg width="181" height="8" viewBox="0 0 181 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M180.354 4.35354C180.549 4.15828 180.549 3.84169 180.354 3.64643L177.172 0.464451C176.976 0.269188 176.66 0.269188 176.464 0.464451C176.269 0.659713 176.269 0.976295 176.464 1.17156L179.293 3.99998L176.464 6.82841C176.269 7.02367 176.269 7.34026 176.464 7.53552C176.66 7.73078 176.976 7.73078 177.172 7.53552L180.354 4.35354ZM4.37114e-08 4.5L180 4.49998L180 3.49998L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#141414" />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="announcement__arrow announcement__arrow_prev"
            onClick={onClick}
        >
            <svg width="181" height="8" viewBox="0 0 181 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.646454 3.64645C0.451187 3.84171 0.451187 4.15829 0.646454 4.35355L3.82843 7.53553C4.0237 7.7308 4.34027 7.7308 4.53554 7.53553C4.73079 7.34027 4.73079 7.02369 4.53554 6.82843L1.70711 4L4.53554 1.17157C4.73079 0.976311 4.73079 0.659728 4.53554 0.464466C4.34027 0.269204 4.0237 0.269204 3.82843 0.464466L0.646454 3.64645ZM181 3.5L1 3.5V4.5L181 4.5V3.5Z" fill="#141414" />
            </svg>
        </div>
    );
}

function Announcement() {
    const settings = {
        infinite: true,
        speed: 300,
        // slidesToShow: 5.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        draggable: false,
        className: "announcement__slider",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth: true,
    };
    return (
        <section className="announcement">
            <div className="announcement__content">
                <div className="container-fluid">
                    <Slider {...settings}>

                        <AnchorLink offset="200" href="#projects" offset="" className="announcement__slide">
                            <h4 className="announcement__title">
                                <span>Специальные проекты</span>
                                <br />
                                {"&"} коллаборации
                        </h4>
                            <Picture pictureName="specprojects"
                                pictureAlt="Специальные проекты и коллаборации"
                            />
                        </AnchorLink>
                        <AnchorLink offset="100" href="#entertainment" className="announcement__slide">
                            <h4 className="announcement__title">
                                <span>BY</span>
                                <br />
                            Entertainment
                        </h4>
                            <Picture pictureName="BYEntertainment"
                                pictureAlt="BY Entertainment"
                            />
                        </AnchorLink>
                        <AnchorLink offset="100" href="#gastro" className="announcement__slide" >
                            <h4 className="announcement__title">
                                <span>BY</span>
                                <br />
                            Gastro
                        </h4>
                            <Picture pictureName="BYGastro"
                                pictureAlt="BY Gastro"
                            />
                        </AnchorLink>
                        <AnchorLink offset="100" href="#heroes" className="announcement__slide" >
                            <h4 className="announcement__title">
                                <span>BY</span>
                                <br />
                            Unvrs
                        </h4>
                            <Picture pictureName="BYUnvrs"
                                pictureAlt="BY Unvrs"
                            />
                        </AnchorLink>
                        <article className="announcement__slide">
                            <h4 className="announcement__title">
                                <span>BY</span>
                                <br />
                            Shop
                        </h4>
                            <p>Скоро!</p>

                            <Picture pictureName="BYShop"
                                pictureAlt="BY Shop"
                            />
                        </article>
                        <article className="announcement__slide">
                            <h4 className="announcement__title">
                                <span>BY</span>
                                <br />
                            Studio
                        </h4>
                            <p>Скоро!</p>

                            <Picture pictureName="BYStudio"
                                pictureAlt="BY Studio"
                            />
                        </article>
                        <article className="announcement__slide">
                            <h4 className="announcement__title">
                                <span>BY</span>
                                <br />
                            Fund
                            <p>Скоро!</p>
                            </h4>
                            <Picture pictureName="BYFund"
                                pictureAlt="BY Fund"
                            />
                        </article>
                        <article className="announcement__slide">
                            <h4 className="announcement__title">
                                <span>BY</span>
                                <br />
                            Hall
                            <p>Скоро!</p>
                            </h4>
                            <Picture pictureName="BYHall"
                                pictureAlt="BY Hall"
                            />
                        </article>

                    </Slider>
                </div>
                <div className="container">
                    <h1><span>BY</span> World</h1>
                </div>
            </div>
        </section>
    )
}

export default Announcement
