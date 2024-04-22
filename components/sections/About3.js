import dynamic from 'next/dynamic'

import Link from 'next/link'
import VideoBox from "../elements/VideoBox"
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})


export default function About3() {
    return (
        <>
            <section className="about-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 pd_right_60">
                            <div className="section_title type_four">
                                <h4 className="sm_title"> Amazing Company</h4>
                                <div className="title_whole">
                                    <h2 className="title"> We’re a Trusted and Professional Insurance Company</h2>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
                                    doloremque laudanti totam aperiam eaquecy epsa abillo inventore veritatis
                                    architecto beatae
                                </p>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_25" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative">
                                <ul className="list_box list color_two">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                            <Link className="links" href="#">
                                                Best Insurance Agency </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                            <Link className="links" href="#">
                                                Trusted & Experience Insurance </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="icon trans">
                                                <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                            <Link className="links" href="#">
                                                Dedicated Support &amp; Security </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_35" />
                            {/*-============spacing==========-*/}
                            <div className="theme_btn_all">
                                <Link href="#" className="theme_btn color_three big rotate">
                                    Learn More <span> <i className=" fi-rr-arrow-small-up" /></span>
                                </Link>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_25" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-4 col-md-8 mr_left_minus_40">
                            <div className="image_video_box_only type_two color_two">
                                <div className="image one">
                                    <img src="/assets/images/about/about-4-1.png" alt="img" className="imf-fluid" />
                                    <div className="video_box video-inner text-center">
                                        <VideoBox />
                                    </div>
                                    <div className="fun_facts type_two">
                                        <h6 className="title_no_a_18">25</h6>
                                        <h6 className="title_no_a_26">Years Of <br />
                                            Experience</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 pd_left_30">
                            <div className="fun_facts type_one color_two text-start">
                                <h4>

                                    <CounterUp count={8563} time={1} />
                                    <small>
                                        + </small></h4>
                                <h6 className="title_no_a_18">Helath Insurance</h6>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            <div className="divider" />
                            <div className="mr_bottom_20" />
                            {/*-============spacing==========-*/}
                            <div className="fun_facts type_one color_two text-start">
                                <h4>

                                    <CounterUp count={263} time={1} />
                                    <small>
                                        + </small></h4>
                                <h6 className="title_no_a_18">Experience Team</h6>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            <div className="divider" />
                            <div className="mr_bottom_20" />
                            {/*-============spacing==========-*/}
                            <div className="fun_facts type_one color_two text-start">
                                <h4>

                                    <CounterUp count={93} time={1} />
                                    <small>
                                        + </small></h4>
                                <h6 className="title_no_a_18">Awards Winning</h6>
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
