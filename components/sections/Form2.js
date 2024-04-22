import { useState } from "react"


export default function Form2() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="form-section">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_50" />
                            {/*-============spacing==========-*/}
                            <div className="image_box_only  type_two">
                                <div className="bg" />
                                <div className="left">
                                    <div className="image one">
                                        <img src="/assets/images/portfolio/project-1-min.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="image two">
                                        <img src="/assets/images/form-2-min.png" alt="img" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="image three">
                                        <img src="/assets/images/form-1-min.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="image four">
                                        <img src="/assets/images/logo-rotate.png" alt="img" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pd_top_70 pd_bottom_70 pd_left_60 pd_right_60 bg_9">
                            <div className="section_title type_one color_white">
                                <h4 className="sm_title"> Get In Touch</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Get Started your Favorite Insurance</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="fom_tab_box custom_tabs type_two">
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
                                    <div className={activeIndex === 4 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox ">
                                            <div className="contact_form_shortcode">
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 5 ? "tab-pane active" : "tab-pane"}>
                                        <div className="contentbox ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
