import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState } from "react"
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})


export default function Content4() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="content-section bg_op_1 position-relative" style={{ backgroundImage: 'url(assets/images/bg-3.jpg)' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="background_overlay bg_light_3 z_0" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 pd_right_60">
                            <div className="section_title type_four">
                                <h4 className="sm_title"> Check Your Favorite Insurance</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Get Started Favorite
                                        Insurance </h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="fom_tab_box custom_tabs type_three">
                                <ul className="nav nav-tabs links trans" role="tablist">
                                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                                        <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>
                                            Business
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                                        <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>
                                            Medical
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(3)}>
                                        <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>
                                            House
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(4)}>
                                        <button className={activeIndex === 4 ? "nav-link active" : "nav-link"}>
                                            Car
                                        </button>
                                    </li>
                                </ul>
                                <div className="s_tabs_content tab-content">
                                    <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox ">
                                            <div className="contact_form_shortcode">
                                                <form method="post" action="#">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <label>First Name <span>*</span></label>
                                                            <input type="text" name="first-name" placeholder="Larry" required />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Last Name <span>*</span></label>
                                                            <input type="text" name="last-name" placeholder=" D. McMahon" required />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Email <span>*</span></label>
                                                            <input type="email" name="email" placeholder="support@gmail.com" required />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Insurance Type</label>
                                                            <select>
                                                                <option value="Travel">Travel</option>
                                                                <option value="Car">Car</option>
                                                                <option value="Business">Business</option>
                                                                <option value="Life">Life</option>
                                                                <option value="House">House</option>
                                                                <option value="Medical">Medical</option>
                                                                <option value="Marriage">Marriage</option>
                                                                <option value="Fire">Fire</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <label>Limite Of Balance</label>
                                                            <input type="range" name="range"  min={0} max={9000} step={1} style={{ width: "100%" }} />
                                                            <div className="slider-hint">Selected Value: <b>6562</b>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            {/*-============spacing==========-*/}
                                                            <div className="pd_top_15" />
                                                            {/*-============spacing==========-*/}
                                                            <button type="submit">Get A Quote</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox">
                                            <div className="contact_form_shortcode">
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox ">
                                            <div className="contact_form_shortcode">
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="image_box_only type_seven color_two">
                                <div className="icon_box_only type_four inline_box trans">
                                    <div className="icon">
                                        <img src="/assets/images/icon-image-1.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="content">
                                        <div className="title_18">
                                            <Link href="#">
                                                Life Insurance
                                            </Link>
                                        </div>
                                    </div>
                                    <Link className="link" href="#">
                                        <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                                            </circle>
                                            <g clipPath="url(#clip0_117_28465)">
                                                <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_117_28465">
                                                    <rect width={25} height={25} fill="white" transform="translate(5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                                <div className="icon_box_only type_four position_two trans">
                                    <div className="icon">
                                        <img src="/assets/images/icon-image-2.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="content">
                                        <div className="title_18">
                                            <Link href="#">
                                                Health Insurance
                                            </Link>
                                        </div>
                                    </div>
                                    <Link className="link" href="#">
                                        <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                                            </circle>
                                            <g clipPath="url(#clip0_117_28463)">
                                                <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_117_28463">
                                                    <rect width={25} height={25} fill="white" transform="translate(5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                                <div className="fun_facts type_two">
                                    <h4>
                                        <CounterUp count={25} time={1} />
                                        <small>
                                            + </small></h4>
                                    <h6 className="title_no_a_26">Years Of
                                        Experience</h6>
                                </div>
                                <div className="m_image">
                                    <img src="/assets/images/about/about-1-min.png" alt="img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
