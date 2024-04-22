import Link from "next/link"


export default function Blog4() {
    return (
        <>
            <section className="blog-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_five">
                                <h4 className="sm_title"> Popular Clients</h4>
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
                                <div className="blog_box type_two type_three type_five  color_two trans hover_1_get">
                                    <div className="blog_inner trans">
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-9-min.png" className="img-fluid" alt="blog" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <span className="date_tm"><i className="fi-rr-calendar" /> <time className="date published" >Jan
                                                3, {new Date().getFullYear()}</time></span>
                                            <div className="d-flex authour align-items-center">
                                                <img src="/assets/images/gavatar.png" className="img-fluid" alt="gavatar" />
                                                Bradley R Grady</div>
                                            <h4 className="title_22">
                                                <Link href="/blog-details">Former
                                                    insures only the marine perils</Link></h4>
                                            <div className="bottm_contet d-flex align-items-center">
                                                <Link href="/blog-details" className="theme_btn">Read More <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                </Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_two type_three type_five color_two trans hover_1_get">
                                    <div className="blog_inner trans">
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-8-min.png" className="img-fluid" alt="blog" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <span className="date_tm"><i className="fi-rr-calendar" /> <time className="date published" >Jan
                                                3, {new Date().getFullYear()}</time></span>
                                            <div className="d-flex authour align-items-center">
                                                <img src="/assets/images/gavatar.png" className="img-fluid" alt="gavatar" />
                                                Jason P Laforce</div>
                                            <h4 className="title_22">
                                                <Link href="/blog-details">Insurance
                                                    covers risk of fire absence</Link></h4>
                                            <div className="bottm_contet d-flex align-items-center">
                                                <Link href="/blog-details" className="theme_btn">Read More <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                </Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="blog_box type_two type_three type_five color_two trans hover_1_get">
                                    <div className="blog_inner trans">
                                        <div className="image_box trans hover_1">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-7-min.png" className="img-fluid" alt="blog" />
                                            </Link>
                                            <div className="oh ho_1" />
                                            <div className="oh ho_2" />
                                            <div className="oh ho_3" />
                                            <div className="oh ho_4" />
                                        </div>
                                        <div className="content">
                                            <span className="date_tm"><i className="fi-rr-calendar" /> <time className="date published" >Jan
                                                3, {new Date().getFullYear()}</time></span>
                                            <div className="d-flex authour align-items-center">
                                                <img src="/assets/images/gavatar.png" className="img-fluid" alt="gavatar" />
                                                Bradley R Grady</div>
                                            <h4 className="title_22">
                                                <Link href="/blog-details">Erving
                                                    the interests of our clients</Link></h4>
                                            <div className="bottm_contet d-flex align-items-center">
                                                <Link href="/blog-details" className="theme_btn">Read More <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                </Link></div>
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
