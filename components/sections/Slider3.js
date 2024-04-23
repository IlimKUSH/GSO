import Link from "next/link"

import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import useAxios from "@/hooks/useAxios";
import {useLocale, useTranslations} from "next-intl";

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
    const t = useTranslations()
    const locale = useLocale()
    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/slider/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })
    const data = response?.results

    return (
        <>
            <section className="slider style_three">
                <Swiper {...swiperOptions} className="owl_nav_block owl_dots_none theme_carousel">
                    {data?.map((slide) => (
                        <SwiperSlide key={slide.id} className="slide-item-content">
                            <div className="image-layer" style={{ backgroundImage: `url(${slide.background_photo})` }} />
                            <div className="slide-item content_left">
                                <div className="auto-container">
                                    <div className="row align-items-center">
                                        <div className="col-md-12 text-center">
                                            <div className="slider_content">
                                                <h6 className="animate_up">
                                                    {slide?.[`title_${locale}`]}
                                                </h6>
                                                <h1 className="animate_left">
                                                    {slide?.[`description_${locale}`]}
                                                </h1>
                                                <div className="button_all animate_down">
                                                    <Link href="#" className="theme_btn color_white  animated">
                                                        {t("Read more")}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

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
