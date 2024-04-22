import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ServiceStyle6() {

    return (
        <>
            <Layout breadcrumbTitle="Services Style 6">
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
                                        <h2 className="title"> Key Features For your Insurance Business </h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6">
                                <p className="mr_bottom_10">Sit amet consectetur adipiscing elites varius montes, massa
                                    <br />blandit orci. Sed egestas tellus est aliquet egetristique nisullam pharetra
                                    sed tempor sed eivera consectetur augue</p>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_20" />
                        {/*-============spacing==========-*/}
                        <div className="service_post position-relative">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans">
                                            <svg width={110} height={130} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 124.009C0 127.128 2.82523 129.486 5.89443 128.928L105.894 110.746C108.272 110.314 110 108.244 110 105.827V5C110 2.23858 107.761 0 105 0H5C2.23858 0 0 2.23858 0 5V124.009Z" fill="var(--color-set-one-1)" />
                                            </svg>
                                            <i className=" flaticon-travel-insurance trans" />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                            <img src="/assets/images/service/service-1-min-1.jpg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                        Travel Insurance
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    A travel insurance policy is a versatile plan that offers financial
                                                    compensation…
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans">
                                            <svg width={110} height={130} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 124.009C0 127.128 2.82523 129.486 5.89443 128.928L105.894 110.746C108.272 110.314 110 108.244 110 105.827V5C110 2.23858 107.761 0 105 0H5C2.23858 0 0 2.23858 0 5V124.009Z" fill="var(--color-set-one-1)" />
                                            </svg>
                                            <i className=" flaticon-health-insurance trans" />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                            <img src="/assets/images/service/service-8-min.jpg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">Medical
                                                        Insurance</Link></div>
                                                <p className="trans">
                                                    Additional benefits such as health check up, wellness programs.</p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans">
                                            <svg width={110} height={130} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 124.009C0 127.128 2.82523 129.486 5.89443 128.928L105.894 110.746C108.272 110.314 110 108.244 110 105.827V5C110 2.23858 107.761 0 105 0H5C2.23858 0 0 2.23858 0 5V124.009Z" fill="var(--color-set-one-1)" />
                                            </svg>
                                            <i className=" flaticon-marriage trans" />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                            <img src="/assets/images/service/service-6-min.jpg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                        Marriage insurance
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    We cover you for wedding cancel, material damage to the property
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans">
                                            <svg width={110} height={130} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 124.009C0 127.128 2.82523 129.486 5.89443 128.928L105.894 110.746C108.272 110.314 110 108.244 110 105.827V5C110 2.23858 107.761 0 105 0H5C2.23858 0 0 2.23858 0 5V124.009Z" fill="var(--color-set-one-1)" />
                                            </svg>
                                            <i className=" flaticon-insurance-2 trans" />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                            <img src="/assets/images/service/service-1-min-1.jpg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                        Life insurance
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    Contract between a life insurance company and a policy owner. A
                                                    life…
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans">
                                            <svg width={110} height={130} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 124.009C0 127.128 2.82523 129.486 5.89443 128.928L105.894 110.746C108.272 110.314 110 108.244 110 105.827V5C110 2.23858 107.761 0 105 0H5C2.23858 0 0 2.23858 0 5V124.009Z" fill="var(--color-set-one-1)" />
                                            </svg><i className=" flaticon-house trans" />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                            <img src="/assets/images/service/service-3-min.jpg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                        House Insurance
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    A home insurance policy will cover the cost of structure and
                                                    contents…
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="service_box type_seven trans">
                                        <div className="icon trans">
                                            <svg width={110} height={130} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 124.009C0 127.128 2.82523 129.486 5.89443 128.928L105.894 110.746C108.272 110.314 110 108.244 110 105.827V5C110 2.23858 107.761 0 105 0H5C2.23858 0 0 2.23858 0 5V124.009Z" fill="var(--color-set-one-1)" />
                                            </svg>
                                            <i className=" flaticon-insurance trans" />
                                        </div>
                                        <div className="content d-flex align-items-center bg_light_1">
                                            <img src="/assets/images/service/service-4-min.jpg" className="img-fluid" alt="service" />
                                            <div className="left">
                                                <div className="title_26">
                                                    <Link href="/service-details">
                                                        Fire Insurance
                                                    </Link>
                                                </div>
                                                <p className="trans">
                                                    Owns a property or has even rented a property can buy a…
                                                </p>
                                            </div>
                                            <div className="right">
                                                <Link href="/service-details" className="link">
                                                    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.53522 0H22.9415C23.2315 0 23.5098 0.115234 23.7149 0.320352C23.92 0.52547 24.0352 0.803669 24.0352 1.09375V17.5C24.0352 17.7901 23.92 18.0683 23.7149 18.2734C23.5098 18.4785 23.2315 18.5937 22.9415 18.5937C22.6514 18.5937 22.3732 18.4785 22.1681 18.2734C21.963 18.0683 21.8477 17.7901 21.8477 17.5V3.73333L1.83938 23.7417C1.63205 23.9349 1.35781 24.04 1.07446 24.035C0.791099 24.03 0.520746 23.9153 0.320352 23.7149C0.119958 23.5145 0.00516988 23.2441 0.000170402 22.9608C-0.00482908 22.6774 0.100351 22.4032 0.293551 22.1958L20.3019 2.1875H6.53522C6.24514 2.1875 5.96694 2.07227 5.76182 1.86715C5.5567 1.66203 5.44147 1.38383 5.44147 1.09375C5.44147 0.803669 5.5567 0.52547 5.76182 0.320352C5.96694 0.115234 6.24514 0 6.53522 0Z" />
                                                        <defs>
                                                            <linearGradient x1="-0.34336" y1="13.9061" x2="24.0352" y2="13.9061" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="var(--color-set-one-1)" />
                                                                <stop offset={1} stopColor="var(--color-set-one-1)" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
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