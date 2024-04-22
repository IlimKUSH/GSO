import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from "./MobileMenu"
import OptionalPanel from "./OptionalPanel"
import SearchPopup from "./SearchPopup"
import StickyHeader from "./StickyHeader"
import Footer1 from './footer/Footer1'
import Footer2 from "./footer/Footer2"
import Footer3 from "./footer/Footer3"
import Footer4 from "./footer/Footer4"
import Footer5 from "./footer/Footer5"
import Footer6 from "./footer/Footer6"
import useAxios from "@/hooks/useAxios";

export default function Layout({ headerStyle, footerStyle, pageCls, breadcrumbTitle, children }) {
    // Search
    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)

    // Optional Panel
    const [isOptionalPanel, setOptionalPanel] = useState(false)
    const handleOptionalPanel = () => setOptionalPanel(!isOptionalPanel)

    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/header/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })

    // Scroll Header
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    return (
        <>
            <StickyHeader data={response?.results[0]} handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} />

            <div id="page" className={`page_wapper hfeed site ${pageCls ? pageCls : ""}`}>


                <div id="wrapper_full" className="content_all_warpper">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                    <div id="content" className="site-content">
                        {children}
                    </div>
                    <Footer3 />
                </div>
                <MobileMenu data={response?.results[0]} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
                <OptionalPanel isOptionalPanel={isOptionalPanel} handleOptionalPanel={handleOptionalPanel} />
                <BackToTop />
            </div>
        </>
    )
}
