import dynamic from 'next/dynamic'
import VideoBox from "../elements/VideoBox"
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})


export default function Funfacts3() {
    return (
        <>
            <section className="fun-fact-video">
                <div className="d-flex flex-wrap">
                    <div className="video-section w_50">
                        {/*-============spacing==========-*/}
                        <div className="pd_top_70 d_md_none" />
                        {/*-============spacing==========-*/}
                        <div className="image_video_box_only  type_one">
                            <div className="image one">
                                <img src="/assets/images/an-1-min.png" alt="img" className="img-fluid" />
                                <div className="video_box video-inner text-center">
                                    <VideoBox />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fun-facts-section bg_op_4 bg_2 w_50 pd_top_90 pd_left_90 pd_right_90 pd_bottom_90 md_pd_left_15 md_pd_right_15" style={{ backgroundImage: 'url(assets/images/dot-2.png)!important' }}>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section_title color_white type_one">
                                    <h4 className="sm_title"> Company Statistics Analysis</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Great Achievement
                                            For Insurance</h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="fun_facts type_four color_two">
                                            <div className="icon trans">
                                                <i className=" flaticon-satisfaction" /></div>
                                            <h4>

                                                <CounterUp count={8563} time={1} />
                                                <small>
                                                    + </small></h4>
                                            <h6 className="title_no_a_18">Satisfied Custimer</h6>
                                        </div>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_30" />
                                        {/*-============spacing==========-*/}
                                        <div className="fun_facts type_four color_three">
                                            <div className="icon trans">
                                                <i className=" flaticon-reviews" /></div>
                                            <h4>

                                                <CounterUp count={100} time={1} />
                                                <small>
                                                    % </small></h4>
                                            <h6 className="title_no_a_18">Saticfied Custimer</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        {/*-============spacing==========-*/}
                                        <div className="pd_top_30" />
                                        {/*-============spacing==========-*/}
                                        <div className="fun_facts type_four color_three">
                                            <div className="icon trans">
                                                <i className=" flaticon-satisfaction" /></div>
                                            <h4>

                                                <CounterUp count={8563} time={1} />
                                                <small>
                                                    + </small></h4>
                                            <h6 className="title_no_a_18">Satisfied Custimer</h6>
                                        </div>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_top_30" />
                                        {/*-============spacing==========-*/}
                                        <div className="fun_facts type_four color_three">
                                            <div className="icon trans">
                                                <i className=" flaticon-trophy" /></div>
                                            <h4>

                                                <CounterUp count={963} time={1} />
                                                <small>
                                                    + </small></h4>
                                            <h6 className="title_no_a_18">Awards Winning</h6>
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
