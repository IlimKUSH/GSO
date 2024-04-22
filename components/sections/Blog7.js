import Link from "next/link"
import VideoBox from "../elements/VideoBox"

export default function Blog7() {
    return (
        <>
            <section className="container">
                <div className="call_to_action style_two bg_op_1 position-relative z_99 mr_bottom_minus_200" style={{ backgroundImage: 'url(assets/images/footer/footer-3-bg.jpg)' }}>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section_title type_one">
                                <h4 className="sm_title color_white"> Latest News &amp; Blog</h4>
                                <div className="title_whole">
                                    <h2 className="title color_white"> Find an Insurance
                                        Agent or Start Tracking
                                        your Claims</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_35" />
                            {/*-============spacing==========-*/}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="theme_btn_all">
                                        <Link href="#" className="theme_btn">
                                            Track Your Claim <span> <i className=" fi-rr-arrow-small-up" /></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center contact_header_one">
                                        <div className="icon_s">
                                            <i className=" fi-rr-headphones" /></div>
                                        <div className="content">
                                            <h6 className="tite color_white">Need Help?</h6>
                                            <div className="title_20"><Link href="tel:+000(123)45688" className="color_white">+000(123)456 88</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image_video_box_only type_one color_two">
                                <div className="image one height_340px">
                                    <img src="/assets/images/sub-1-min.png" alt="img" className="img-fluid height_340px" />
                                    <div className="video_box video-inner text-center">
                                        <VideoBox />
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
