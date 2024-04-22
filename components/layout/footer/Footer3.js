import Link from "next/link"

export default function Footer3({ }) {
    return (
        <>
            <footer className="footer style_one style_three bg_op_4" style={{ backgroundImage: 'url(assets/images/Map.png)' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_290" />
                {/*-============spacing==========-*/}
                {/*footer content top*/}
                <section className="md_content position-relative z_99">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pd_right_60">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="logo_box">
                                        <Link href="#" className="logo navbar-brand">
                                            <img src="/assets/images/footer-logo-three.png" alt="Vankine" className="logo_default" />
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
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 m-auto">
                                <div className="row">
                                    <div className="col-lg-8 m-auto">
                                        <div className="footer_widgets_box mid_border pd_bottom_30 pd_top_10">
                                            <div className="fwidget_title">
                                                <h2 className="title color_white"> Services </h2>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_35" />
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
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer_widgets_box pd_bottom_30 pd_top_10">
                                    <div className="fwidget_title">
                                        <h2 className="title color_white"> Recent News </h2>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_35" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <div className="post_foo_box">
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
                                                    <i className=" fi-rr-clock" />
                                                </div>
                                                <Link className="links color_white" href="#">
                                                    Working Hours : Sun-monday, 09am-5pm
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
