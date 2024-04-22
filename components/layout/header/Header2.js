import Link from "next/link"
import NavbarNav from "../NavbarNav"

export default function Header2({ handleSearch, handleOptionalPanel, handleMobileMenu }) {
    return (
        <>
            <div className="header_area " id="header_contents">
                <header className="header-area header-style-1 htype_two">
                    <div className="top_bar">
                        <div className="large-container">
                            <div className="row align-items-center">
                                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                    <div className="top_md d-flex align-items-center">
                                        <div className="text workings">
                                            <i aria-hidden="false" className="far fa-clock" /> Working Hours : <span>
                                                Sun-monday, 09am-5pm </span> </div>
                                        <div className="call">
                                            <Link href="tel:+000(123)456989">
                                                <small>Call : </small>
                                                +000(123)456989</Link>
                                        </div>
                                        <div className="mail">
                                            <Link href="mailto:example@gmail.com">
                                                <small>Mail : </small>
                                                example@gmail.com</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <div className="top_rt d-flex align-items-center">
                                        <div className="language">
                                            <a className="language-dropdown-active">
                                                English <i className="fi-rs-angle-small-down" />
                                            </a>
                                            <ul className="language-dropdown">
                                                <li>
                                                    <Link href="#">
                                                        Français
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        Deutsch
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        Pусский
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="social-icons">
                                            <ul className="d-inline-block">
                                                <li>
                                                    <Link className="m_icon" href="#">
                                                        <i className="fab fa-facebook-f" />
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
                            </div>
                        </div>
                    </div>
                    <div className="main_header_content default_header">
                        <div className="large-container">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-12 col-md-5 col-sm-5 col-xs-5">
                                    <div className="logobox">
                                        <Link href="/" className="logo navbar-brand">
                                            <img src="/assets/images/Logo-green.png" alt="Vankine" className="logo_default" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-9 col-md-0 col-sm-0 col-xs-0 column_menu">
                                    <div className="navbar_content d-flex align-items-center">
                                        <NavbarNav />
                                        <div className="search search-toggler" onClick={handleSearch}>
                                            <i className="fi-rs-search" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-7 col-sm-7 col-xs-7 nav_tog_column">
                                    <div className="d-flex right_content align-items-center">
                                        <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                            <span className="line" />
                                            <span className="line" />
                                            <span className="line" />
                                        </div>
                                        <div className="button">
                                            <Link href="#" className="theme_btn">
                                                Get A Quote
                                                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="contact-toggler" onClick={handleOptionalPanel}>
                                            <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.75 3.25C0.75 2.65326 0.987053 2.08097 1.40901 1.65901C1.83097 1.23705 2.40326 1 3 1H5.25C5.84674 1 6.41903 1.23705 6.84099 1.65901C7.26295 2.08097 7.5 2.65326 7.5 3.25V5.5C7.5 6.09674 7.26295 6.66903 6.84099 7.09099C6.41903 7.51295 5.84674 7.75 5.25 7.75H3C2.40326 7.75 1.83097 7.51295 1.40901 7.09099C0.987053 6.66903 0.75 6.09674 0.75 5.5V3.25ZM0.75 13C0.75 12.4033 0.987053 11.831 1.40901 11.409C1.83097 10.9871 2.40326 10.75 3 10.75H5.25C5.84674 10.75 6.41903 10.9871 6.84099 11.409C7.26295 11.831 7.5 12.4033 7.5 13V15.25C7.5 15.8467 7.26295 16.419 6.84099 16.841C6.41903 17.2629 5.84674 17.5 5.25 17.5H3C2.40326 17.5 1.83097 17.2629 1.40901 16.841C0.987053 16.419 0.75 15.8467 0.75 15.25V13ZM10.5 3.25C10.5 2.65326 10.7371 2.08097 11.159 1.65901C11.581 1.23705 12.1533 1 12.75 1H15C15.5967 1 16.169 1.23705 16.591 1.65901C17.0129 2.08097 17.25 2.65326 17.25 3.25V5.5C17.25 6.09674 17.0129 6.66903 16.591 7.09099C16.169 7.51295 15.5967 7.75 15 7.75H12.75C12.1533 7.75 11.581 7.51295 11.159 7.09099C10.7371 6.66903 10.5 6.09674 10.5 5.5V3.25ZM10.5 13C10.5 12.4033 10.7371 11.831 11.159 11.409C11.581 10.9871 12.1533 10.75 12.75 10.75H15C15.5967 10.75 16.169 10.9871 16.591 11.409C17.0129 11.831 17.25 12.4033 17.25 13V15.25C17.25 15.8467 17.0129 16.419 16.591 16.841C16.169 17.2629 15.5967 17.5 15 17.5H12.75C12.1533 17.5 11.581 17.2629 11.159 16.841C10.7371 16.419 10.5 15.8467 10.5 15.25V13Z" stroke="#0F3567" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}
