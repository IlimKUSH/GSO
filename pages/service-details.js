import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function ServiceDetails() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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
            <Layout breadcrumbTitle="Service Details">
                {/*content*/}
                <section className="content-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="image_box">
                                    <img src="/assets/images/service/ser-v1-1-min.png" className="img-fluid" alt="img" />
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pd_left_30">
                                {/*-============spacing==========-*/}
                                <div className="pd_top_30" />
                                {/*-============spacing==========-*/}
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> What We Offer</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Key Features For your Insurance Business</h2>
                                    </div>
                                    <p> Sit amet consectetur adipiscing elites varius montes, massa blandit orci. Sed egestas tellus est aliquet egetristique nisullam pharetra sed tempor sed eivera consectetur augue</p>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_30" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="position-relative">
                                            <ul className="list_box weight_500 list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" fi-rs-shield-check" />
                                                        </div>
                                                        <Link className="links" href="#"> Easy &amp; Fast Process </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" fi-rs-shield-check" />
                                                        </div>
                                                        <Link className="links" href="#"> Modern Technology </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" fi-rs-shield-check" />
                                                        </div>
                                                        <Link className="links" href="#"> Friendly Enviorment </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/*-============spacing==========-*/}
                                            <div className="pd_bottom_20" />
                                            {/*-============spacing==========-*/}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="position-relative">
                                            <ul className="list_box weight_500 list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" fi-rs-shield-check" />
                                                        </div>
                                                        <Link className="links" href="#"> Save Your Money </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" fi-rs-shield-check" />
                                                        </div>
                                                        <Link className="links" href="#"> Digital Services System </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" fi-rs-shield-check" />
                                                        </div>
                                                        <Link className="links" href="#"> Trusted &amp; High Security </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/*-============spacing==========-*/}
                                            <div className="pd_bottom_20" />
                                            {/*-============spacing==========-*/}
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_50" />
                    {/*-============spacing==========-*/}
                </section>
                {/*content*/}
                {/*content*/}
                <section className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pd_right_70">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Services Benefit</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Special Benefits of the Business Insurance</h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                                <div className="icon_box_only type_five color_two d-flex  trans">
                                    <div className="icon">
                                        <i className=" fi-rr-comment-check" />
                                    </div>
                                    <div className="content">
                                        <div className="title_22">
                                            <Link href="#"> Commercial Property <br /> Insurance </Link>
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_top_15" />
                                {/*-============spacing==========-*/}
                                <div className="divider" />
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_25" />
                                {/*-============spacing==========-*/}
                                <div className="icon_box_only type_five color_two d-flex  trans">
                                    <div className="icon">
                                        <i className=" fi-rr-comment-check" />
                                    </div>
                                    <div className="content">
                                        <div className="title_22">
                                            <Link href="#"> General liability <br /> Insurance </Link>
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_top_15" />
                                {/*-============spacing==========-*/}
                                <div className="divider" />
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_25" />
                                {/*-============spacing==========-*/}
                                <div className="icon_box_only type_five color_two d-flex  trans">
                                    <div className="icon">
                                        <i className=" fi-rr-comment-check" />
                                    </div>
                                    <div className="content">
                                        <div className="title_22">
                                            <Link href="#"> Business income <br /> Insurance </Link>
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_top_15" />
                                {/*-============spacing==========-*/}
                                <div className="divider" />
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_45" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="image_box mr_bottom_minus_200  position-relative z_2">
                                    <img src="/assets/images/service/ser-v1-2-min.png" className="img-fluid" alt="img" />
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_50" />
                    {/*-============spacing==========-*/}
                </section>
                {/*content*/}
                {/*-service*/}
                <section className="service-section position-relative bg_op_1 overflow-hidden" style={{ backgroundImage: 'url(assets/images/ser-bg-bg-min.jpg)' }}>
                    {/*-============spacing==========-*/}
                    <div className="pd_top_140" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center  type_one">
                                    <h4 className="sm_title"> Great Offer For Customer</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Amazing Features For Insurance </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_40" />
                        {/*-============spacing==========-*/}
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_only type_one color_two">
                                    <div className="icon_box_in trans">
                                        <div className="shape_image">
                                            <svg width={116} height={121} viewBox="0 0 116 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.8056 39.6223L0.500244 0H17.5002L36.1734 36.0124L19.8056 39.6223Z" fill="var(--color-set-one-1)" />
                                                <path className="two" d="M36.8216 44.7789L19.8086 39.6339L41.3565 29.0508L58.4829 34.1875L36.8216 44.7789Z" fill="var(--color-set-one-2)" />
                                                <path className="two" d="M75.3704 66.1668L58.0938 61.0318L80.9934 52.772L98.1198 57.9087L75.3704 66.1668Z" fill="var(--color-set-one-2)" />
                                                <path d="M41.3564 29.0508L58.0936 61.0319L71.4346 56.223L60.3526 34.7522L41.3564 29.0508Z" fill="var(--color-set-one-1)" />
                                                <path d="M80.9629 52.792L116 121V91.5L99.9591 58.4917" fill="var(--color-set-one-1)" />
                                            </svg>
                                        </div>
                                        <div className="after" />
                                        <div className="icon">
                                            <i className=" flaticon-health-insurance" />
                                        </div>
                                        <div className="title_22">
                                            <Link href="#"> Professional Insurance Services </Link>
                                        </div>
                                        <Link className="rd_more" href="#"> Read More <i className="icontb fi-rs-arrow-small-right" />
                                        </Link>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_only type_one color_two">
                                    <div className="icon_box_in trans">
                                        <div className="shape_image">
                                            <svg width={116} height={121} viewBox="0 0 116 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.8056 39.6223L0.500244 0H17.5002L36.1734 36.0124L19.8056 39.6223Z" fill="var(--color-set-one-1)" />
                                                <path className="two" d="M36.8216 44.7789L19.8086 39.6339L41.3565 29.0508L58.4829 34.1875L36.8216 44.7789Z" fill="var(--color-set-one-2)" />
                                                <path className="two" d="M75.3704 66.1668L58.0938 61.0318L80.9934 52.772L98.1198 57.9087L75.3704 66.1668Z" fill="var(--color-set-one-2)" />
                                                <path d="M41.3564 29.0508L58.0936 61.0319L71.4346 56.223L60.3526 34.7522L41.3564 29.0508Z" fill="var(--color-set-one-1)" />
                                                <path d="M80.9629 52.792L116 121V91.5L99.9591 58.4917" fill="var(--color-set-one-1)" />
                                            </svg>
                                        </div>
                                        <div className="after" />
                                        <div className="icon">
                                            <i className=" flaticon-growth" />
                                        </div>
                                        <div className="title_22">
                                            <Link href="#"> We’re Trusted <br /> &amp; Save your Money </Link>
                                        </div>
                                        <Link className="rd_more" href="#"> Read More <i className="icontb fi-rs-arrow-small-right" />
                                        </Link>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_only type_one color_two">
                                    <div className="icon_box_in trans">
                                        <div className="shape_image">
                                            <svg width={116} height={121} viewBox="0 0 116 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.8056 39.6223L0.500244 0H17.5002L36.1734 36.0124L19.8056 39.6223Z" fill="var(--color-set-one-1)" />
                                                <path className="two" d="M36.8216 44.7789L19.8086 39.6339L41.3565 29.0508L58.4829 34.1875L36.8216 44.7789Z" fill="var(--color-set-one-2)" />
                                                <path className="two" d="M75.3704 66.1668L58.0938 61.0318L80.9934 52.772L98.1198 57.9087L75.3704 66.1668Z" fill="var(--color-set-one-2)" />
                                                <path d="M41.3564 29.0508L58.0936 61.0319L71.4346 56.223L60.3526 34.7522L41.3564 29.0508Z" fill="var(--color-set-one-1)" />
                                                <path d="M80.9629 52.792L116 121V91.5L99.9591 58.4917" fill="var(--color-set-one-1)" />
                                            </svg>
                                        </div>
                                        <div className="after" />
                                        <div className="icon">
                                            <i className=" flaticon-online-analytical" />
                                        </div>
                                        <div className="title_22">
                                            <Link href="#"> Corporate &amp; Financial Services </Link>
                                        </div>
                                        <Link className="rd_more" href="#"> Read More <i className="icontb fi-rs-arrow-small-right" />
                                        </Link>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_only type_one color_two">
                                    <div className="icon_box_in trans">
                                        <div className="shape_image">
                                            <svg width={116} height={121} viewBox="0 0 116 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.8056 39.6223L0.500244 0H17.5002L36.1734 36.0124L19.8056 39.6223Z" fill="var(--color-set-one-1)" />
                                                <path className="two" d="M36.8216 44.7789L19.8086 39.6339L41.3565 29.0508L58.4829 34.1875L36.8216 44.7789Z" fill="var(--color-set-one-2)" />
                                                <path className="two" d="M75.3704 66.1668L58.0938 61.0318L80.9934 52.772L98.1198 57.9087L75.3704 66.1668Z" fill="var(--color-set-one-2)" />
                                                <path d="M41.3564 29.0508L58.0936 61.0319L71.4346 56.223L60.3526 34.7522L41.3564 29.0508Z" fill="var(--color-set-one-1)" />
                                                <path d="M80.9629 52.792L116 121V91.5L99.9591 58.4917" fill="var(--color-set-one-1)" />
                                            </svg>
                                        </div>
                                        <div className="after" />
                                        <div className="icon">
                                            <i className=" flaticon-health-insurance-1" />
                                        </div>
                                        <div className="title_22">
                                            <Link href="#"> So Much <br /> Fast &amp; Eeliable Services </Link>
                                        </div>
                                        <Link className="rd_more" href="#"> Read More <i className="icontb fi-rs-arrow-small-right" />
                                        </Link>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_50" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-service end*/}
                {/*-faqs*/}
                <section className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="image_box">
                                    <img src="/assets/images/service/ser-v1-3-min.png" alt="img" className="img-fluid" />
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Amazing Company</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Great Insurance your Solutions For Business</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10"> Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium aperiam eaquecy inventore veritatis architecto beatae </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">What Is Insurance Services? </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}> Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services. </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 2 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(2)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">How Many Service We Provide ? </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}> Quis autem vel eum iure reprehenderit ea voluptate esse molestiae consequatur veillum voluptas nullaes </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans"> How Much Experience Our Team Member ? </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}> Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services. </div>
                                        </div>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faqs end*/}
                {/*form*/}
                <section className="form-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center type_one">
                                    <h4 className="sm_title"> Check Your Favorite Insurance</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Get Started Favorite Insurance</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_40" />
                        {/*-============spacing==========-*/}
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="fom_tab_box custom_tabs type_four">
                                    <ul className="nav nav-tabs links trans justify-content-center" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>House Insurance </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}> Medical Insurance </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}> Travel Insurance </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <button className={activeIndex === 4 ? "nav-link active" : "nav-link"}>Life Insurance </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                                            <button className={activeIndex === 5 ? "nav-link active" : "nav-link"}> Car Insurance </button>
                                        </li>
                                    </ul>
                                    <div className="s_tabs_content tab-content">
                                        <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                            <div className="contentbox  yes_image d-flex ">
                                                <div className="contact_form_shortcode">
                                                    <form method="post" action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Your Full Name <span>*</span>
                                                                </label>
                                                                <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Phone</label>
                                                                <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Email Address <span className="wpforms-required-label">*</span>
                                                                </label>
                                                                <input type="email" name="email" placeholder="support@gmail.com" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Insurance Type</label>
                                                                <select>
                                                                    <option value="Business">Business</option>
                                                                    <option value="Fire">Fire</option>
                                                                    <option value="Car">Car</option>
                                                                    <option value="Life">Life</option>
                                                                    <option value="House">House</option>
                                                                    <option value="Marrige">Marrige</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Travel">Travel</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <label>Limite Of Balance</label>
                                                                <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                                <div className="slider-hint">Selected Value: <b>4000</b>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-sm-12  text-md-end">
                                                                <button type="submit">Get a Guote</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="image trans">
                                                    <img src="/assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane active" : "tab-pane"}>
                                            <div className="contentbox  yes_image d-flex ">
                                                <div className="contact_form_shortcode">
                                                    <form method="post" action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Your Full Name <span>*</span>
                                                                </label>
                                                                <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Phone</label>
                                                                <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Email Address <span className="wpforms-required-label">*</span>
                                                                </label>
                                                                <input type="email" name="email" placeholder="support@gmail.com" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Insurance Type</label>
                                                                <select>
                                                                    <option value="Business">Business</option>
                                                                    <option value="Fire">Fire</option>
                                                                    <option value="Car">Car</option>
                                                                    <option value="Life">Life</option>
                                                                    <option value="House">House</option>
                                                                    <option value="Marrige">Marrige</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Travel">Travel</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <label>Limite Of Balance</label>
                                                                <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                                <div className="slider-hint">Selected Value: <b>4000</b>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                                <button type="submit">Get a Guote</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="image trans">
                                                    <img src="/assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab-pane active" : "tab-pane"}>
                                            <div className="contentbox  yes_image d-flex ">
                                                <div className="contact_form_shortcode">
                                                    <form method="post" action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Your Full Name <span>*</span>
                                                                </label>
                                                                <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Phone</label>
                                                                <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Email Address <span className="wpforms-required-label">*</span>
                                                                </label>
                                                                <input type="email" name="email" placeholder="support@gmail.com" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Insurance Type</label>
                                                                <select>
                                                                    <option value="Business">Business</option>
                                                                    <option value="Fire">Fire</option>
                                                                    <option value="Car">Car</option>
                                                                    <option value="Life">Life</option>
                                                                    <option value="House">House</option>
                                                                    <option value="Marrige">Marrige</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Travel">Travel</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <label>Limite Of Balance</label>
                                                                <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                                <div className="slider-hint">Selected Value: <b>4000</b>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                                <button type="submit">Get a Guote</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="image trans">
                                                    <img src="/assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 4 ? "tab-pane active" : "tab-pane"}>
                                            <div className="contentbox  yes_image d-flex ">
                                                <div className="contact_form_shortcode">
                                                    <form method="post" action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Your Full Name <span>*</span>
                                                                </label>
                                                                <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Phone</label>
                                                                <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Email Address <span className="wpforms-required-label">*</span>
                                                                </label>
                                                                <input type="email" name="email" placeholder="support@gmail.com" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Insurance Type</label>
                                                                <select>
                                                                    <option value="Business">Business</option>
                                                                    <option value="Fire">Fire</option>
                                                                    <option value="Car">Car</option>
                                                                    <option value="Life">Life</option>
                                                                    <option value="House">House</option>
                                                                    <option value="Marrige">Marrige</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Travel">Travel</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <label>Limite Of Balance</label>
                                                                <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                                <div className="slider-hint">Selected Value: <b>4000</b>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                                <button type="submit">Get a Guote</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="image trans">
                                                    <img src="/assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 5 ? "tab-pane active" : "tab-pane"}>
                                            <div className="contentbox  yes_image d-flex ">
                                                <div className="contact_form_shortcode">
                                                    <form method="post" action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Your Full Name <span>*</span>
                                                                </label>
                                                                <input type="text" name="name" placeholder="Larry D. McMahon" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Phone</label>
                                                                <input type="text" name="phone" placeholder="+000 (123) 456 88" />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Email Address <span className="wpforms-required-label">*</span>
                                                                </label>
                                                                <input type="email" name="email" placeholder="support@gmail.com" required />
                                                            </div>
                                                            <div className="col-lg-6 col-sm-12">
                                                                <label>Insurance Type</label>
                                                                <select>
                                                                    <option value="Business">Business</option>
                                                                    <option value="Fire">Fire</option>
                                                                    <option value="Car">Car</option>
                                                                    <option value="Life">Life</option>
                                                                    <option value="House">House</option>
                                                                    <option value="Marrige">Marrige</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Travel">Travel</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <label>Limite Of Balance</label>
                                                                <input type="range" name="range"  min={0} max={8560} step={1} style={{ width: "100%" }} />
                                                                <div className="slider-hint">Selected Value: <b>4000</b>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12  text-md-end">
                                                                <button type="submit">Get a Guote</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="image trans">
                                                    <img src="/assets/images/frm-1-min.png" alt="img" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_90" />
                    {/*-============spacing==========-*/}
                </section>
                {/*form*/}


            </Layout>
        </>
    )
}