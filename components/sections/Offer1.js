import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Offer1() {
    return (
        <>
            <section className="what-we-offer bg_light_2">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-12">
                            <div className="section_title type_four">
                                <h4 className="sm_title"> What We Offer</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Key Features For your Insurance Business</h2>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="position-relative position_p_relative">
                                Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                                laudanti totam aperiam eaquecy epsa abillo inventore veritatis architecto beatae
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service_post style_two position-relative position_one nav_false dot_false">
                                <Swiper {...swiperOptions} className="theme_carousel ">
                                    <SwiperSlide className="process_box  type_two hover_1_get color_two">
                                        <div className="image_box hover_1">
                                            <img src="/assets/images/service/other-ser-1.jpg" alt="service" className="img-fluid" />
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                            <div className="icon trans">
                                                <i className=" flaticon-business-trip trans" />
                                            </div>
                                        </div>
                                        <div className="content">
                                            <Link className="rd_more trans" href="/service">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white">
                                                    </path>
                                                </svg>
                                            </Link>
                                            <div className="title_22">
                                                <Link href="/service">
                                                    Corporate Professional Insurance Liability
                                                </Link>
                                            </div>
                                            <p className="trans">
                                                Sit amet consectetur adipiscing elites varius
                                                montes, massa blandit orci.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="process_box  type_two hover_1_get color_two">
                                        <div className="image_box hover_1">
                                            <img src="/assets/images/service/other-ser-2.jpg" alt="service" className="img-fluid" />
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                            <div className="icon trans">
                                                <i className=" flaticon-salary trans" />
                                            </div>
                                        </div>
                                        <div className="content">
                                            <Link className="rd_more trans" href="/service">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white">
                                                    </path>
                                                </svg>
                                            </Link>
                                            <div className="title_22">
                                                <Link href="/service">
                                                    Easy System &amp; Trusted, Save your Money
                                                </Link>
                                            </div>
                                            <p className="trans">
                                                Sit amet consectetur adipiscing elites varius
                                                montes, massa blandit orci.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="process_box  type_two hover_1_get color_two">
                                        <div className="image_box hover_1">
                                            <img src="/assets/images/service/other-ser-3.jpg" alt="service" className="img-fluid" />
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                            <div className="icon trans">
                                                <i className=" flaticon-management trans" />
                                            </div>
                                        </div>
                                        <div className="content">
                                            <Link className="rd_more trans" href="/service">
                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.60161 0H19.6641C19.9128 0 20.1512 0.0987719 20.327 0.274587C20.5028 0.450403 20.6016 0.68886 20.6016 0.9375V15C20.6016 15.2486 20.5028 15.4871 20.327 15.6629C20.1512 15.8387 19.9128 15.9375 19.6641 15.9375C19.4155 15.9375 19.177 15.8387 19.0012 15.6629C18.8254 15.4871 18.7266 15.2486 18.7266 15V3.2L1.57661 20.35C1.3989 20.5156 1.16384 20.6058 0.920961 20.6015C0.678085 20.5972 0.446354 20.4988 0.274588 20.327C0.102821 20.1553 0.00443133 19.9235 0.000146059 19.6807C-0.00413921 19.4378 0.0860148 19.2027 0.251615 19.025L17.4016 1.875H5.60161C5.35297 1.875 5.11452 1.77623 4.9387 1.60041C4.76289 1.4246 4.66411 1.18614 4.66411 0.9375C4.66411 0.68886 4.76289 0.450403 4.9387 0.274587C5.11452 0.0987719 5.35297 0 5.60161 0Z" fill="white">
                                                    </path>
                                                </svg>
                                            </Link>
                                            <div className="title_22">
                                                <Link href="/service">
                                                    Dedicated Customer Support Team Member
                                                </Link>
                                            </div>
                                            <p className="trans">
                                                Sit amet consectetur adipiscing elites varius
                                                montes, massa blandit orci.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_80" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
