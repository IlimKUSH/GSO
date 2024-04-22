import Link from "next/link"


export default function Content3() {
    return (
        <>
            <section className="content-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_50" />
                {/*-============spacing==========-*/}
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section_title type_two">
                                <h4 className="sm_title">Awards Winning</h4>
                                <div className="title_whole">
                                    <h2 className="title">
                                        Find an Insurance <br /> Agent or Start Tracking your Claims
                                    </h2>
                                </div>
                                <p> Sit amet, consectetur adipiscing elit. Orci dui vitae sit odio. Nisl,
                                    dignissim nisi, ut maecenas libero. Massa ut cursus massa nisl sit nullam
                                    augue ornare mattis. Proin ultrices massa arcu scelerisque facilisi egestas
                                    eassa egestas at pharetra sollicitudin
                                </p>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="theme_btn_all">
                                        <Link href="#" className="theme_btn big color_two rotate">
                                            Track Your Claim <span> <i className=" fi-rr-arrow-small-up" /></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="d-flex align-items-center contact_header_one color_three">
                                        <div className="icon_s">
                                            <i className="fi-rr-headphones" /></div>
                                        <div className="content">
                                            <h6 className="tite">Need Help?</h6>
                                            <div className="title_20"><Link href="tel:+000(123)45688">+000(123)456
                                                88</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40 d_md_none" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-6">
                            <div className="image">
                                <img src="/assets/images/about/content-image-2.png" className="img-fluid" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
