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
        nextEl: '.slick-next',
        prevEl: '.slick-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
export default function Slider4() {
    return (
        <>
            <div className="slider style_five">
                <Swiper {...swiperOptions} className="tab_content_slick">
                    <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-5-1.jpg)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Welcome To Vankine
                                            </h6>
                                            <h1 className="animate_left">A Moments Of Caring <br />
                                                Your Dream Home </h1>
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
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-5-2.jpg)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Better Insurance
                                            </h6>
                                            <h1 className="animate_left"> Find Health Coverage <br />
                                                that's Right for you </h1>
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
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-5-3.jpg)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Better Insurance
                                            </h6>
                                            <h1 className="animate_left"> Don’t Call it a Dream,<br />
                                                Call it a Plan. </h1>
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
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-5-4.jpg)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 text-center">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                Better Insurance
                                            </h6>
                                            <h1 className="animate_left"> Build Amazing Life <br />
                                                With Insurance </h1>
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
                    <div>
                        <button type="button" className="slick-prev slick-arrow" style={{}}><span className="fi-rs-arrow-small-left" /></button>
                        <button type="button" className="slick-next slick-arrow" style={{}}><span className="fi-rs-arrow-small-right" /></button>
                    </div>
                </Swiper>
                {/* <div className="tab_postion_absolute">
                    <div className="container">
                        <div className="slider tab_slick">
                            <div className="title">
                                <h3>House Insurance</h3>
                            </div>
                            <div className="title">
                                <h3>Medical Insurance</h3>
                            </div>
                            <div className="title">
                                <h3>Travel Insurance</h3>
                            </div>
                            <div className="title">
                                <h3>Life Insurance</h3>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

        </>
    )
}
