import Layout from "@/components/layout/Layout"
import Testimonial4 from "@/components/sections/Testimonial4"
import Link from "next/link"
import { useState } from "react"
export default function Faq() {
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
            <Layout breadcrumbTitle="Faq's">
                {/*-faq*/}
                <section className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
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
                                <div className="theme_btn_all">
                                    <Link href="#" className="theme_btn big rotate">
                                        Contact Us <span> <i className=" fi-rr-arrow-small-up" /></span>
                                    </Link>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-7">
                                <section className="block_faq">
                                    <div className="accordion-box">
                                        <div className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 1 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(1)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">What Is Insurance Services?
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
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">How Many Service We Provide ?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                Quis autem vel eum iure reprehenderit ea voluptate esse molestiae
                                                consequatur veillum voluptas nullaes
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(3)}>
                                                <div className="question_box">
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
                                        <div className={isActive.key == 4 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 4 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(4)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">Why We Are The Best Company?
                                                    </div>
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
                                                    <div className="title_no_a_18 trans">Build your Business ?</div>
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
                                                    <div className="title_no_a_18 trans">How Much Experience Our Team
                                                        Member
                                                        ?</div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faq end*/}
                {/*-faqs*/}
                <section className="faq-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_60" />
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
                                        <div className={isActive.key == 7 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 7 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(7)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">What Is Insurance Services?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
                                        </div>
                                        <div className={isActive.key == 8 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 8 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(8)}>
                                                <div className="question_box">
                                                    <div className="title_no_a_18 trans">How Many Service We Provide ?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                Quis autem vel eum iure reprehenderit ea voluptate esse molestiae
                                                consequatur veillum voluptas nullaes
                                            </div>
                                        </div>
                                        <div className={isActive.key == 9 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 9 ? "question faq_header active" : "question faq_header"} onClick={() => handleToggle(9)}>
                                                <div className="question_box ">
                                                    <div className="title_no_a_18 trans">
                                                        How Much Experience Our Team Member ?
                                                    </div>
                                                    <span className="icon_fq trans fi-rs-arrow-small-right" />
                                                </div>
                                            </div>
                                            <div className="answer accordion-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                                                Retailer
                                                For The People, Focusing On The Promotion Of Sustainable Living,
                                                Renewable Energy Production And Smart Energy Grid Utility Services.
                                            </div>
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
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-faqs end*/}
                {/*testimonial*/}
                <Testimonial4 />
                {/*testimonial*/}


            </Layout>
        </>
    )
}