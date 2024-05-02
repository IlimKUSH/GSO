import Link from "next/link"
import useAxios from "@/hooks/useAxios";
import {useLocale} from "next-intl";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";

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

export default function Service5() {
    const locale = useLocale()
    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/service/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })
    const data = response?.results[0]

    const chunkArray = (array, size) => {
        return array?.reduce((chunks, el, i) => {
            if (i % size === 0) {
                chunks.push([el]);
            } else {
                chunks[chunks.length - 1].push(el);
            }
            return chunks;
        }, []);
    };

    const serviceChunks = chunkArray(data?.service_list, 6);

    return (
        <>
            <section id="services" className="service-section position-relative bg_op_1" style={{ backgroundImage: `url(${data?.background_photo})` }}>
                <div className="background_overlay bg_10 z_0" />
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <div className="section_title text-center  color_white">
                                <h4 className="sm_title">{data?.["title_" + locale]}</h4>
                                <div className="title_whole">
                                    <h2 className="title">
                                        {data?.["description_" + locale]}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <section className="service_post position-relative">
                        <Swiper {...swiperOptions} className="owl_nav_block owl_dots_none theme_carousel">
                            {serviceChunks?.map((chunk, idx) => (
                                <SwiperSlide key={idx} className="slide-item-content">
                                    <div className="row">
                                        {chunk?.map((serviceItem) => (
                                            <div key={serviceItem.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                                <div className="service_box type_four color_two hover_1_get hover_1">
                                                    <div className="oh ho_1"/>
                                                    <div className="oh ho_2"/>
                                                    <div className="oh ho_3"/>
                                                    <div className="oh ho_4"/>
                                                    <div className="content_box trans">
                                                        <div className="top">
                                                            <div className="icon trans">
                                                                <i className=" flaticon-insurance-2 trans"/></div>
                                                            <div className="steps trans">{serviceItem.id}</div>
                                                            <h4 className="title_24 trans">
                                                                <Link href="/service">
                                                                    {serviceItem?.["title_" + locale]}
                                                                </Link>
                                                            </h4>
                                                        </div>
                                                        <div className="line_box">
                                                            <div className="line"/>
                                                        </div>
                                                        <div className="bottom">
                                                            <p className="trans">
                                                                {serviceItem?.["description_" + locale]}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="owl-nav">
                                <button type="button" role="presentation" className="owl-prev">
                                    <i className="fi-rs-arrow-small-left"/>
                                </button>
                                <button type="button" role="presentation" className="owl-next">
                                    <i className="fi-rs-arrow-small-right"/>
                                </button>
                            </div>
                        </Swiper>
                    </section>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_80"/>
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
