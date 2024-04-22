import Link from "next/link"

export default function Footer2({ }) {
    return (
        <>
            <footer className="footer style_one style_two">
                <div className="patter_top">
                    <img src="/assets/images/shape/wave-pattern-2.png" className="img-fluid" alt="img" />
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_top_100" />
                {/*-============spacing==========-*/}
                <section className="md_content position-relative z_99">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pd_right_70">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="logo_box">
                                        <Link href="#" className="logo navbar-brand">
                                            <img src="/assets/images/footer-logo-green.png" alt="Vankine" className="logo_default" />
                                        </Link>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_35" />
                                    {/*-============spacing==========-*/}
                                    <div className="position-relative color_white">
                                        Sed ut perspiciatis  omnis  laudantium natus errors voluptatem accusantium
                                        doloremque laudantium totam
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_25" />
                                    {/*-============spacing==========-*/}
                                    <div className="fwidget_title">
                                        <h2 className="title color_white"> Follow Us </h2>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_25" />
                                        {/*-============spacing==========-*/}
                                    </div>
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
                            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-6">
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
                                    <div className="col-lg-6">
                                        <div className="footer_widgets_box pd_bottom_30">
                                            <div className="fwidget_title">
                                                <h2 className="title color_white"> Other Pages </h2>
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
                                                                My Account
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="#">
                                                                Need A Career?
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="#">
                                                                News &amp; Blog
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="#">
                                                                Payment Way
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="#">
                                                                Team Member
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i className="fi-rr-arrow-small-right color_white" />
                                                            </div>
                                                            <Link className="links color_white" href="#">
                                                                About Us
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="fwidget_title">
                                        <h2 className="title color_white"> Newsletter </h2>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_25" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <div className="bottom_content">
                                        <div className="color_white position_p_relative">
                                            Sed ut perspiciatis unde omniste natus errors volupta accus
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
                                            {/*-============spacing==========-*/}
                                            <div className="pd_bottom_25" />
                                            {/*-============spacing==========-*/}
                                        </div>
                                        <div className="d-flex align-items-center contact_header_one">
                                            <div className="icon_s">
                                                <i className=" fi-rr-headphones" /></div>
                                            <div className="content">
                                                <h6 className="tite color_white">Need Help?</h6>
                                                <div className="title_20"><Link href="tel:+000(123)45688" className="color_white">+000(123)456 88</Link>
                                                </div>
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
                    <div className="auto-container">
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
                                    <ul className="list_box color_one linline">
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
                <div className="patter_bottom">
                    <img src="/assets/images/shape/wave-pattern-1.png" className="img-fluid" alt="img" />
                </div>
            </footer>

        </>
    )
}
