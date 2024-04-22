import Link from "next/link"


export default function Service8() {
    return (
        <>
            <section className="service-section mr_bottom_minus_250 position-relative z_1">
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
            </section>

        </>
    )
}
