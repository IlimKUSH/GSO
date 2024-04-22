import Link from "next/link"
import useAxios from "@/hooks/useAxios";
import {useLocale, useTranslations} from "next-intl";

export default function Cta1() {
    const t = useTranslations();
    const locale = useLocale()
    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/cta/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })
    const data = response?.results[0]

    return (
        <>
            <section className="call-to-action-section position-relative bg_op_1" style={{ backgroundImage: `url(${data?.background_photo})` }}>
                <div className="background_overlay bg_11 z_0" />
                {/*-============spacing==========-*/}
                <div className="pd_top_50" />
                {/*-============spacing==========-*/}
                <div className="large-container">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="image-layer position-relative z_1">
                                <img src={data?.icon1} className="img-fluid" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_title color_white">
                                <div className="title_whole">
                                    <h2 className="title">
                                        {data?.["title_" + locale]}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="theme_btn_all text-md-center">
                                <Link href="#" className="theme_btn big color_white_two rotate">
                                    {t("Leave a request")} <span> <i className="fi-rr-arrow-small-up" /></span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="image-layer position-relative z_1">
                                <img src={data?.icon2} className="img-fluid" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
