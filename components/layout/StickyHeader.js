import Link from "next/link"
import NavbarNav from "./NavbarNav"
import useAxios from "@/hooks/useAxios";
import LocaleSwitcher from "@/components/elements/LocaleSwitcher";

export default function StickyHeader({ data, handleMobileMenu }) {

    return (
        <>
            <div className="sticky_header_area sticky_header_content">
                <header className="header-area header-style-1 htype_three">
                    <div className="main_header_content default_header">
                        <div className="large-container">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-12 col-md-5 col-sm-5 col-xs-5">
                                    <div className="logobox">
                                        <Link href="/" className="logo navbar-brand">
                                            <img src={data?.logo} alt="GSO" className="logo_default" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-9 col-md-0 col-sm-0 col-xs-0 column_menu">
                                    <div className="navbar_content d-flex align-items-center">
                                        <NavbarNav />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-7 col-sm-7 col-xs-7 nav_tog_column">
                                    <div className="d-flex right_content align-items-center">
                                        {/*menu icon*/}
                                        <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                            <span className="line" />
                                            <span className="line" />
                                            <span className="line" />
                                        </div>
                                        {/*menu icon*/}
                                        <div className="button theme_btn">
                                            <LocaleSwitcher />
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
