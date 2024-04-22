import Link from "next/link"
import { useState } from "react"
import NavbarNav from "../NavbarNav"

export default function Header3({ handleSearch, handleOptionalPanel, handleMobileMenu }) {

    const [isSideMenu, setSideMenu] = useState(false)
    const handleSideMenu = () => setSideMenu(!isSideMenu)
    return (
        <>
            <div className={isSideMenu ? "opne_side_menu_v1" : ""}>
                <div className="header_area " id="header_contents">
                    <header className="header-area header-style-3">
                        <div className="top_header">
                            <div className="large-container">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 width_50">
                                        <div className="logo_box">
                                            <Link href="/" className="logo navbar-brand">
                                                <img src="/assets/images/Logo-green.png" alt="Vankine" className="logo_default" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 d_none_1200px">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="d-flex align-items-center contact_header_one">
                                                    <div className="icon_s">
                                                        <i className=" flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="tite">Our Locations</h6>
                                                        <div className="title_no_a_20">55 Main Street, USA</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="d-flex align-items-center contact_header_one">
                                                    <div className="icon_s">
                                                        <i className=" flaticon-black-back-closed-envelope-shape" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="tite">Email For Us</h6>
                                                        <div className="title_no_a_20">support@gmail.com</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="d-flex align-items-center contact_header_one">
                                                    <div className="icon_s">
                                                        <i className=" flaticon-telephone" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="tite">Call For Us</h6>
                                                        <div className="title_no_a_20">+000 (123) 456 88</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-end width_50">
                                        <div className="theme_btn_all d_none_992px">
                                            <Link href="#" className="theme_btn">
                                                Contact us <span> <i className=" fi-rr-arrow-small-up" /></span>
                                            </Link>
                                        </div>
                                        <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                            <span className="line" />
                                            <span className="line" />
                                            <span className="line" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/*-side menu-*/}
                    <div className="side_menu_v1">
                        <div className="top">
                            <div className="menu_box">
                                <div className="side_navbar_togglers" onClick={handleSideMenu}>
                                    <svg width={38} height={25} viewBox="0 0 38 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 1.5625C0 1.1481 0.16462 0.750671 0.457645 0.457645C0.750671 0.16462 1.1481 0 1.5625 0H31.9375C32.3519 0 32.7493 0.16462 33.0424 0.457645C33.3354 0.750671 33.5 1.1481 33.5 1.5625C33.5 1.9769 33.3354 2.37433 33.0424 2.66735C32.7493 2.96038 32.3519 3.125 31.9375 3.125H1.5625C1.1481 3.125 0.750671 2.96038 0.457645 2.66735C0.16462 2.37433 0 1.9769 0 1.5625ZM0 12.5C0 12.0856 0.16462 11.6882 0.457645 11.3951C0.750671 11.1021 1.1481 10.9375 1.5625 10.9375H35.9375C36.3519 10.9375 36.7493 11.1021 37.0424 11.3951C37.3354 11.6882 37.5 12.0856 37.5 12.5C37.5 12.9144 37.3354 13.3118 37.0424 13.6049C36.7493 13.8979 36.3519 14.0625 35.9375 14.0625H1.5625C1.1481 14.0625 0.750671 13.8979 0.457645 13.6049C0.16462 13.3118 0 12.9144 0 12.5ZM0 23.4375C0 23.0231 0.16462 22.6257 0.457645 22.3326C0.750671 22.0396 1.1481 21.875 1.5625 21.875H25.9375C26.3519 21.875 26.7493 22.0396 27.0424 22.3326C27.3354 22.6257 27.5 23.0231 27.5 23.4375C27.5 23.8519 27.3354 24.2493 27.0424 24.5424C26.7493 24.8354 26.3519 25 25.9375 25H1.5625C1.1481 25 0.750671 24.8354 0.457645 24.5424C0.16462 24.2493 0 23.8519 0 23.4375Z" fill="#138F82" />
                                    </svg>
                                    <span>Menu</span>
                                </div>
                            </div>
                            <div className="search_box">
                                <div className="search search-toggler" onClick={handleSearch}>
                                    <i className="fi-rs-search" />
                                </div>
                            </div>
                            <div className="contacttoggler">
                                <div className="contact-toggler" onClick={handleOptionalPanel}>
                                    <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 3.25C0.75 2.65326 0.987053 2.08097 1.40901 1.65901C1.83097 1.23705 2.40326 1 3 1H5.25C5.84674 1 6.41903 1.23705 6.84099 1.65901C7.26295 2.08097 7.5 2.65326 7.5 3.25V5.5C7.5 6.09674 7.26295 6.66903 6.84099 7.09099C6.41903 7.51295 5.84674 7.75 5.25 7.75H3C2.40326 7.75 1.83097 7.51295 1.40901 7.09099C0.987053 6.66903 0.75 6.09674 0.75 5.5V3.25ZM0.75 13C0.75 12.4033 0.987053 11.831 1.40901 11.409C1.83097 10.9871 2.40326 10.75 3 10.75H5.25C5.84674 10.75 6.41903 10.9871 6.84099 11.409C7.26295 11.831 7.5 12.4033 7.5 13V15.25C7.5 15.8467 7.26295 16.419 6.84099 16.841C6.41903 17.2629 5.84674 17.5 5.25 17.5H3C2.40326 17.5 1.83097 17.2629 1.40901 16.841C0.987053 16.419 0.75 15.8467 0.75 15.25V13ZM10.5 3.25C10.5 2.65326 10.7371 2.08097 11.159 1.65901C11.581 1.23705 12.1533 1 12.75 1H15C15.5967 1 16.169 1.23705 16.591 1.65901C17.0129 2.08097 17.25 2.65326 17.25 3.25V5.5C17.25 6.09674 17.0129 6.66903 16.591 7.09099C16.169 7.51295 15.5967 7.75 15 7.75H12.75C12.1533 7.75 11.581 7.51295 11.159 7.09099C10.7371 6.66903 10.5 6.09674 10.5 5.5V3.25ZM10.5 13C10.5 12.4033 10.7371 11.831 11.159 11.409C11.581 10.9871 12.1533 10.75 12.75 10.75H15C15.5967 10.75 16.169 10.9871 16.591 11.409C17.0129 11.831 17.25 12.4033 17.25 13V15.25C17.25 15.8467 17.0129 16.419 16.591 16.841C16.169 17.2629 15.5967 17.5 15 17.5H12.75C12.1533 17.5 11.581 17.2629 11.159 16.841C10.7371 16.419 10.5 15.8467 10.5 15.25V13Z" stroke="var(--color-set-two-three-5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="social-icons">
                            <ul className="d-inline-block">
                                <li>
                                    <Link className="m_icon" href="#">
                                        <i className="fab fa-facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="m_icon" href="#">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="m_icon" href="#">
                                        <i className="fab fa-skype" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="m_icon" href="#">
                                        <i className="fab fa-telegram" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="button_box">
                            <div className="button">
                                <Link href="#">
                                    <span className="vertical_text_1">Get A Quote</span>
                                    <svg width={8} height={41} viewBox="0 0 8 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.64644 40.3536C3.84171 40.5488 4.15829 40.5488 4.35355 40.3536L7.53553 37.1716C7.73079 36.9763 7.73079 36.6597 7.53553 36.4645C7.34027 36.2692 7.02369 36.2692 6.82843 36.4645L4 39.2929L1.17157 36.4645C0.976309 36.2692 0.659727 36.2692 0.464465 36.4645C0.269202 36.6597 0.269202 36.9763 0.464464 37.1716L3.64644 40.3536ZM3.5 -2.18557e-08L3.5 40L4.5 40L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="#138F82" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="sdmenu_overlay" onClick={handleSideMenu} />
                    <div className="menu_open_sidely scrollbarcolor">
                        <div className="border_line" />
                        <div className="position-relative">
                            <div className="large-container">
                                <div className="side_navbar_togglers_close" onClick={handleSideMenu}>
                                    <i className="fa fa-close" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                        <Link href="/" className="logo navbar-brand">
                                            <img src="/assets/images/logo-white.svg" alt="Vankine " className="logo_default" />
                                        </Link>
                                        <div className="menu_content_in">
                                            <div className="navbar_content d-flex align-items-center">
                                                <NavbarNav />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12">
                                        <div className="form_box">
                                            <h2>Need Any Help? Or Looking For an Agent</h2>
                                            <div className="contact_form_shortcode">
                                                <form method="post" action="#">
                                                    <div className="row">
                                                        <div className="col-lg-6 pd_bottom_10">
                                                            <input type="text" name="name" placeholder="Full Name" required />
                                                        </div>
                                                        <div className="col-lg-6 pd_bottom_10">
                                                            <input type="text" name="phone" placeholder="Phone" />
                                                        </div>
                                                        <div className="col-lg-12 pd_bottom_10">
                                                            <input type="email" name="email" placeholder="Email Address" required />
                                                        </div>
                                                        <div className="col-lg-12 pd_bottom_10">
                                                            <textarea name="message" placeholder="Message" />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button type="submit">Send Message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <p>On the other hand denounce righteousy indignation and dislike men</p>
                                            <div className="social-icons">
                                                <ul className="d-inline-block">
                                                    <li>
                                                        <Link className="m_icon" href="#">
                                                            <i className="fab fa-facebook" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="m_icon" href="#">
                                                            <i className="fab fa-twitter" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="m_icon" href="#">
                                                            <i className="fab fa-skype" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="m_icon" href="#">
                                                            <i className="fab fa-telegram" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-md-1 col-sm-12">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-side menu-*/}
                </div>
            </div>
        </>
    )
}
