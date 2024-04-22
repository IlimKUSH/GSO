import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ServiceStyle1() {

    return (
        <>
            <Layout breadcrumbTitle="Services Style 1">
                {/*-service*/}
                <section className="service-section-one">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> What We Offer</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Key Features For your Insurance Business</h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6">
                                <p className="mr_bottom_10">Sit amet consectetur adipiscing elites varius montes, massa <br />blandit orci. Sed egestas tellus est aliquet egetristique nisullam pharetra sed tempor sed eivera consectetur augue</p>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_20" />
                        {/*-============spacing==========-*/}
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/service/service-5-min.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-car-insurance-1 trans" />
                                            </div>
                                            <div className="steps trans">5</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Car Insurance
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                Pleasant experience one has to consider the
                                                safety factor equally well.
                                            </p>
                                            <Link href="/service" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/service/service-6-min.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-marriage trans" /></div>
                                            <div className="steps trans">6</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Marriage insurance
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                We cover you for wedding cancel, material damage
                                                to the property</p>
                                            <Link href="/service" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service/">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/service/service-7-min.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-business-trip trans" />
                                            </div>
                                            <div className="steps trans">7</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service/">
                                                    Business Insurance
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                Covers the loss of income that a business
                                                suffers after a disaster
                                            </p>
                                            <Link href="/service" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/service/service-8-min.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-health-insurance trans" />
                                            </div>
                                            <div className="steps trans">8</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Medical Insurance
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                Additional benefits such as health check up,
                                                wellness programs…
                                            </p>
                                            <Link href="/service" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/service/service-1-min-1.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-insurance-2 trans" />
                                            </div>
                                            <div className="steps trans">1</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Life insurance
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                Contract between a life insurance company and a
                                                policy owner. A life…
                                            </p>
                                            <Link href="/service" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="service_box type_one color_two">
                                    <Link href="/service">
                                        <div className="image">
                                            <img className="img-fluid" src="/assets/images/service/service-2-min-1.jpg" alt="Car Insurance" />
                                        </div>
                                    </Link>
                                    <div className="content_box">
                                        <div className="content_inner trans">
                                            <div className="icon trans">
                                                <i className=" flaticon-travel-insurance trans" />
                                            </div>
                                            <div className="steps trans">2</div>
                                            <h4 className="title_24 trans">
                                                <Link href="/service">
                                                    Travel Insurance
                                                </Link>
                                            </h4>
                                            <p className="trans">
                                                A travel insurance policy is a versatile plan
                                                that offers financial compensation…
                                            </p>
                                            <Link href="/service" className="rd_more trans">
                                                Read More
                                                <svg width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
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


            </Layout>
        </>
    )
}