import Link from "next/link"
import VideoBox from "../elements/VideoBox"
import {useLocale, useTranslations} from "next-intl";
import useAxios from "@/hooks/useAxios";
import {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

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

export default function Blog7() {

    return (
        <>
            <section className="container">
                <div className="call_to_action style_two bg_op_1 mr_bottom_70">
                    <Swiper {...swiperOptions} className="owl_nav_block owl_dots_none theme_carousel">
                        <div className="row">
                            <SwiperSlide className="slide-item-content">
                                <h6 style={{color: "#ffffff"}}>1. ОАО «Государственная страховая организация» <br/>
                                    Кол центр:
                                    0(312) 54-54-00,
                                    0(553) 54-54-00,
                                    0(777) 54-54-00,
                                    0(707) 54-54-00 <br/>

                                    Email: info@gso.kg <br/>
                                    Головной офис: г. Бишкек, пр. Ч. Айтматова 1, строение 2, 4 этаж
                                </h6>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item-content">
                                <h6 style={{color: "#ffffff"}}>2. Чуй-Бишкекский филиал ОАО «ГСО» <br/>
                                    0(312) 54-43-20
                                    0(312) 54-43-22 <br/>

                                    Email: bishkek@gso.kg <br/>
                                    г. Бишкек, пр. Ч. Айтматова 1, строение 2, 4 этаж, каб. 425
                                </h6>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item-content">
                                <h6 style={{color: "#ffffff"}}>3. Ошский филиал ОАО «ГСО» <br/>
                                    0(3222) 5-52-31 <br/>
                                    Email: osh@gso.kg < br/>
                                    г. Ош ул.Ленина 221, каб.26,27
                                </h6>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item-content">
                                <h6 style={{color: "#ffffff"}}>4. Иссык-Кульский филиал ОАО «ГСО» <br/>
                                    0(3922) 5-49-10 <br/>
                                    Email: ik@gso.kg <br/>

                                    г. Каракол ул.Гебзе 124
                                </h6>
                            </SwiperSlide>

                            <SwiperSlide className="slide-item-content">
                                <h6 style={{color: "#ffffff"}}>5. Таласский филиал ОАО «ГСО» <br/>
                                    0(3422) 5-20-60 <br/>
                                    Email: talas@gso.kg <br/>
                                    г. Талас ул. Бердике-Баатыра 295 А
                                </h6>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item-content">
                                <h6 style={{color: "#ffffff"}}>6. Джалал-Абадский филиал ОАО «ГСО» <br/>
                                    0(3722) 2-41-01
                                    0(3722) 2-41-12 <br/>
                                    Email: ja@gso.kg <br/>
                                    г. Джалал-Абад ул. Ж.Бакиева 16г.
                                </h6>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item-content">
                                <h6 style={{color: "#ffffff"}}>7. Нарынский филиал ОАО «ГСО» <br/>
                                    0(3522) 5-71-01 <br/>
                                    Email: naryn@gso.kg <br/>
                                    г. Нарын ул.Ленина 76
                                </h6>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item-content">
                                <h6 style={{color: "#ffffff"}}>8. Баткенский филиал ОАО «ГСО» <br/>
                                    + 996 551 766 262
                                    + 996 777 769 051 <br/>
                                    Email: batken@gso.kg <br/>
                                    г.Баткен ул.Нургазыева 10
                                </h6>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </section>

        </>
    )
}
