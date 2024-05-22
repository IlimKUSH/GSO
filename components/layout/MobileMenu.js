import Link from 'next/link'
import Sidebar from './Sidebar'
import {useTranslations} from "next-intl";
import LocaleSwitcher from "@/components/elements/LocaleSwitcher";
export default function MobileMenu({ data, handleMobileMenu, isMobileMenu }) {
    const t = useTranslations()

    const handleLinkClick = () => {
        handleMobileMenu();
    }

    return (
        <>
            <div className={isMobileMenu ? "mobile_menu_box-visible" : ""}>
                <div className="mobile_menu_box">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    <nav className="menu-box scrollbarcolor">
                        <div className="close-btn" onClick={handleMobileMenu}>
                            <i className="fi-rr-cross"/>
                        </div>
                        <div className="button theme_btn">
                            <LocaleSwitcher/>
                        </div>
                        <div className="menu-outer">
                            <div className="navigation_menu">
                                <Sidebar handleLinkClick={handleLinkClick}/>
                            </div>
                        </div>
                        <div className="mobile-header-info-wrap">
                            <div className="single-mobile-header-info">
                                <Link href={`tel:${data?.call}`} className="cnt">
                                    <i className="fi-rs-headphones"/>{data?.call} </Link>
                            </div>
                            <div className="single-mobile-header-info cont_over">
                                <Link href="mailto:sendmail@example.com" className="cnt">
                                    <i className="fi-rs-envelope"/>{data?.email} </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
