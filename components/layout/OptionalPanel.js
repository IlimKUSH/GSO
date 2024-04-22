import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
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
    }
}


export default function OptionalPanel({ isOptionalPanel, handleOptionalPanel }) {
    return (
        <>
            <div className={`option_panel-popup ${isOptionalPanel ? "popup-visible" : ""}`}>
                <div className="sdmenu_overlay" onClick={handleOptionalPanel} />
                <div className="option_boxed scrollbarcolor">
                    <div className="close-option-pan" onClick={handleOptionalPanel}>
                        <i className="fi-rr-cross" />
                    </div>
                    <div className="option_content scrollbarcolor ">
                        <div className="log_bx">
                            <Link href="#" className="logo navbar-brand">
                                <img src="/assets/images/theme-logo.png" alt="Vankine" className="logo_default" />
                            </Link>
                            <div className="about_company"> Denounce with righteous indignation and dislike men who are beguiled
                                and demoralized by the charms pleasure moment so blinded desire that they cannot foresee the
                                pain and trouble. </div>
                        </div>
                        <div className="contnet_box">
                            <div className="post_contet_modal">
                                <h2 className="title_no_a_28"> Latest Portfolio</h2>
                                <div className="post_enable">
                                    <Swiper {...swiperOptions} className="theme_carousel">
                                        <SwiperSlide className="modal_post_grid">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-9-min.png" className="main_img  img-fluid" alt="img" />
                                                <h2 className="tit_ho title_no_a_20">
                                                    Former insures only the marine perils
                                                </h2>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="modal_post_grid">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-8-min.png" className="main_img  img-fluid" alt="img" />
                                                <h2 className="tit_ho title_no_a_20">
                                                    Insurance covers risk of fire absence
                                                </h2>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="modal_post_grid">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-7-min.png" className="main_img  img-fluid" alt="img" />
                                                <h2 className="tit_ho title_no_a_20">Erving the interests of our clients
                                                </h2>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="modal_post_grid">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-6.png" className="main_img  img-fluid" alt="img" />
                                                <h2 className="tit_ho title_no_a_20">
                                                    Guide To Audio Visual With JavaScript GSA
                                                </h2>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="modal_post_grid">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-5.png" className="main_img  img-fluid" alt="img" />
                                                <h2 className="tit_ho title_no_a_20">
                                                    Building Web Layouts For Dual Foldable
                                                    Devices
                                                </h2>
                                            </Link>
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
                                </div>
                            </div>
                            <h2 className="title_no_a_28"> Need Any Help? Or Looking For an Agent</h2>
                            <div className="contact_panel">
                                <div className="c_pan">
                                    <Link href="tel:9806071234">
                                        <i className="fi-rr-phone-call" /> 9806071234 </Link>
                                </div>
                                <div className="c_pan">
                                    <Link href="mailto:sendmail@example.com">
                                        <i className="fi-rr-envelope" /> sendmail@example.com </Link>
                                </div>
                                <div className="c_pan">
                                    <a className="wk_hours">
                                        <i className="fi-rr-time-check" /> Working Hours : <span> Sun-monday, 09am-5pm </span>
                                    </a>
                                </div>
                            </div>
                            <div className="c_pan"> © {new Date().getFullYear()} Vankine. All Rights Reserved. </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
