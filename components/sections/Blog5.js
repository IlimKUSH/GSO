import Link from "next/link"


export default function Blog5() {
    return (
        <>
            <section className="blog-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_one">
                                <h4 className="sm_title"> Latest News &amp; Blog</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Read Our Latest Articles</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                        </div>
                    </div>
                    <section className="blog_post position-relative   ajax_posts_enabled ">
                        <div className="row ajaxcontainer">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6  ajax-wrapper">
                                <div className="blog_box type_two type_three trans hover_1_get">
                                    <div className="blog_inner trans">
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog">
                                                <img src="/assets/images/blog/blog-9-min.png" className="img-fluid" alt="blog" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <span className="date_tm"><i className="fi-rr-calendar" /> <time className="date published" >Jan 3,
                                                {new Date().getFullYear()}</time></span> <small className="comments">
                                                <i className="far fa-comment-dots" />
                                                <Link href="/blog#respond" className="Comments are Closed">Post a Comment</Link></small>
                                            <h4 className="title_22">
                                                <Link href="/blog">Former
                                                    insures only the marine perils</Link></h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem…</p>
                                            <div className="bottm_contet d-flex align-items-center">
                                                <div className="d-flex authour align-items-center">
                                                    <img src="/assets/images/gavatar.png" className="img-fluid" alt="blog" />
                                                    Bradley R Grady
                                                </div>
                                                <Link href="/blog" className="rd_more">
                                                    Read More <i className="fi-rr-arrow-small-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6  ajax-wrapper">
                                <div className="blog_box type_two type_three trans hover_1_get">
                                    <div className="blog_inner trans">
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog">
                                                <img src="/assets/images/blog/blog-8-min.png" className="img-fluid" alt="blog" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <span className="date_tm"><i className="fi-rr-calendar" />
                                                <time className="date published" >
                                                    Jan 3, {new Date().getFullYear()}
                                                </time>
                                            </span>
                                            <small className="comments">
                                                <i className="far fa-comment-dots" />
                                                <Link href="/blog#respond" className="Comments are Closed">Post a Comment</Link>
                                            </small>
                                            <h4 className="title_22">
                                                <Link href="/blog">
                                                    Insurance covers risk of fire absence
                                                </Link>
                                            </h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem…
                                            </p>
                                            <div className="bottm_contet d-flex align-items-center">
                                                <div className="d-flex authour align-items-center">
                                                    <img src="/assets/images/gavatar.png" className="img-fluid" alt="blog" />
                                                    Bradley R Grady
                                                </div>
                                                <Link href="/blog" className="rd_more">
                                                    Read More <i className="fi-rr-arrow-small-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6  ajax-wrapper">
                                <div className="blog_box type_two type_three trans hover_1_get">
                                    <div className="blog_inner trans">
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog">
                                                <img src="/assets/images/blog/blog-7-min.png" className="img-fluid" alt="blog" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <span className="date_tm"><i className="fi-rr-calendar" />
                                                <time className="date published" >
                                                    Jan 3, {new Date().getFullYear()}
                                                </time>
                                            </span>
                                            <small className="comments">
                                                <i className="far fa-comment-dots" />
                                                <Link href="/blog#respond" className="Comments are Closed">
                                                    Post a Comment
                                                </Link>
                                            </small>
                                            <h4 className="title_22">
                                                <Link href="/blog">
                                                    Erving the interests of our clients
                                                </Link>
                                            </h4>
                                            <p className="descs">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem…</p>
                                            <div className="bottm_contet d-flex align-items-center">
                                                <div className="d-flex authour align-items-center">
                                                    <img src="/assets/images/gavatar.png" className="img-fluid" alt="blog" />
                                                    Bradley R Grady
                                                </div>
                                                <Link href="/blog" className="rd_more">
                                                    Read More <i className="fi-rr-arrow-small-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_top_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
