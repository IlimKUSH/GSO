import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function Funfacts1() {
    return (
        <>
            <section className="fub-fact-section mr_bottom_minus_90 position-relative z_2">
                <div className="medium-container">
                    <div className="inner-section bg_op_1 position-relative overflow-hidden pd_top_60 pd_bottom_30 pd_left_60 pd_right_60 md_pd_left_15 md_pd_right_15" style={{ backgroundImage: 'url(assets/images/page-image-1-min.jpg)' }}>
                        <div className="background_overlay z_0" />
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_three">
                                    <div className="icon trans">
                                        <i className="color_white flaticon-satisfaction" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <CounterUp count={8563} color="color_white" time={1} />
                                            <small className="color_white"> + </small>
                                        </h4>
                                        <h6 className="title_no_a_18 color_white">Saticfied Custimer</h6>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_three">
                                    <div className="icon trans">
                                        <i className="color_white flaticon-business-people" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <CounterUp count={263} color="color_white" time={1} />
                                            <small className="color_white"> + </small>
                                        </h4>
                                        <h6 className="title_no_a_18 color_white">Experience Team</h6>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_three">
                                    <div className="icon trans">
                                        <i className="color_white flaticon-reviews" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <CounterUp color="color_white" count={100} time={1} />
                                            <small className="color_white"> % </small>
                                        </h4>
                                        <h6 className="title_no_a_18 color_white">Satisfaction Rate</h6>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="fun_facts type_three">
                                    <div className="icon trans">
                                        <i className="color_white flaticon-trophy" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <CounterUp color="color_white" count={863} time={1} />
                                            <small className="color_white"> + </small>
                                        </h4>
                                        <h6 className="title_no_a_18 color_white">Awards Winning</h6>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
