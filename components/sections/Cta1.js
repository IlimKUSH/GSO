import Link from "next/link"


export default function Cta1() {
    return (
        <>
            <section className="call-to-action-section position-relative bg_op_1" style={{ backgroundImage: 'url(assets/images/call-bg-h4-min.jpg)' }}>
                <div className="background_overlay bg_11 z_0" />
                {/*-============spacing==========-*/}
                <div className="pd_top_50" />
                {/*-============spacing==========-*/}
                <div className="large-container">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="image-layer position-relative z_1">
                                <img src="/assets/images/call-1-min.png" className="img-fluid" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_title color_white">
                                <div className="title_whole">
                                    <h2 className="title">
                                        Find an Insurance Agent or Start Tracking your Claims
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="theme_btn_all text-md-center">
                                <Link href="#" className="theme_btn big color_white_two rotate">
                                    Track Your Claim <span> <i className="fi-rr-arrow-small-up" /></span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="image-layer position-relative z_1">
                                <img src="/assets/images/call-2-min.png" className="img-fluid" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
