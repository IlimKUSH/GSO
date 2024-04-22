import Link from "next/link"

export default function Footer5({ }) {
    return (
        <>
            <footer className="footer style_one style_five">
                <section className="md_content position-relative z_99">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_160" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="logo_box">
                                        <Link href="#" className="logo navbar-brand">
                                            <img src="/assets/images/footer-logo-blue.png" alt="Vankine" className="logo_default" />
                                        </Link>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_35" />
                                    {/*-============spacing==========-*/}
                                    <div className="position-relative color_white">
                                        Sed ut perspiciatis unde omnis iste natus errors voluptatem accusantium
                                        doloremque laudantium totam
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_25" />
                                    {/*-============spacing==========-*/}
                                    <div className="newsteller_simple button_style_one">
                                        <div className="input_group">
                                            <form method="post">
                                                <div className="mc4wp-form-fields">
                                                    <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                    <input type="submit" value="Sign up" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_25" />
                                    {/*-============spacing==========-*/}
                                    <div className="social-icons">
                                        <ul>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-facebook" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-skype" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 pd_left_40">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="fwidget_title">
                                        <h2 className="title color_white"> Services </h2>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_25" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <div className="position-relative">
                                        <ul className="list_box list">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon trans">
                                                        <i className="fi-rr-arrow-small-right color_white" />
                                                    </div>
                                                    <Link className="links color_white" href="#">
                                                        House Insurance
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon trans">
                                                        <i className="fi-rr-arrow-small-right color_white" />
                                                    </div>
                                                    <Link className="links color_white" href="#">
                                                        Medical Insurance
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon trans">
                                                        <i className="fi-rr-arrow-small-right color_white" />
                                                    </div>
                                                    <Link className="links color_white" href="#">
                                                        Car Insurance
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon trans">
                                                        <i className="fi-rr-arrow-small-right color_white" />
                                                    </div>
                                                    <Link className="links color_white" href="#">
                                                        Business Insurance
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon trans">
                                                        <i className="fi-rr-arrow-small-right color_white" />
                                                    </div>
                                                    <Link className="links color_white" href="#">
                                                        Travel Insurance
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon trans">
                                                        <i className="fi-rr-arrow-small-right color_white" />
                                                    </div>
                                                    <Link className="links color_white" href="#">
                                                        Fire Insurance
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon trans">
                                                        <i className="fi-rr-arrow-small-right color_white" />
                                                    </div>
                                                    <Link className="links color_white" href="#">
                                                        Marrige Insurance
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="fwidget_title">
                                        <h2 className="title color_white"> Other Pages </h2>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_25" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <section className="post_foo_box">
                                        <div className="foo_post_content">
                                            <Link className="image_box trans" href="/blog">
                                                <img className="img-fluid trans" src="/assets/images/blog/blog-9-min.png" alt="blog" />
                                                <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx={28} cy={27} r={20} fill="white" />
                                                    <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                    <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                            <div className="content">
                                                <h4 className="title_18">
                                                    <Link href="/blog" className="color_white">
                                                        Former insures only the marine perils
                                                    </Link>
                                                </h4>
                                                <p className="color_white"> Bradley R Grady </p>
                                            </div>
                                        </div>
                                        <div className="foo_post_content">
                                            <Link className="image_box trans" href="/blog">
                                                <img className="img-fluid trans" src="/assets/images/blog/blog-8-min.png" alt="blog" />
                                                <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx={28} cy={27} r={20} fill="white" />
                                                    <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                    <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                            <div className="content">
                                                <h4 className="title_18">
                                                    <Link href="/blog" className="color_white">
                                                        Insurance covers risk of fire absence
                                                    </Link>
                                                </h4>
                                                <p className="color_white"> Jason P Laforce </p>
                                            </div>
                                        </div>
                                        <div className="foo_post_content">
                                            <Link className="image_box trans" href="/blog">
                                                <img className="img-fluid trans" src="/assets/images/blog/blog-7-min.png" alt="blog" />
                                                <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx={28} cy={27} r={20} fill="white" />
                                                    <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                    <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                            <div className="content">
                                                <h4 className="title_18">
                                                    <Link href="/blog" className="color_white">
                                                        Erving the interests of our clients
                                                    </Link>
                                                </h4>
                                                <p className="color_white"> Bradley R Grady </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="fwidget_title">
                                        <h2 className="title color_white"> Photo Gallery </h2>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_25" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <div className="g_box d-flex">
                                        <Link className="trans" href="#">
                                            <img src="/assets/images/portfolio/project-1-min.png" alt="img" className="img-fluid" />
                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link className="trans" href="#">
                                            <img src="/assets/images/portfolio/project-2-min.png" alt="img" className="img-fluid" />
                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link className="trans" href="#">
                                            <img src="/assets/images/portfolio/project-3-min.png" alt="img" className="img-fluid" />
                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link className="trans" href="#">
                                            <img src="/assets/images/portfolio/project-4-min.png" alt="img" className="img-fluid" />
                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link className="trans" href="#">
                                            <img src="/assets/images/portfolio/project-5-min.png" alt="img" className="img-fluid" />
                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link className="trans" href="#">
                                            <img src="/assets/images/portfolio/project-6-min.png" alt="img" className="img-fluid" />
                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link className="trans" href="#">
                                            <img src="/assets/images/portfolio/project-7-min.png" alt="img" className="img-fluid" />
                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link className="trans" href="#">
                                            <img src="/assets/images/portfolio/project-8-min.png" alt="img" className="img-fluid" />
                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link className="trans" href="#">
                                            <img src="/assets/images/portfolio/project-9-min.png" alt="img" className="img-fluid" />
                                            <svg className="trans" width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={28} cy={27} r={20} fill="white" />
                                                <circle cx="27.5" cy="27.5" r="27.5" fill="white" fillOpacity="0.1" />
                                                <path d="M22 33.25L33.25 22M33.25 22H24.8125M33.25 22V30.4375" stroke="#2D947A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
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
                                                    Copyright {new Date().getFullYear()}, Vankine. All Rights Reserved
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
                                                <div className="icon trans">
                                                    <i className="fi-rr-arrow-small-right" />
                                                </div>
                                                <Link className="links color_white" href="#">
                                                    About
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="icon trans">
                                                    <i className="fi-rr-arrow-small-right" />
                                                </div>
                                                <Link className="links color_white" href="#">
                                                    Services
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="icon trans">
                                                    <i className="fi-rr-arrow-small-right" />
                                                </div>
                                                <Link className="links color_white" href="#">
                                                    Faqs
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
                <div className="pd_bottom_40" />
                {/*-============spacing==========-*/}
            </footer>

        </>
    )
}
