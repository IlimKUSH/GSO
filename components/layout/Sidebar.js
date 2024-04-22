import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navbar_nav getmobilemenu">
                <li className="menu-item nav-item menu-item-has-children dropdown mennucolumn_full-six">
                    <Link href="/" className="nav_link">
                        <span className="text-link"> Home </span>
                    </Link>
                    <ul className="sub_menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li className="menu-item nav-item vankine_menu_image">
                            <Link href="/" className="nav_link image_big_on_menu_two">
                                <span className="img-link">
                                    <img src="/assets/images/demo-1-1-min-scaled.jpg" alt="icon" className="menu_img" />
                                </span>
                                <span className="text-link"> Home 1 </span>
                            </Link>
                        </li>
                        <li className="menu-item vankine_menu_image">
                            <Link href="/home-2" className="nav_link image_big_on_menu_two">
                                <span className="img-link">
                                    <img src="/assets/images/demo-1-2-min-scaled.jpg" alt="icon" className="menu_img" />
                                </span>
                                <span className="text-link"> Home 2 </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item vankine_menu_image">
                            <Link href="/home-3" className="nav_link image_big_on_menu_two">
                                <span className="img-link">
                                    <img src="/assets/images/demo-1-3-min-scaled.jpg" alt="icon" className="menu_img" />
                                </span>
                                <span className="text-link"> Home 3 </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item vankine_menu_image">
                            <Link href="/home-4" className="nav_link image_big_on_menu_two">
                                <span className="img-link">
                                    <img src="/assets/images/demo-1-4-min-scaled.jpg" alt="icon" className="menu_img" />
                                </span>
                                <span className="text-link"> Home 4 </span>
                            </Link>
                        </li>
                        <li className="menu-item  nav-item vankine_menu_image">
                            <Link href="/home-5" className="nav_link image_big_on_menu_two">
                                <span className="img-link">
                                    <img src="/assets/images/demo-1-5-min-scaled.jpg" alt="icon" className="menu_img" />
                                </span>
                                <span className="text-link"> Home 5 </span>
                            </Link>
                        </li>
                        <li className="menu-item   nav-item vankine_menu_image">
                            <Link href="/home-6" className="nav_link image_big_on_menu_two">
                                <span className="img-link">
                                    <img src="/assets/images/demo-1-6-min-scaled.jpg" alt="icon" className="menu_img" />
                                </span>
                                <span className="text-link"> Home 6 </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(1)}><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_ nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Pages
                        </span>
                    </Link>
                    <ul className="sub_menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li className="menu-item nav-item">
                            <Link href="/about-us" className="nav_link">
                                <span className="text-link"> About
                                    Us
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/faqs" className="nav_link">
                                <span className="text-link">
                                    Faq’s
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item   nav-item">
                            <Link href="/pricing" className="nav_link">
                                <span className="text-link">
                                    Pricing
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item   nav-item">
                            <Link href="/team" className="nav_link">
                                <span className="text-link">
                                    Team
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item   nav-item">
                            <Link href="/team-detail" className="nav_link">
                                <span className="text-link"> Team
                                    Detail
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(2)}><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item menu-item-has-children dropdown  nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Services
                        </span>
                    </Link>
                    <ul className="sub_menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li className="menu-item nav-item">
                            <Link href="/service" className="nav_link">
                                <span className="text-link">
                                    Service Style 1
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-style-2" className="nav_link">
                                <span className="text-link">
                                    Service Style 2
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-style-3" className="nav_link">
                                <span className="text-link">
                                    Service Style 3
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-style-4" className="nav_link">
                                <span className="text-link">
                                    Service Style 4
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-style-5" className="nav_link">
                                <span className="text-link">
                                    Service Style 5
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-style-6" className="nav_link">
                                <span className="text-link">
                                    Service Style 6
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-details" className="nav_link">
                                <span className="text-link">
                                    Service Details
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(3)}><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Portfolio
                        </span>
                    </Link>
                    <ul className="sub_menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-style-1" className="nav_link">
                                <span className="text-link">
                                    Portfolio Style 1
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-style-2" className="nav_link">
                                <span className="text-link">
                                    Portfolio Style 2
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-details" className="nav_link">
                                <span className="text-link">
                                    Portfolio Details
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(4)}><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_two   nav-item">
                    <Link href="/blog" className="nav_link">
                        <span className="text-link">
                            Blog
                        </span>
                    </Link>
                    <ul className="sub_menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li className="menu-item menu-item-has-children dropdown  nav-item">
                            <Link href="#" className="nav_link">
                                <span className="text-link">
                                    Blog Grid
                                </span>
                            </Link>
                            <ul className="sub_menu">
                                <li className="menu-item  nav-item">
                                    <Link href="/blog" className="nav_link">
                                        <span className="text-link">
                                            Blog Default
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item  nav-item">
                                    <Link href="/blog-style-1" className="nav_link">
                                        <span className="text-link">
                                            Blog Style 1
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item  nav-item">
                                    <Link href="/blog-style-2" className="nav_link">
                                        <span className="text-link">
                                            Blog Style 2
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item menu-item-has-children dropdown  nav-item">
                            <Link href="#" className="nav_link"><span className="text-link"> Blog
                                Details </span></Link>
                            <ul className="sub_menu">
                                <li className="menu-item   nav-item">
                                    <Link href="/blog-details" className="nav_link">
                                        <span className="text-link">
                                            No Sidebar
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item  nav-item">
                                    <Link href="/blog-details-left-sidebar" className="nav_link">
                                        <span className="text-link">
                                            Left Sidebar
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item nav-item">
                                    <Link href="/blog-details-right-sidebar" className="nav_link">
                                        <span className="text-link">
                                            Right Sidebar
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(5)}><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item">
                    <Link href="/shop" className="nav_link">
                        <span className="text-link">
                            Shop
                        </span>
                    </Link>
                    <ul className="sub_menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li className="menu-item nav-item">
                            <Link href="/shop" className="nav_link">
                                <span className="text-link">
                                    Products
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/shop-details" className="nav_link">
                                <span className="text-link">
                                    Product Details
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/my-account" className="nav_link">
                                <span className="text-link">
                                    My account
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/cart" className="nav_link">
                                <span className="text-link">
                                    Cart
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/checkout" className="nav_link">
                                <span className="text-link">
                                    Checkout
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(1)}><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item  nav-item">
                    <Link href="/contact" className="nav_link">
                        <span className="text-link">
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}
