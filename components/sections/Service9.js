import Link from "next/link"


export default function Service9() {
    return (
        <>
            <section className="service-section bg_2">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="section_title type_one color_white">
                                <h4 className="sm_title"> What We Offer</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Key Features For your Insurance Business</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="color_white mr_bottom_10">Sit amet consectetur adipiscing elites varius montes, massa
                                <br />blandit orci. Sed egestas tellus est aliquet egetristique nisullam pharetra
                                sed tempor sed eivera consectetur augue</p>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <div className="service_post position-relative">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                </div>
            </section>

        </>
    )
}
