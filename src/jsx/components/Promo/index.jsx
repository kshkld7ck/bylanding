import React from 'react'
import './index.scss'
import SwiperCore, { Navigation, Pagination } from "swiper/core"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Picture from '../Picture';
import Promo1 from '../../../assets/icons/promo1.png'
import ReactPlayer from 'react-player'

function Promo() {
    SwiperCore.use([Navigation, Pagination]);
    console.log(Swiper)

    return (
        <section className="promo">
            <div className="container-fluid">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: false }}

                    className="announcement__slider"
                >                    {/* <div className="promo__slide">
                        <Picture pictureName="promo2" pictureAlt="" />
                    </div> */}
                    <SwiperSlide className="promo__slide">
                        <img src={Promo1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="promo__slide">
                        {({ isActive }) => (
                            <ReactPlayer
                                url={[{
                                    src: '../../../../videos/vid2.mp4',
                                    type: 'video/mp4',
                                }]}
                                width="100%"
                                height="540px"
                                playing={isActive}
                                controls
                            />
                        )}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Promo
