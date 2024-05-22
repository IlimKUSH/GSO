import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from "./MobileMenu"
import StickyHeader from "./StickyHeader"
import Footer3 from "./footer/Footer3"
import useAxios from "@/hooks/useAxios";

export default function Layout({ pageCls, breadcrumbTitle, children }) {
    // Moblile Menu
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const handleMobileMenu = () => setIsMobileMenu(!isMobileMenu)

    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/header/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })

    return (
        <>
            <StickyHeader handleMobileMenu={handleMobileMenu} />

            <div id="page" className={`page_wapper hfeed site ${pageCls ? pageCls : ""}`}>


                <div id="wrapper_full" className="content_all_warpper">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                    <div id="content" className="site-content">
                        {children}
                    </div>
                    <Footer3 data={response?.results[0]} />
                </div>
                <MobileMenu data={response?.results[0]} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                <BackToTop />
            </div>
        </>
    )
}
