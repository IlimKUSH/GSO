
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper"

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
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
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
export default function Service4() {
    return (
        <>
            <section className="service-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_two">
                                <h4 className="sm_title"> Vinkine Popular Services</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Amazing Insurance Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...swiperOptions} className="service_post style_one color_two position-relative position_four nav_true dot_true">
                                <SwiperSlide className="service_box type_one color_two">
                                    <a href="service.html">
                                        <div className="image">
                                            <img className="img-fluid" src="assets/images/service/service-5-min.jpg" alt="Car Insurance" />
                                        </div>
                                    </a>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-car-insurance-1 trans" />
                                            </div>
                                            <div className="steps trans">5</div>
                                            <h4 className="title_24 trans">
                                                <a href="service.html">
                                                    Car Insurance
                                                </a>
                                            </h4>
                                            <p className="trans">
                                                Pleasant experience one has to consider the
                                                safety factor equally well.
                                            </p>
                                            <a href="service.html" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="service_box type_one color_two">
                                    <a href="service.html">
                                        <div className="image">
                                            <img className="img-fluid" src="assets/images/service/service-6-min.jpg" alt="Car Insurance" />
                                        </div>
                                    </a>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-marriage trans" /></div>
                                            <div className="steps trans">6</div>
                                            <h4 className="title_24 trans">
                                                <a href="service.html">
                                                    Marriage insurance
                                                </a>
                                            </h4>
                                            <p className="trans">
                                                We cover you for wedding cancel, material damage
                                                to the property</p>
                                            <a href="service.html" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="service_box type_one color_two">
                                    <a href="service.html/">
                                        <div className="image">
                                            <img className="img-fluid" src="assets/images/service/service-7-min.jpg" alt="Car Insurance" />
                                        </div>
                                    </a>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-business-trip trans" />
                                            </div>
                                            <div className="steps trans">7</div>
                                            <h4 className="title_24 trans">
                                                <a href="service.html/">
                                                    Business Insurance
                                                </a>
                                            </h4>
                                            <p className="trans">
                                                Covers the loss of income that a business
                                                suffers after a disaster
                                            </p>
                                            <a href="service.html" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="service_box type_one color_two">
                                    <a href="service.html">
                                        <div className="image">
                                            <img className="img-fluid" src="assets/images/service/service-8-min.jpg" alt="Car Insurance" />
                                        </div>
                                    </a>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-health-insurance trans" />
                                            </div>
                                            <div className="steps trans">8</div>
                                            <h4 className="title_24 trans">
                                                <a href="service.html">
                                                    Medical Insurance
                                                </a>
                                            </h4>
                                            <p className="trans">
                                                Additional benefits such as health check up,
                                                wellness programs…
                                            </p>
                                            <a href="service.html" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="service_box type_one color_two">
                                    <a href="service.html">
                                        <div className="image">
                                            <img className="img-fluid" src="assets/images/service/service-1-min-1.jpg" alt="Car Insurance" />
                                        </div>
                                    </a>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-insurance-2 trans" />
                                            </div>
                                            <div className="steps trans">1</div>
                                            <h4 className="title_24 trans">
                                                <a href="service.html">
                                                    Life insurance
                                                </a>
                                            </h4>
                                            <p className="trans">
                                                Contract between a life insurance company and a
                                                policy owner. A life…
                                            </p>
                                            <a href="service.html" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="service_box type_one color_two">
                                    <a href="service.html">
                                        <div className="image">
                                            <img className="img-fluid" src="assets/images/service/service-2-min-1.jpg" alt="Car Insurance" />
                                        </div>
                                    </a>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-travel-insurance trans" />
                                            </div>
                                            <div className="steps trans">2</div>
                                            <h4 className="title_24 trans">
                                                <a href="service.html">
                                                    Travel Insurance
                                                </a>
                                            </h4>
                                            <p className="trans">
                                                A travel insurance policy is a versatile plan
                                                that offers financial compensation…
                                            </p>
                                            <a href="service.html" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </a>
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
