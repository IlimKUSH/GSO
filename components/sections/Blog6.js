import Link from "next/link"


export default function Blog6() {
    return (
        <>
            <section className="news-section position-relative bg_light_1">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="ab_img_left_bottom z_0 op_5">
                    <img src="/assets/images/bg-1.png" className="img-fluid" alt="img" />
                </div>
                <div className="container z_1 position-relative">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="section_title text-center type_one">
                                <h4 className="sm_title"> Latest News &amp; Blog</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Read Our Latest Articles</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <div className="blog_post position-relative">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_one trans hover_1_get borenable">
                                    <div className="blog_inner trans">
                                        <div className="vertical_text_1">
                                            <span className="date_tm"><i className="fi-rr-calendar" /> <time className="date published" >Dec 29,
                                                {new Date().getFullYear()}</time></span></div>
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog">
                                                <img src="/assets/images/blog/blog-3.png" alt="image" className="img-fluid" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <div className="d-flex authour align-items-center">
                                                <img src="/assets/images/gavatar.png" alt="image" className="img-fluid" />
                                                Bradley R Grady</div>
                                            <h4 className="title_22">
                                                <Link href="/blog">Create
                                                    An Information Way Architecture Easy</Link></h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                                            </p>
                                            <Link href="/blog" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_one trans hover_1_get borenable">
                                    <div className="blog_inner trans">
                                        <div className="vertical_text_1">
                                            <span className="date_tm"><i className="fi-rr-calendar" /> <time className="date published" >Dec 29,
                                                {new Date().getFullYear()}</time></span></div>
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog">
                                                <img src="/assets/images/blog/blog-2.png" alt="image" className="img-fluid" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <div className="d-flex authour align-items-center">
                                                <img src="/assets/images/gavatar.png" alt="image" className="img-fluid" />
                                                Bradley R Grady</div>
                                            <h4 className="title_22">
                                                <Link href="/blog">Bring
                                                    to the table win-win survival strategis</Link></h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                                            </p>
                                            <Link href="/blog" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_one trans hover_1_get borenable">
                                    <div className="blog_inner trans">
                                        <div className="vertical_text_1">
                                            <span className="date_tm"><i className="fi-rr-calendar" /> <time className="date published" >Dec 29,
                                                {new Date().getFullYear()}</time></span></div>
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog">
                                                <img src="/assets/images/blog/blog-1.png" alt="image" className="img-fluid" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <div className="d-flex authour align-items-center">
                                                <img src="/assets/images/gavatar.png" alt="image" className="img-fluid" />
                                                Jason P Laforce</div>
                                            <h4 className="title_22">
                                                <Link href="/blog">Building
                                                    Web Layouts For Dual Foldable Devices</Link></h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                                            </p>
                                            <Link href="/blog" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ab_img_right_top z_0">
                    <img src="/assets/images/line.png" className="img-fluid" alt="img" />
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
