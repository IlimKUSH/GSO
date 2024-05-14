import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import useAxios from "@/hooks/useAxios";
import {useLocale} from "next-intl";

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
    const locale = useLocale()
    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/offer/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })
    const data = response?.results[0]

    return (
        <>
            <section className="what-we-offer bg_light_2" id="offers">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-12">
                            <div className="section_title type_four">
                                <h4 className="sm_title"> {data?.["title_" + locale]}</h4>
                                <div className="title_whole">
                                    <h2 className="title"> {data?.["subtitle_" + locale]}</h2>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="position-relative position_p_relative">
                                {data?.["description_" + locale]}
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
                                    {data?.offer_list?.map((offerItem) => (
                                        <SwiperSlide key={offerItem.id} className="process_box  type_two hover_1_get color_two">
                                            <div className="image_box hover_1">
                                                <img src={offerItem.background_photo} alt="service" className="img-fluid" />
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                                <div className="icon trans">
                                                    <i className=" flaticon-business-trip trans" />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="title_22">
                                                    <Link href="#offers">
                                                        {offerItem?.["title_" + locale]}
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    {offerItem?.["description_" + locale]}
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
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
