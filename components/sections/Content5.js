import Link from "next/link"
import VideoBox from "../elements/VideoBox"


export default function Content5() {
    return (
        <>
            <section className="content-section position-relative  bg_op_4" style={{ backgroundImage: 'url(assets/images/service-brlow-min.jpg)!important' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="background_overlay bg_13 z_0" />
                <div className="container-no">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_20" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative z_1">
                                <img src="/assets/images/call-1-min.png" className="img-fluid m-auto" alt="img" />
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-4 pd_left_70 pd_right_70">
                            <div className="section_title color_white type_five">
                                <h4 className="sm_title"> Insurance Services</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Find an Insurance
                                        Agent or Start Tracking
                                        your Claims</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                            <div className="theme_btn_all">
                                <Link href="#" className="theme_btn big2 icon_center color_white_two">
                                    Track Your Cliam <span><i aria-hidden="false" className="far fa-arrow-alt-circle-right" /></span>
                                </Link></div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_50" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-4 pd_left_70 pd_right_70">
                            <div className="position-relative">
                                <p className="color_white">
                                    Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptaem accusantium doloremue laudantium
                                    totam rem aperiam eauec abillo inventore.
                                </p>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                                <div className="image_video_box_only  type_one">
                                    <div className="image one height_210px">
                                        <img src="/assets/images/clain-1.png" className="img-fluid height_210px object-fit-cover" alt="img" />
                                        <div className="video_box video-inner text-center">
                                            <VideoBox />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_20" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative z_1">
                                <img src="/assets/images/call-2-min.png" className="img-fluid m-auto" alt="img" />
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_80" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
