import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
}
export default function ClientSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel ">
                <SwiperSlide className="image">
                    <img src="/assets/images/client-1.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/client-2.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/client-3.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/client-4.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/client-5.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/client-6.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/client-4.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/client-5.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src="/assets/images/client-6.png" className="img-fluid w_auto m-auto" alt="img" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
