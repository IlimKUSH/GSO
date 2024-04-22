import Link from "next/link"


export default function Client1() {
    return (
        <>
            <section className="client-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="section_title type_one">
                                <h4 className="sm_title"> Popular Clients</h4>
                                <div className="title_whole">
                                    <h2 className="title">
                                        We’ve 1520+
                                        Global Premium
                                        Clients
                                    </h2>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natusey
                                    voluptatem accusantium dolore
                                </p>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="theme_btn_all">
                                <Link href="#" className="theme_btn big rotate">
                                    Become a Partner <span> <i className="fi-rr-arrow-small-up" /></span>
                                </Link>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="client_grid">
                                <div className="client_box">
                                    <Link href="#">
                                        <img src="/assets/images/client-1.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                                <div className="client_box">
                                    <Link href="#">
                                        <img src="/assets/images/client-2.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                                <div className="client_box">
                                    <Link href="#">
                                        <img src="/assets/images/client-3.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                                <div className="client_box">
                                    <Link href="#">
                                        <img src="/assets/images/client-4.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                                <div className="client_box last">
                                    <Link href="#">
                                        <img src="/assets/images/client-5.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                                <div className="client_box last">
                                    <Link href="#">
                                        <img src="/assets/images/client-6.png" className="img-fluid" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_90" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
