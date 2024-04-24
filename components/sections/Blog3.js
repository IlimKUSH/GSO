import Link from "next/link"
import useAxios from "@/hooks/useAxios";
import {useLocale, useTranslations} from "next-intl";


export default function Blog3() {
    const t =useTranslations()
    const locale = useLocale()
    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/blogPost/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })
    const data = response?.results[0]

    return (
        <>
            <section id="news" className="news-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="section_title text-center type_four">
                                <h4 className="sm_title"> {data?.["title_" + locale]}</h4>
                                <div className="title_whole">
                                    <h2 className="title"> {data?.["subtitle_" + locale]}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_30" />
                    {/*-============spacing==========-*/}
                    <div className="blog_post position-relative">
                        <div className="row">
                            {data?.client_list?.map((client) => (
                                <div key={client.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div
                                        className="blog_box type_two type_three type_four trans hover_1_get hover_1 color_two">
                                        <img src={client.featured_image} className="img-fluid" alt="blog"/>
                                        <div className="oh ho_1"/>
                                        <div className="oh ho_2"/>
                                        <div className="oh ho_3"/>
                                        <div className="oh ho_4"/>
                                        <div className="blog_inner trans">
                                            <div className="content">
                                                <div className="d-flex top_c align-items-center">
                                                <span className="date_tm"><i className="fi-rr-calendar"/>
                                                    <time className="date published">
                                                        {client.publish_date}
                                                    </time>
                                                </span>
                                                </div>
                                                <h4 className="title_22">
                                                    <Link href="/blog">
                                                        {client?.["title_" + locale]}
                                                    </Link>
                                                </h4>
                                                <p className="descs">
                                                    {client?.["content_" + locale]}
                                                </p>
                                                <div className="bottm_contet d-flex align-items-center">
                                                    <div className="d-flex authour align-items-center">
                                                        <img src="/assets/images/gavatar.png" className="gav"
                                                             alt="blog"/>
                                                        {client?.["author_" + locale]}
                                                    </div>
                                                    <Link href="/blog" className="rd_more">
                                                        {t("Read more")} <i className="fi-rr-arrow-small-right"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
