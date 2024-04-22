
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioStyle2() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".portfoliocontainer", {
                itemSelector: ".portfolio-wrapper",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".portfolio-wrapper",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "trans current " : "")
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="fliter_group">
                        <ul className="portfolio_filter clearfix">
                            <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>View All</li>
                            <li className={activeBtn("portfolio_category-car")} onClick={handleFilterKeyChange("portfolio_category-car")}>Car</li>
                            <li className={activeBtn("portfolio_category-fire")} onClick={handleFilterKeyChange("portfolio_category-fire")}>Fire
                            </li>
                            <li className={activeBtn("portfolio_category-house")} onClick={handleFilterKeyChange("portfolio_category-house")}>House</li>
                            <li className={activeBtn("portfolio_category-life")} onClick={handleFilterKeyChange("portfolio_category-life")}>Life</li>
                            <li className={activeBtn("portfolio_category-medical")} onClick={handleFilterKeyChange("portfolio_category-medical")}>Medical</li>
                            <li className={activeBtn("portfolio_category-travel")} onClick={handleFilterKeyChange("portfolio_category-travel")}>Travel</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="portfoliocontainer row" style={{ position: 'relative', height: '1328.8px' }}>
                <div className="portfolio-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-6 portfolio_category-car portfolio_category-travel">
                    <div className="portfolio_box type_two">
                        <div className="image_box ">
                            <img src="/assets/images/portfolio/project-9-min.png" className="img-fluid" alt="img" />
                            <Link data-fancybox="gallery" className="zm_btn trans" href="#">
                                <span className="fi-rs-cursor-plus zoom_icon" />
                            </Link>
                        </div>
                        <div className="content_box  trans">
                            <div className="bg trans" />
                            <div className="con">
                                <h2 className="title_30">
                                    <Link href="/portfolio-details" rel="bookmark">Insurance Groups</Link>
                                </h2>
                                <p> Policy Renewal </p>
                            </div>
                            <Link href="/portfolio-details" className="lnk trans">
                                <svg className="trans" width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-6 portfolio_category-house portfolio_category-life">
                    <div className="portfolio_box type_two">
                        <div className="image_box ">
                            <img src="/assets/images/portfolio/project-1-min.png" className="img-fluid" alt="img" />
                            <Link data-fancybox="gallery" className="zm_btn trans" href="#">
                                <span className="fi-rs-cursor-plus zoom_icon" />
                            </Link>
                        </div>
                        <div className="content_box  trans">
                            <div className="bg trans" />
                            <div className="con">
                                <h2 className="title_30">
                                    <Link href="/portfolio-details" rel="bookmark">Business Growth</Link>
                                </h2>
                                <p> Business Policy </p>
                            </div>
                            <Link href="/portfolio-details" className="lnk trans">
                                <svg className="trans" width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-6 portfolio_category-car portfolio_category-fire">
                    <div className="portfolio_box type_two">
                        <div className="image_box ">
                            <img src="/assets/images/portfolio/project-2-min.png" className="img-fluid" alt="img" />
                            <Link data-fancybox="gallery" className="zm_btn trans" href="#">
                                <span className="fi-rs-cursor-plus zoom_icon" />
                            </Link>
                        </div>
                        <div className="content_box  trans">
                            <div className="bg trans" />
                            <div className="con">
                                <h2 className="title_30">
                                    <Link href="/portfolio-details" rel="bookmark">Market Expansion</Link>
                                </h2>
                                <p> Coaching </p>
                            </div>
                            <Link href="/portfolio-details" className="lnk trans">
                                <svg className="trans" width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-6 portfolio_category-medical portfolio_category-travel">
                    <div className="portfolio_box type_two">
                        <div className="image_box ">
                            <img src="/assets/images/portfolio/project-3-min.png" className="img-fluid" alt="img" />
                            <Link data-fancybox="gallery" className="zm_btn trans" href="#">
                                <span className="fi-rs-cursor-plus zoom_icon" />
                            </Link>
                        </div>
                        <div className="content_box  trans">
                            <div className="bg trans" />
                            <div className="con">
                                <h2 className="title_30">
                                    <Link href="/portfolio-details" rel="bookmark">Rise of insurance</Link>
                                </h2>
                                <p> Business Details </p>
                            </div>
                            <Link href="/portfolio-details" className="lnk trans">
                                <svg className="trans" width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-6 portfolio_category-car portfolio_category-travel">
                    <div className="portfolio_box type_two">
                        <div className="image_box ">
                            <img src="/assets/images/portfolio/project-4-min.png" className="img-fluid" alt="img" />
                            <Link data-fancybox="gallery" className="zm_btn trans" href="#">
                                <span className="fi-rs-cursor-plus zoom_icon" />
                            </Link>
                        </div>
                        <div className="content_box  trans">
                            <div className="bg trans" />
                            <div className="con">
                                <h2 className="title_30">
                                    <Link href="/portfolio-details" rel="bookmark">Business strategy</Link>
                                </h2>
                                <p> No Claim Bonus </p>
                            </div>
                            <Link href="/portfolio-details" className="lnk trans">
                                <svg className="trans" width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-6 portfolio_category-fire portfolio_category-house">
                    <div className="portfolio_box type_two">
                        <div className="image_box ">
                            <img src="/assets/images/portfolio/project-5-min.png" className="img-fluid" alt="img" />
                            <Link data-fancybox="gallery" className="zm_btn trans" href="#">
                                <span className="fi-rs-cursor-plus zoom_icon" />
                            </Link>
                        </div>
                        <div className="content_box  trans">
                            <div className="bg trans" />
                            <div className="con">
                                <h2 className="title_30">
                                    <Link href="/portfolio-details" rel="bookmark">Insurance benefit</Link>
                                </h2>
                                <p> Insure Instantly </p>
                            </div>
                            <Link href="/portfolio-details" className="lnk trans">
                                <svg className="trans" width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-6 portfolio_category-house portfolio_category-medical">
                    <div className="portfolio_box type_two">
                        <div className="image_box ">
                            <img src="/assets/images/portfolio/project-6-min.png" className="img-fluid" alt="img" />
                            <Link data-fancybox="gallery" className="zm_btn trans" href="#">
                                <span className="fi-rs-cursor-plus zoom_icon" />
                            </Link>
                        </div>
                        <div className="content_box  trans">
                            <div className="bg trans" />
                            <div className="con">
                                <h2 className="title_30">
                                    <Link href="/portfolio-details" rel="bookmark"> Classic Insurance</Link>
                                </h2>
                                <p> Hassle Free Claims </p>
                            </div>
                            <Link href="/portfolio-details" className="lnk trans">
                                <svg className="trans" width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-6 portfolio_category-car portfolio_category-fire">
                    <div className="portfolio_box type_two">
                        <div className="image_box ">
                            <img src="/assets/images/portfolio/project-7-min.png" className="img-fluid" alt="img" />
                            <Link data-fancybox="gallery" className="zm_btn trans" href="#">
                                <span className="fi-rs-cursor-plus zoom_icon" />
                            </Link>
                        </div>
                        <div className="content_box  trans">
                            <div className="bg trans" />
                            <div className="con">
                                <h2 className="title_30">
                                    <Link href="/portfolio-details" rel="bookmark">Progressive Insurance</Link>
                                </h2>
                                <p> Insurance coverage </p>
                            </div>
                            <Link href="/portfolio-details" className="lnk trans">
                                <svg className="trans" width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
