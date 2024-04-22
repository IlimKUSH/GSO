import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function ServiceStyle2() {
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
            <Layout breadcrumbTitle="Services Style 2">
                {/*-service*/}
                <section className="service-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> What We Offer</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Key Features For your Insurance Business</h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="mr_bottom_15" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="position-relative">
                                    <p>Sit amet consectetur adipiscing elites varius montes, massa <br />blandit orci.
                                        Sed egestas tellus est aliquet egetristique nisullam pharetra sed tempor sed
                                        eivera consectetur augue</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="mr_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_25" />
                        {/*-============spacing==========-*/}
                        <div className="service_post position-relative  ajax_service_enabled ">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_two hover_1_get">
                                        <Link href="/service" className="img_bx">
                                            <div className="image trans hover_1">
                                                <img src="/assets/images/service/other-ser-2.jpg" className="img-fluid" alt="service-image" />
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                        </Link>
                                        <div className="content_box trans">
                                            <div className="icon trans">
                                                <i className="flaticon-salary trans" />
                                            </div>
                                            <div className="steps trans">1</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Easy System &amp; Trusted, Save your Money
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                Sit amet consectetur adipiscing elites varius montes, massa blandit
                                                orci.
                                            </p>
                                            <Link href="/service" className="rd_more">
                                                Read More <i className="fi-rr-arrow-small-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_two hover_1_get">
                                        <Link href="/service" className="img_bx">
                                            <div className="image trans hover_1">
                                                <img src="/assets/images/service/other-ser-3.jpg" className="img-fluid" alt="service-image" />
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                        </Link>
                                        <div className="content_box trans">
                                            <div className="icon trans">
                                                <i className="flaticon-management trans" />
                                            </div>
                                            <div className="steps trans">2</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Dedicated Customer Support Team Member
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                Sit amet consectetur adipiscing elites varius montes, massa blandit
                                                orci.
                                            </p>
                                            <Link href="/service" className="rd_more">
                                                Read More <i className="fi-rr-arrow-small-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_two hover_1_get">
                                        <Link href="/service" className="img_bx">
                                            <div className="image trans hover_1">
                                                <img src="/assets/images/service/other-ser-1.jpg" className="img-fluid" alt="service-image" />
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                        </Link>
                                        <div className="content_box trans">
                                            <div className="icon trans">
                                                <i className="flaticon-business-trip trans" />
                                            </div>
                                            <div className="steps trans">3</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Corporate Professional Insurance Liability
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                Sit amet consectetur adipiscing elites varius montes, massa blandit
                                                orci.
                                            </p>
                                            <Link href="/service" className="rd_more">
                                                Read More <i className="fi-rr-arrow-small-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-service end*/}
                {/*-service*/}
                <section className="service-section position-relative bg_2 overflow-hidden">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="ab_img_left_top mr_top_minus_40 z_0">
                        <img src="/assets/images/shape/wave-pattern-2.png" className="img-fluid" alt="img" />
                    </div>
                    <div className="position-relative z_1">
                        <div className="container pd_zero">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="section_title text-center type_one color_white">
                                        <h4 className="sm_title"> Vinkine Popular Services</h4>
                                        <div className="title_whole">
                                            <h2 className="title"> Amazing Insurance Services</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                            <div className="row  mr_left_minus_15 mr_right_minus_15">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_five style_two icon_box_only type_three trans">
                                        <div className="icon_inner trans">
                                            <div className="d-flex trans">
                                                <div className="icon trans">
                                                    <i className=" flaticon-health-insurance trans" /></div>
                                                <div className="content">
                                                    <div className="title_22">
                                                        <Link href="/service">Medical
                                                            Insurance</Link></div>
                                                    <p className="trans">
                                                        Additional benefits such as health check up, wellness…</p>
                                                    <Link href="/service" className="rd_more">
                                                        Read More
                                                        <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                            </path>
                                                        </svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_five style_two icon_box_only type_three trans">
                                        <div className="icon_inner trans">
                                            <div className="d-flex trans">
                                                <div className="icon trans">
                                                    <i className=" flaticon-business-trip trans" /></div>
                                                <div className="content">
                                                    <div className="title_22">
                                                        <Link href="/service">Business
                                                            Insurance</Link></div>
                                                    <p className="trans">
                                                        Covers the loss of income that a business…</p>
                                                    <Link href="/service" className="rd_more">
                                                        Read More
                                                        <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                            </path>
                                                        </svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_five style_two icon_box_only type_three trans">
                                        <div className="icon_inner trans">
                                            <div className="d-flex trans">
                                                <div className="icon trans">
                                                    <i className=" flaticon-marriage trans" /></div>
                                                <div className="content">
                                                    <div className="title_22">
                                                        <Link href="/service">Marriage
                                                            insurance</Link></div>
                                                    <p className="trans">
                                                        We cover you for wedding cancel, material damage…</p>
                                                    <Link href="/service" className="rd_more">
                                                        Read More
                                                        <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                            </path>
                                                        </svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_five style_two icon_box_only type_three trans">
                                        <div className="icon_inner trans">
                                            <div className="d-flex trans">
                                                <div className="icon trans">
                                                    <i className=" flaticon-car-insurance-1 trans" /></div>
                                                <div className="content">
                                                    <div className="title_22">
                                                        <Link href="/service">Car
                                                            Insurance</Link></div>
                                                    <p className="trans">
                                                        Pleasant experience one has to consider the safety…</p>
                                                    <Link href="/service" className="rd_more">
                                                        Read More
                                                        <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                            </path>
                                                        </svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_five style_two icon_box_only type_three trans">
                                        <div className="icon_inner trans">
                                            <div className="d-flex trans">
                                                <div className="icon trans">
                                                    <i className=" flaticon-insurance trans" /></div>
                                                <div className="content">
                                                    <div className="title_22">
                                                        <Link href="/service">Fire
                                                            Insurance</Link></div>
                                                    <p className="trans">
                                                        Owns a property or has even rented a…</p>
                                                    <Link href="/service" className="rd_more">
                                                        Read More
                                                        <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                            </path>
                                                        </svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_five style_two  icon_box_only type_three trans">
                                        <div className="icon_inner trans">
                                            <div className="d-flex trans">
                                                <div className="icon trans">
                                                    <i className=" flaticon-house trans" /></div>
                                                <div className="content">
                                                    <div className="title_22">
                                                        <Link href="/service">House
                                                            Insurance</Link></div>
                                                    <p className="trans">
                                                        A home insurance policy will cover the cost…</p>
                                                    <Link href="/service" className="rd_more">
                                                        Read More
                                                        <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                            </path>
                                                        </svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ab_img_right_bottom mr_bottom_minus_250 z_0">
                        <img src="/assets/images/shape/wave-pattern-1.png" className="img-fluid" alt="img" />
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_80" />
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
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Amazing Company</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Great Insurance your Solutions For Business</h2>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="position-relative br_left_3px_theme_color pd_left_10">
                                    Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque
                                    laudantium aperiam eaquecy
                                    inventore veritatis architecto beatae
                                </div>
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
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="image_box_only  type_three">
                                    <div className="left">
                                        <div className="image one">
                                            <img src=" assets/images/about/about-2-1.jpg" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="image two">
                                            <img src=" assets/images/about/about-2-3.jpg" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="image three">
                                            <img src=" assets/images/about/about-2-2.jpg" alt="img" className="img-fluid" />
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
                    <div className="pd_bottom_50" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faqs end*/}
                {/*service*/}
                <section className="service-section position-relative">
                    <div className="medium-container-two">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center type_one">
                                    <h4 className="sm_title"> Great Offer For Customer</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Amazing Insurance Services</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_40" />
                        {/*-============spacing==========-*/}
                        <div className="service_post position-relative">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_three hover_1_get">
                                        <Link href="/service" className="img_bx">
                                            <div className="image trans hover_1">
                                                <img src="/assets/images/service/service-1-min-1.jpg" className="img-fluid" alt="service" />
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                        </Link>
                                        <div className="content_box trans">
                                            <div className="content_box_in trans">
                                                <div className="icon trans">
                                                    <i className=" flaticon-insurance-2 trans" /></div>
                                                <div className="steps trans">1</div>
                                                <h4 className="title_24 trans">
                                                    <Link href="/service">Life
                                                        insurance</Link></h4>
                                                <p className="trans">
                                                    Contract between a life insurance company and a…</p>
                                                <Link href="/service" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_three hover_1_get">
                                        <Link href="/service" className="img_bx">
                                            <div className="image trans hover_1">
                                                <img src="/assets/images/service/service-2-min-1.jpg" className="img-fluid" alt="service" />
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                        </Link>
                                        <div className="content_box trans">
                                            <div className="content_box_in trans">
                                                <div className="icon trans">
                                                    <i className=" flaticon-travel-insurance trans" /></div>
                                                <div className="steps trans">2</div>
                                                <h4 className="title_24 trans">
                                                    <Link href="/service">Travel
                                                        Insurance</Link></h4>
                                                <p className="trans">
                                                    A travel insurance policy is a versatile plan…</p>
                                                <Link href="/service" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_three hover_1_get">
                                        <Link href="/service" className="img_bx">
                                            <div className="image trans hover_1">
                                                <img src="/assets/images/service/service-3-min.jpg" className="img-fluid" alt="service" />
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                        </Link>
                                        <div className="content_box trans">
                                            <div className="content_box_in trans">
                                                <div className="icon trans">
                                                    <i className=" flaticon-house trans" /></div>
                                                <div className="steps trans">3</div>
                                                <h4 className="title_24 trans">
                                                    <Link href="/service">House
                                                        Insurance</Link></h4>
                                                <p className="trans">
                                                    A home insurance policy will cover the cost…</p>
                                                <Link href="/service" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="service_box type_three hover_1_get">
                                        <Link href="/service" className="img_bx">
                                            <div className="image trans hover_1">
                                                <img src="/assets/images/service/service-4-min.jpg" className="img-fluid" alt="service" />
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                        </Link>
                                        <div className="content_box trans">
                                            <div className="content_box_in trans">
                                                <div className="icon trans">
                                                    <i className=" flaticon-insurance trans" /></div>
                                                <div className="steps trans">4</div>
                                                <h4 className="title_24 trans">
                                                    <Link href="/service">Fire
                                                        Insurance</Link></h4>
                                                <p className="trans">
                                                    Owns a property or has even rented a…</p>
                                                <Link href="/service" className="rd_more">Read More<i className="fi-rr-arrow-small-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_70" />
                    {/*-============spacing==========-*/}
                </section>
                {/*service*/}


            </Layout>
        </>
    )
}