import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import useAxios from "@/hooks/useAxios";

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
    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/client/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })
    const data = response?.results[0]

    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel ">
                {data?.client_list?.map((client) => (
                    <SwiperSlide key={client.id} className="image">
                        <img src={process.env.NEXT_PUBLIC_BACKEND_URL + client.icon} className="img-fluid w_auto m-auto" alt="img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
