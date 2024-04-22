import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogStyle1() {

    return (
        <>
            <Layout breadcrumbTitle="Blog">
                <div className="blog-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <section className="blog_post position-relative">
                                    <div className="row">
                                        <BlogPost showItem={6} style={2} showPagination />
                                    </div>
                                </section>
                            </div>
                            {/* #sidebat */}
                            <div className="col-lg-4 col-md-12 pd_left_70">
                                <div className="widget-area">
                                    <div className="blog_siderbar side_bar ">
                                        <div className="sidebar-widget mb-50">
                                            <div className="widget_search">
                                                <form role="search" method="get" action="#" className="wp-block-search__button-inside wp-block-search__icon-button wp-block-search">
                                                    <label>Search</label>
                                                    <div className="wp-block-search__inside-wrapper ">
                                                        <input type="search" className="wp-block-search__input" name="s" placeholder="Enter the Keywords here ..." required />
                                                        <button type="submit" className="wp-block-search__button has-icon wp-element-button" aria-label="Search">
                                                            <svg className="search-icon" viewBox="0 0 24 24" width={24} height={24}>
                                                                <path fill="#fff" d="M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="sidebar-widget mb-50">
                                            <div className="widget widget_box  vankine_widget_recented_entries">
                                                <h4 className="widget-title">Recent Posts</h4>
                                                <div className="post_foo_box">
                                                    <div className="foo_post_content">
                                                        <Link className="image_box trans" href="/blog-details">
                                                            <img src="/assets/images/blog/blog-9-min.png" className="img-fluid" alt="img" />
                                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                        <div className="content">
                                                            <h4 className="title_18">
                                                                <Link href="/blog-details">Former insures only the marine perils</Link>
                                                            </h4>
                                                            <span className="date_tm">
                                                                <i className="fi-rr-calendar" />
                                                                <time className="date published" >Jan 3, {new Date().getFullYear()}</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="foo_post_content">
                                                        <Link className="image_box trans" href="/blog-details">
                                                            <img src="/assets/images/blog/blog-8-min.png" className="img-fluid" alt="img" />
                                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                        <div className="content">
                                                            <h4 className="title_18">
                                                                <Link href="/blog-details">Insurance covers risk of fire absence</Link>
                                                            </h4>
                                                            <span className="date_tm">
                                                                <i className="fi-rr-calendar" />
                                                                <time className="date published" >Jan 3, {new Date().getFullYear()}</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="foo_post_content">
                                                        <Link className="image_box trans" href="/blog-details">
                                                            <img src="/assets/images/blog/blog-7-min.png" className="img-fluid" alt="img" />
                                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                        <div className="content">
                                                            <h4 className="title_18">
                                                                <Link href="/blog-details">Erving the interests of our clients</Link>
                                                            </h4>
                                                            <span className="date_tm">
                                                                <i className="fi-rr-calendar" />
                                                                <time className="date published" >Jan 3, {new Date().getFullYear()}</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="foo_post_content">
                                                        <Link className="image_box trans" href="/blog-details">
                                                            <img src="/assets/images/blog/blog-6.png" className="img-fluid" alt="img" />
                                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                        <div className="content">
                                                            <h4 className="title_18">
                                                                <Link href="/blog-details">Guide To Audio Visual With JavaScript GSA</Link>
                                                            </h4>
                                                            <span className="date_tm">
                                                                <i className="fi-rr-calendar" />
                                                                <time className="date published" >Dec 29, {new Date().getFullYear()}</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="foo_post_content">
                                                        <Link className="image_box trans" href="/blog-details">
                                                            <img src="/assets/images/blog/blog-5.png" className="img-fluid" alt="img" />
                                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                        <div className="content">
                                                            <h4 className="title_18">
                                                                <Link href="/blog-details">Building Web Layouts For Dual Foldable Devices</Link>
                                                            </h4>
                                                            <span className="date_tm">
                                                                <i className="fi-rr-calendar" />
                                                                <time className="date published" >Dec 29, {new Date().getFullYear()}</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-widget mb-50">
                                            <div className="widget widget_box  widget_block">
                                                <h4 className="widget-title">Popular Tags</h4>
                                                <div className="wp-widget-group__inner-blocks">
                                                    <p className="wp-block-tag-cloud">
                                                        <Link href="/blog-details" className="tag-cloud-link" style={{ fontSize: '8pt' }} aria-label="Business (2 items)">Business</Link>
                                                        <Link href="/blog-details" className="tag-cloud-link" style={{ fontSize: '18.266666666667pt' }} aria-label="Car (4 items)">Car</Link>
                                                        <Link href="/blog-details" className="tag-cloud-link" style={{ fontSize: '13.6pt' }} aria-label="Fire (3 items)">Fire</Link>
                                                        <Link href="/blog-details" className="tag-cloud-link" style={{ fontSize: '22pt' }} aria-label="Health (5 items)">Health</Link>
                                                        <Link href="/blog-details" className="tag-cloud-link" style={{ fontSize: '13.6pt' }} aria-label="Insurance (3 items)">Insurance</Link>
                                                        <Link href="/blog-details" className="tag-cloud-link" style={{ fontSize: '18.266666666667pt' }} aria-label="Medical (4 items)">Medical</Link>
                                                        <Link href="/blog-details" className="tag-cloud-link" style={{ fontSize: '8pt' }} aria-label="Travel (2 items)">Travel</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-widget mb-50">
                                            <div className="widget widget_box  widget_about_vankine">
                                                <div className="avout_us_widgets widget_box">
                                                    <img src="/assets/images/blog/widget-about-bg.jpg" alt="image" className="bg_images img-fluid" />
                                                    <div className="widget_content">
                                                        <div className="cont">
                                                            <div className="title_no_a_26">Find An <br /> Insurance <br /> Agent </div>
                                                            <Link className="theme_btn" href="https://themepanthers.com/wp/vankine/v1/contact/"> Contact Us <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            </Link>
                                                        </div>
                                                        <img src="/assets/images/blog/widget-about-man.png" alt="image" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            {/* #sidebat */}
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                </div>


            </Layout>
        </>
    )
}