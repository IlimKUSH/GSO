import Link from "next/link"

import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
export default function Slider3() {
    return (
        <>
            <section className="slider style_three">
                <Swiper {...swiperOptions} className="owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-3-1.jpg)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Better Insurance
                                            </h6>
                                            <h1 className="animate_left"> For Better People </h1>
                                            <div className="button_all animate_down">
                                                <Link href="#" className="theme_btn color_white  animated">Read
                                                    More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-3-2.jpg)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Better Insurance
                                            </h6>
                                            <h1 className="animate_left">Life Insurance </h1>
                                            <div className="button_all animate_down">
                                                <Link href="#" className="theme_btn color_white  animated">Read
                                                    More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-3-3.jpg)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Best For Insurance
                                            </h6>
                                            <h1 className="animate_left"> Financial Protection </h1>
                                            <div className="button_all animate_down">
                                                <Link href="#" className="theme_btn color_white  animated">Read
                                                    More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev">
                            <i className="fi-rs-arrow-small-left" />
                        </button>
                        <button type="button" role="presentation" className="owl-next">
                            <i className="fi-rs-arrow-small-right" />
                        </button>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
