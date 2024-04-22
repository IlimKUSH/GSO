import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function Analysis1() {
    return (
        <>
            <section className="analysis-section position-relative bg_8 overflow-hidden">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="ab_img_left_top z_0 mr_top_minus_150">
                    <img src="/assets/images/shape/wave-pattern-2.png" className="img-fluid" alt="img" />
                </div>
                <div className="medium-container-two">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center color_white type_one">
                                <h4 className="sm_title">Company Statistics Analysis</h4>
                                <div className="title_whole">
                                    <h2 className="title">Great Achievement For Insurance</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_30" />
                    {/*-============spacing==========-*/}
                    <div className="row">
                        <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12" />
                        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                            <div className="fun_facts type_one color_white">
                                <div className="icon trans">
                                    <div className="icon_in trans">
                                        <i className=" flaticon-satisfaction" /></div>
                                </div>
                                <h4>

                                    <CounterUp count={8563} time={1} />
                                    <small>
                                        + </small></h4>
                                <h6 className="title_no_a_18">Saticfied Custimer</h6>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                            <div className="fun_facts type_one color_white">
                                <div className="icon trans">
                                    <div className="icon_in trans">
                                        <i className=" flaticon-business-people" /></div>
                                </div>
                                <h4>

                                    <CounterUp count={2630} time={1} />
                                    <small>
                                        + </small></h4>
                                <h6 className="title_no_a_18">Experience Members</h6>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                            <div className="fun_facts type_one color_white">
                                <div className="icon trans">
                                    <div className="icon_in trans">
                                        <i className=" flaticon-reviews" /></div>
                                </div>
                                <h4>

                                    <CounterUp count={100} time={1} />
                                    <small>
                                        % </small></h4>
                                <h6 className="title_no_a_18">Satisfaction Rate</h6>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                            <div className="fun_facts type_one color_white">
                                <div className="icon trans">
                                    <div className="icon_in trans">
                                        <i className=" flaticon-presenter" /></div>
                                </div>
                                <h4>

                                    <CounterUp count={25} time={1} />
                                    <small>
                                        + </small></h4>
                                <h6 className="title_no_a_18">Years Experience</h6>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                            <div className="fun_facts type_one color_white">
                                <div className="icon trans">
                                    <div className="icon_in trans">
                                        <i className=" flaticon-trophy" /></div>
                                </div>
                                <h4>

                                    <CounterUp count={963} time={1} />
                                    <small>
                                        + </small></h4>
                                <h6 className="title_no_a_18">Awards Winning</h6>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12" />
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_50" />
                {/*-============spacing==========-*/}
                <div className="ab_img_right_bottom z_0 mr_bottom_minus_250">
                    <img src="/assets/images/shape/wave-pattern-1.png" className="img-fluid" alt="img" />
                </div>
            </section>

        </>
    )
}
