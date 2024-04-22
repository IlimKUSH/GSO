import { useState } from "react"


export default function Faq1() {
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
                                            <div className="question_box">
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
                                            <div className="question_box ">
                                                <div className="title_no_a_18 trans">
                                                    How Much Experience Our Team Member ?
                                                </div>
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

        </>
    )
}
