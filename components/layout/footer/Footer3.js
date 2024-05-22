import Link from "next/link"
import {useLocale, useTranslations} from "next-intl";
import useAxios from "@/hooks/useAxios";

export default function Footer3({ data }) {
    const t = useTranslations()
    const locale = useLocale()
    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/blogPost/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })
    const blogs = response?.results[0]

    const lastBlogs = blogs?.client_list.slice(-3)

    return (
        <>
            <footer className="footer style_one style_three bg_op_4"
                    style={{backgroundImage: 'url(assets/images/Map.png)' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                {/*footer content top*/}
                <section className="md_content position-relative z_99">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="logo_box">
                                        <Link href="#" className="logo navbar-brand">
                                            <img src={`/assets/images/footer/footer_logo_${locale}.svg`} alt="GSO" className="logo_default" />
                                        </Link>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_35" />
                                    {/*-============spacing==========-*/}
                                    <div className="position-relative color_white">
                                        {t("footer1")}
                                        <br />
                                        {t("footer2")}
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_25" />
                                    {/*-============spacing==========-*/}
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 m-auto">
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer_widgets_box pd_bottom_30 pd_top_10">
                                    <div className="fwidget_title">
                                        <h2 className="title color_white"> Последние новости </h2>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_35" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <div className="post_foo_box">
                                        {lastBlogs?.map((blog) => (
                                            <div className="foo_post_content" key={blog.id}>
                                                <Link className="image_box trans" href={`/blog/${blog.id}`}>
                                                    <img className="img-fluid trans"
                                                         src={blog.featured_image} alt="blog"/>
                                                    <svg className="trans" width={55} height={55} viewBox="0 0 55 55"
                                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx={28} cy={27} r={20} fill="white"/>
                                                        <circle cx="27.5" cy="27.5" r="27.5" fill="white"
                                                                fillOpacity="0.1"/>
                                                        <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375"
                                                              stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round"
                                                              strokeLinejoin="round"/>
                                                    </svg>
                                                </Link>
                                                <div className="content">
                                                    <h4 className="title_18">
                                                        <Link href={`/blog  /${blog.id}`} className="color_white">
                                                            {blog["title_" + locale]}
                                                        </Link>
                                                    </h4>
                                                    <p className="color_white"> {blog["author_" + locale]} </p>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_50" />
                    {/*-============spacing==========-*/}
                </section>
                <section className="mottom_content  position-relative z_99">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="position-relative">
                                    <ul className="list_box linline">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="icon trans">
                                                    <img src="/assets/images/shield.svg" className="img-fluid" alt="img" />
                                                </div>
                                                <Link className="links color_white" href="#">
                                                {t("footer3")} {new Date().getFullYear()}. {t("footer4")}
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 text-md-end">
                                <div className="position-relative">
                                    <ul className="list_box linline">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <Link className="links color_white" href="#">
                                                    {data?.["location_" + locale]}
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
            </footer>

        </>
    )
}
