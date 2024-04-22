import Link from "next/link"


export default function Content8() {
    return (
        <>
            <section className="content-section bg_op_4" style={{ backgroundImage: 'url(assets/images/wave-pat-1.png)' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_60 d_md_none" />
                            {/*-============spacing==========-*/}
                            <div className="section_title medium type_one">
                                <h4 className="sm_title"> Great Offer For Customer</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Amazing Features For Insurance</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon_box_only type_eight">
                                <div className="icon_image">
                                    <img src="/assets/images/img-icon-1.png" className="img-fluid" alt="img" />
                                </div>
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                        <h2 className="title"> Professional
                                            Insurance
                                            Services</h2>
                                    </div>
                                    <p> Pitatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon_box_only type_eight">
                                <div className="icon_image">
                                    <img src="/assets/images/img-icon-2.png" className="img-fluid" alt="img" />
                                </div>
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                        <h2 className="title"> We’re Trusted <br /> &amp; Save your Money</h2>
                                    </div>
                                    <p> Pitatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon_box_only type_eight">
                                <div className="icon_image">
                                    <img src="/assets/images/img-icon-2.png" className="img-fluid" alt="img" />
                                </div>
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                        <h2 className="title"> Corporate
                                            &amp; Financial
                                            Services</h2>
                                    </div>
                                    <p> Pitatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon_box_only type_eight">
                                <div className="icon_image">
                                    <img src="/assets/images/img-icon-2.png" className="img-fluid" alt="img" />
                                </div>
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                        <h2 className="title"> So Much <br />
                                            Fast &amp; Eeliable
                                            Services</h2>
                                    </div>
                                    <p> Pitatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="desc_content_box style_one bg_op_1" style={{ backgroundImage: 'url(assets/images/line-3.png)!important' }}>
                                <div className="text">
                                    <p>Sed ut unde iste natus error sit voluptatem accusantium doloremque
                                        laudantium totam rem aperiam eaque </p>
                                </div>
                                <div className="theme_btn_all text-md-end">
                                    <Link href="#" className="theme_btn big2 icon_center">
                                        Contact us <span><i className="far fa-arrow-alt-circle-right" /></span>
                                    </Link>
                                </div>
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
