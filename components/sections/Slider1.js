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
        // el: '.swiper-pagination',
        clickable: true,
    },
}
export default function Slider1() {
    return (
        <>
            <section className="slider style_one">
                <Swiper {...swiperOptions} className="owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-1-1.jpg)' }}>
                        </div>
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="slider_content">
                                            <div className="bg_image animate_up">
                                                <img src="/assets/images/slider/shape-1.png" className="img-fluid" alt="ptimage" />
                                            </div>
                                            <h6 className="animate_up">
                                                <img src="/assets/images/slider/Icon-white.png" className="img-fluid" alt="icon" /> Best For Insurance
                                            </h6>
                                            <h1 className="animate_left">Insurance<br />
                                                For Better<br />
                                                World </h1>
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
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-1-2.jpg)' }}>
                        </div>
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="slider_content">
                                            <div className="bg_image animate_down">
                                                <img src="/assets/images/slider/shape-1.png" className="img-fluid" alt="ptimage" />
                                            </div>
                                            <h6 className="animate_up">
                                                <img src="/assets/images/slider/Icon-white.png" className="img-fluid" alt="icon" /> Best For Insurance
                                            </h6>
                                            <h1 className="animate_left">Insurance<br />
                                                Generation<br />
                                                To lead </h1>
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
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-1-3.jpg)' }}>
                        </div>
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="slider_content">
                                            <div className="bg_image">
                                                <img src=" assets/images/slider/shape-1.png" className="img-fluid" alt="ptimage" />
                                            </div>
                                            <h6 className="animate_up">
                                                <img src="/assets/images/slider/Icon-white.png" className="img-fluid" alt="icon" /> Best For Insurance
                                            </h6>
                                            <h1 className="animate_left"> Life Happy<br />
                                                Insurance <br />
                                                Policy </h1>
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





                </Swiper>
                <div className="swiper-pagination" />
                <div className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev">
                        <i className="fi-rs-arrow-small-left" />
                    </button>
                    <button type="button" role="presentation" className="owl-next">
                        <i className="fi-rs-arrow-small-right" />
                    </button>
                </div>
            </section>
        </>
    )
}
