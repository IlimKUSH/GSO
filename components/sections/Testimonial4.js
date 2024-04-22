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
export default function Testimonial4() {
    return (
        <>
            <section className="testimonial-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_one">
                                <h4 className="sm_title"> Check Your Favorite Insurance</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Get Started Favorite Insurance</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd_bottom_30" />
                    <div className="testimonial_carousel  position-relative position_one nav_false dot_true">
                        <Swiper {...swiperOptions} className="theme_carousel ">
                            <SwiperSlide className="testimonial_box type_two ">
                                <div className="auth d-flex align-items-center clearfix">
                                    <div className="image_box">
                                        <img src="/assets/images/testimonial/test-3-min.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="cont">
                                        <h4 className="title_no_a_24">Fleix Everard</h4>
                                        <p>HR, Blue Soft Sol</p>
                                    </div>
                                </div>
                                <div className="title_no_a_22 t_comment">
                                    <sup>“</sup>Sed perspiciatis unonis
                                    este natus error sit volutate accusantium dolor laudant totam rem aperiam
                                    eaupsa abillo inven veritatis
                                    <sub>“</sub></div>
                                <div className="box">
                                    <h6>Jacob Leonardo</h6>
                                    <p>
                                        <i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star empty" /><i className="fa fa-star empty" /></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial_box type_two ">
                                <div className="auth d-flex align-items-center clearfix">
                                    <div className="image_box">
                                        <img src="/assets/images/testimonial/test-2-min.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="cont">
                                        <h4 className="title_no_a_24">Boris Elbert</h4>
                                        <p>Green Tech</p>
                                    </div>
                                </div>
                                <div className="title_no_a_22 t_comment">
                                    <sup>“</sup>Sed perspiciatis unonis
                                    este natus error sit volutate accusantium dolor laudant totam rem aperiam
                                    eaupsa abillo inven veritatis
                                    <sub>“</sub></div>
                                <div className="box">
                                    <h6>Jacob Leonardo</h6>
                                    <p>
                                        <i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star empty" /><i className="fa fa-star empty" /></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial_box type_two ">
                                <div className="auth d-flex align-items-center clearfix">
                                    <div className="image_box">
                                        <img src="/assets/images/testimonial/test-1-min.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="cont">
                                        <h4 className="title_no_a_24">Ivor Herbert</h4>
                                        <p>Manager, Airlines</p>
                                    </div>
                                </div>
                                <div className="title_no_a_22 t_comment">
                                    <sup>“</sup>Sed perspiciatis unonis
                                    este natus error sit volutate accusantium dolor laudant totam rem aperiam
                                    eaupsa abillo inven veritatis
                                    <sub>“</sub></div>
                                <div className="box">
                                    <h6>Jacob Leonardo</h6>
                                    <p>
                                        <i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star empty" /><i className="fa fa-star empty" /></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial_box type_two ">
                                <div className="auth d-flex align-items-center clearfix">
                                    <div className="image_box">
                                        <img src="/assets/images/testimonial/test-3-min.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="cont">
                                        <h4 className="title_no_a_24">Fleix Everard</h4>
                                        <p>HR, Blue Soft Sol</p>
                                    </div>
                                </div>
                                <div className="title_no_a_22 t_comment">
                                    <sup>“</sup>Sed perspiciatis unonis
                                    este natus error sit volutate accusantium dolor laudant totam rem aperiam
                                    eaupsa abillo inven veritatis
                                    <sub>“</sub></div>
                                <div className="box">
                                    <h6>Jacob Leonardo</h6>
                                    <p>
                                        <i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star empty" /><i className="fa fa-star empty" /></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial_box type_two ">
                                <div className="auth d-flex align-items-center clearfix">
                                    <div className="image_box">
                                        <img src="/assets/images/testimonial/test-2-min.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="cont">
                                        <h4 className="title_no_a_24">Boris Elbert</h4>
                                        <p>Green Tech</p>
                                    </div>
                                </div>
                                <div className="title_no_a_22 t_comment">
                                    <sup>“</sup>Sed perspiciatis unonis
                                    este natus error sit volutate accusantium dolor laudant totam rem aperiam
                                    eaupsa abillo inven veritatis
                                    <sub>“</sub></div>
                                <div className="box">
                                    <h6>Jacob Leonardo</h6>
                                    <p>
                                        <i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star empty" /><i className="fa fa-star empty" /></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial_box type_two ">
                                <div className="auth d-flex align-items-center clearfix">
                                    <div className="image_box">
                                        <img src="/assets/images/testimonial/test-1-min.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="cont">
                                        <h4 className="title_no_a_24">Ivor Herbert</h4>
                                        <p>Manager, Airlines</p>
                                    </div>
                                </div>
                                <div className="title_no_a_22 t_comment">
                                    <sup>“</sup>Sed perspiciatis unonis
                                    este natus error sit volutate accusantium dolor laudant totam rem aperiam
                                    eaupsa abillo inven veritatis
                                    <sub>“</sub></div>
                                <div className="box">
                                    <h6>Jacob Leonardo</h6>
                                    <p>
                                        <i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star fill" /><i className="fa fa-star empty" /><i className="fa fa-star empty" /></p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_top_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
