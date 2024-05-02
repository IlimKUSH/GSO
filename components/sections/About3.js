import dynamic from 'next/dynamic'

import Link from 'next/link'
import VideoBox from "../elements/VideoBox"
import {useLocale, useTranslations} from "next-intl";
import useAxios from "@/hooks/useAxios";
import {Fragment} from "react";
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})


export default function About3() {
    const locale = useLocale()
    const t = useTranslations()
    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/about/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })
    const data = response?.results[0]

    return (
        <>
            <section className="about-section" id="about">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 pd_right_60">
                            <div className="section_title type_four">
                                <h4 className="sm_title"> {data?.["title_" + locale]} </h4>
                                <div className="title_whole">
                                    <h2 className="title"> {data?.["subtitle_" + locale]} </h2>
                                </div>
                                <p>
                                    {data?.["description_" + locale]}
                                </p>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_25" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative">
                                <ul className="list_box list color_two">
                                    {data?.pros?.map((pro) => (
                                        <li key={pro.id}>
                                            <div className="d-flex align-items-center">
                                                <div className="icon trans">
                                                    <i aria-hidden="false" className="fas fa-check-circle"/></div>
                                                <Link className="links" href="#">
                                                    {pro?.["description_" + locale]}
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_35" />
                            {/*-============spacing==========-*/}
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_25" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-4 col-md-8 mr_left_minus_40">
                            <div className="image_video_box_only type_two color_two">
                                <div className="image one">
                                    <img src={data?.photo} alt="img" className="imf-fluid" />
                                    <div className="fun_facts type_two">
                                        <h6 className="title_no_a_18">25</h6>
                                        <h6 className="title_no_a_26">Лет <br />
                                            опыта</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 pd_left_30">
                            {data?.features?.map((feature) => (
                                <Fragment key={feature.id}>
                                    <div  className="fun_facts type_one color_two text-start">
                                        <h4>

                                            <CounterUp count={+feature.feature_number} time={1} />
                                            <small>
                                                + </small></h4>
                                        <h6 className="title_no_a_18">{feature?.["description_" + locale]}</h6>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    <div className="divider" />
                                    <div className="mr_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_90" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
