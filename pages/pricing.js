import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Pricing() {
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
            <Layout breadcrumbTitle="Pricing">
                {/*-pricing*/}
                <section className="pricing-section bg_light_1">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center type_one">
                                    <h4 className="sm_title"> Pricing Package</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Popular Pricing Plan For <br /> Insurance Services </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_40" />
                        {/*-============spacing==========-*/}
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="price_box type_one trans">
                                    <div className="top">
                                        <h4 className="title_24">
                                            <Link className="links" href="#"> Regular Plan </Link>
                                        </h4>
                                        <div className="price">
                                            <sub> $</sub>19.83 <small>/ Monthly</small>
                                        </div>
                                    </div>
                                    <div className="center">
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Invoices/Estimates</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Online Payments</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Projects Time Sheet</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-times" />
                                            <small>Recurring Transations</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-times" />
                                            <small>Client Portal</small>
                                        </div>
                                    </div>
                                    <div className="bottom text-center">
                                        <Link className="theme_btn" href="#"> Select plan <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="price_box type_one trans">
                                    <div className="top">
                                        <h4 className="title_24">
                                            <Link className="links" href="#"> Regular Plan </Link>
                                        </h4>
                                        <div className="price">
                                            <sub> $</sub>19.83 <small>/ Monthly</small>
                                        </div>
                                    </div>
                                    <div className="center">
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Invoices/Estimates</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Online Payments</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Projects Time Sheet</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-times" />
                                            <small>Recurring Transations</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-times" />
                                            <small>Client Portal</small>
                                        </div>
                                    </div>
                                    <div className="bottom text-center">
                                        <Link className="theme_btn" href="#"> Select plan <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="price_box type_one trans">
                                    <div className="top">
                                        <h4 className="title_24">
                                            <Link className="links" href="#"> Golden Plan </Link>
                                        </h4>
                                        <div className="price">
                                            <sub> $</sub>89.83 <small>/ Monthly</small>
                                        </div>
                                    </div>
                                    <div className="center">
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Invoices/Estimates</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Online Payments</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Projects Time Sheet</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Recurring Transations</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path className="one" d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill="#2196F3" />
                                                    <path d="M15.0692 7.88074L9.6525 13.2973C9.48999 13.4598 9.27667 13.5416 9.06335 13.5416C8.85004 13.5416 8.63672 13.4598 8.47421 13.2973L5.76593 10.589C5.44 10.2632 5.44 9.73651 5.76593 9.41074C6.09171 9.08481 6.61829 9.08481 6.94421 9.41074L9.06335 11.5299L13.8909 6.70245C14.2167 6.37653 14.7433 6.37653 15.0692 6.70245C15.395 7.02823 15.395 7.55481 15.0692 7.88074Z" fill="#FAFAFA" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width={20} height={20} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <small>Client Portal</small>
                                        </div>
                                    </div>
                                    <div className="bottom text-center">
                                        <Link className="theme_btn" href="#"> Select plan <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_70" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-pricing end*/}
                {/*-faq*/}
                <section className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 m-auto text-center">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Faqs</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Frequently Asked
                                            Questions!</h2>
                                    </div>
                                    <p> Sed ut perspiciatis unde natus voluptatem accusantium doloremque laudantium
                                        aperiam
                                        inventore veritatis architecto beatae</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <section className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Why We Are The Best Company?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 2 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(2)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">Build your Business ?</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">How Much Experience Our Team
                                                        Member
                                                        ?</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-6">
                                <section className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 4 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 4 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(4)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">How Much Experience Our Team
                                                        Member
                                                        ?</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 5 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 5 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(5)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">What Is Insurance Services?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 6 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 6 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(6)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">How Many Service We Provide ?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                Quis autem vel eum iure reprehenderit ea voluptate esse molestiae
                                                consequatur veillum voluptas nullaes
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_80" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faq end*/}


            </Layout>
        </>
    )
}