import Link from "next/link"
import NavbarNav from "../NavbarNav"

export default function Header6({ handleSearch, handleOptionalPanel, handleMobileMenu }) {
    return (
        <>
            <div className="header_area " id="header_contents">
                <header className="header-area header-style-6">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-10 col-sm-10 col-xs-10 col_log">
                            <div className="logo_box">
                                <Link href="/" className="logo navbar-brand">
                                    <img src="/assets/images/logo-white.svg" className="img-fluid" alt="vankine" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-2 col-sm-2 col-xs-2 pd_zero">
                            {/*menu icon*/}
                            <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                <span className="line" />
                                <span className="line" />
                                <span className="line" />
                            </div>
                            {/*menu icon*/}
                            <div className="top_bar">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="position-relative">
                                            <ul className="list_box linline">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" fi-rr-map-marker-home" /></div>
                                                        <Link className="links" href="#">
                                                            24 Global Str, San Fransisco, SF 94112. </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" fi-rs-time-oclock" /></div>
                                                        <Link className="links" href="#">
                                                            Mon - Sat(9.00 - 6.00) Sunday - Closed </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="social-icons text-md-end">
                                            <ul>
                                                <li><Link href="#" className="m_icon"> <i className="fa-brands fa-facebook" /></Link></li>
                                                <li><Link href="#" className="m_icon"> <i className="fa-brands fa-twitter" /></Link>
                                                </li>
                                                <li><Link href="#" className="m_icon"> <i className="fa-brands fa-skype" /></Link>
                                                </li>
                                                <li><Link href="#" className="m_icon"> <i className="fa-brands fa-instagram" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main_header_content default_header">
                                <div className="navbar_content d-flex align-items-center">
                                    <NavbarNav />
                                    <div className="right_content">
                                        <div className="footer_contact_widget">
                                            <div className="d-flex">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="strokse" d="M20.25 3.75V8.25M20.25 3.75H15.75M20.25 3.75L14.25 9.75M17.25 21.75C8.966 21.75 2.25 15.034 2.25 6.75V4.5C2.25 3.90326 2.48705 3.33097 2.90901 2.90901C3.33097 2.48705 3.90326 2.25 4.5 2.25H5.872C6.388 2.25 6.838 2.601 6.963 3.102L8.069 7.525C8.179 7.965 8.015 8.427 7.652 8.698L6.359 9.668C6.17393 9.80198 6.037 9.99207 5.96854 10.21C5.90009 10.428 5.90375 10.6623 5.979 10.878C6.58087 12.5151 7.53141 14.0018 8.76478 15.2352C9.99815 16.4686 11.4849 17.4191 13.122 18.021C13.563 18.183 14.05 18.017 14.332 17.641L15.302 16.348C15.4348 16.1708 15.6169 16.0366 15.8256 15.9625C16.0342 15.8883 16.2601 15.8773 16.475 15.931L20.898 17.037C21.398 17.162 21.75 17.612 21.75 18.128V19.5C21.75 20.0967 21.5129 20.669 21.091 21.091C20.669 21.5129 20.0967 21.75 19.5 21.75H17.25V21.75Z" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <div>
                                                    <p><Link href="tel:+555567812340">+555 5678 12340</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center header_extra_items">
                                            <div className="search search-toggler" onClick={handleSearch}>
                                                <i className="fi-rs-search" /></div>
                                            <div className="contact-toggler" onClick={handleOptionalPanel}>
                                                <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.75 3.25C0.75 2.65326 0.987053 2.08097 1.40901 1.65901C1.83097 1.23705 2.40326 1 3 1H5.25C5.84674 1 6.41903 1.23705 6.84099 1.65901C7.26295 2.08097 7.5 2.65326 7.5 3.25V5.5C7.5 6.09674 7.26295 6.66903 6.84099 7.09099C6.41903 7.51295 5.84674 7.75 5.25 7.75H3C2.40326 7.75 1.83097 7.51295 1.40901 7.09099C0.987053 6.66903 0.75 6.09674 0.75 5.5V3.25ZM0.75 13C0.75 12.4033 0.987053 11.831 1.40901 11.409C1.83097 10.9871 2.40326 10.75 3 10.75H5.25C5.84674 10.75 6.41903 10.9871 6.84099 11.409C7.26295 11.831 7.5 12.4033 7.5 13V15.25C7.5 15.8467 7.26295 16.419 6.84099 16.841C6.41903 17.2629 5.84674 17.5 5.25 17.5H3C2.40326 17.5 1.83097 17.2629 1.40901 16.841C0.987053 16.419 0.75 15.8467 0.75 15.25V13ZM10.5 3.25C10.5 2.65326 10.7371 2.08097 11.159 1.65901C11.581 1.23705 12.1533 1 12.75 1H15C15.5967 1 16.169 1.23705 16.591 1.65901C17.0129 2.08097 17.25 2.65326 17.25 3.25V5.5C17.25 6.09674 17.0129 6.66903 16.591 7.09099C16.169 7.51295 15.5967 7.75 15 7.75H12.75C12.1533 7.75 11.581 7.51295 11.159 7.09099C10.7371 6.66903 10.5 6.09674 10.5 5.5V3.25ZM10.5 13C10.5 12.4033 10.7371 11.831 11.159 11.409C11.581 10.9871 12.1533 10.75 12.75 10.75H15C15.5967 10.75 16.169 10.9871 16.591 11.409C17.0129 11.831 17.25 12.4033 17.25 13V15.25C17.25 15.8467 17.0129 16.419 16.591 16.841C16.169 17.2629 15.5967 17.5 15 17.5H12.75C12.1533 17.5 11.581 17.2629 11.159 16.841C10.7371 16.419 10.5 15.8467 10.5 15.25V13Z" stroke="#0F3567" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 pd_zero col_theme_btn d_none_992px">
                            <div className="theme_btn_all text-center">
                                <Link href="#" className="theme_btn">
                                    Contact us <span><i aria-hidden="false" className="far fa-arrow-alt-circle-right" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}
