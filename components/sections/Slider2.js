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
export default function Slider2() {
    return (
        <>
            <section className="slider style_two">
                <Swiper {...swiperOptions} className="owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-end">
                                    <div className="col-lg-7 col-md-12 col-sm-12">
                                        <div className="slider_content">
                                            <div className="bg_image animate_down">
                                            </div>
                                            <h6 className="animate_up">
                                                <img src="/assets/images/slider/Icon-green.png" className="img-fluid" alt="icon" /> Best For Insurance
                                            </h6>
                                            <h1 className="animate_left">Insurance<br />
                                                For Better<br />
                                                World </h1>
                                            <div className="button_all animate_down">
                                                <Link href="#" className="theme_btn">Read
                                                    More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12">
                                        <div className="image animate_left">
                                            <img src="/assets/images/slider/slider-image-2-1.png" className="img-fluid" alt="icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape animate_down">
                            <img src="/assets/images/slider/slider-2-shape.png" className="img-fluid" alt="icon" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-end">
                                    <div className="col-lg-7 col-md-12 col-sm-12">
                                        <div className="slider_content">
                                            <div className="bg_image animate_down">
                                            </div>
                                            <h6 className="animate_up">
                                                <img src="/assets/images/slider/Icon-green.png" className="img-fluid" alt="icon" />
                                                Live Your Dream
                                            </h6>
                                            <h1 className="animate_left">Personalized <br />
                                                Health Plans For<br />
                                                Your Family </h1>
                                            <div className="button_all animate_down">
                                                <Link href="#" className="theme_btn">Read
                                                    More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12">
                                        <div className="image animate_left">
                                            <img src="/assets/images/slider/slider-image-2-1.png" className="img-fluid" alt="icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape animate_down">
                            <img src="/assets/images/slider/slider-2-shape.png" className="img-fluid" alt="icon" />
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
