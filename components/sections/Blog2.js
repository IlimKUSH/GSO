import Link from "next/link"

export default function Blog2() {
    return (
        <>
            <section className="blog-section bg_light_2 position-relative">
                <div className="ab_img_right_top z_1">
                    <img src="/assets/images/line.png" className="img-fluid" alt="img" />
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_two">
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
                        <div className="row gutter_40px">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_one color_two trans hover_1_get ">
                                    <div className="blog_inner trans">
                                        <div className="vertical_text_1">
                                            <span className="date_tm">
                                                <i className="fi-rr-calendar" />
                                                <time className="date published" >Jan 3, {new Date().getFullYear()}</time>
                                            </span>
                                        </div>
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog">
                                                <img src="/assets/images/blog/blog-9-min.png" className="img-fluid" alt="img" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <div className="d-flex authour align-items-center">
                                                <img src="/assets/images/gavatar.png" alt="gavatar" className="img-fluid" />
                                                Bradley R Grady
                                            </div>
                                            <h4 className="title_22">
                                                <Link href="/blog">
                                                    Former insures only the marine perils
                                                </Link>
                                            </h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                                            </p>
                                            <Link href="/blog" className="rd_more">
                                                Read More <i className="fi-rr-arrow-small-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_one color_two trans hover_1_get ">
                                    <div className="blog_inner trans">
                                        <div className="vertical_text_1">
                                            <span className="date_tm">
                                                <i className="fi-rr-calendar" />
                                                <time className="date published" >Jan 3, {new Date().getFullYear()}</time>
                                            </span>
                                        </div>
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog">
                                                <img src="/assets/images/blog/blog-8-min.png" className="img-fluid" alt="img" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <div className="d-flex authour align-items-center">
                                                <img src="/assets/images/gavatar.png" alt="gavatar" className="img-fluid" />
                                                Jason P Laforce
                                            </div>
                                            <h4 className="title_22">
                                                <Link href="/blog">
                                                    Insurance covers risk of fire absence
                                                </Link>
                                            </h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                                            </p>
                                            <Link href="/blog" className="rd_more">
                                                Read More <i className="fi-rr-arrow-small-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_one color_two trans hover_1_get ">
                                    <div className="blog_inner trans">
                                        <div className="vertical_text_1">
                                            <span className="date_tm"><i className="fi-rr-calendar" />
                                                <time className="date published" >Jan 3, {new Date().getFullYear()}</time>
                                            </span>
                                        </div>
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog">
                                                <img src="/assets/images/blog/blog-7-min.png" className="img-fluid" alt="img" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <div className="d-flex authour align-items-center">
                                                <img src="/assets/images/gavatar.png" alt="gavatar" className="img-fluid" />
                                                Bradley R Grady
                                            </div>
                                            <h4 className="title_22">
                                                <Link href="/blog">Erving
                                                    the interests of our clients</Link></h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                                            </p>
                                            <Link href="/blog" className="rd_more">
                                                Read More <i className="fi-rr-arrow-small-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

