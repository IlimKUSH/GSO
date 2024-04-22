import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function Funfacts4() {
    return (
        <>
            <section className="fub-fact-section position-relative z_2 bg_op_1 overflow-hidden" style={{ backgroundImage: 'url(assets/images/page-image-1-min.jpg)' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_60" />
                {/*-============spacing==========-*/}
                <div className="medium-container">
                    <div className="background_overlay z_0" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="fun_facts type_three">
                                <div className="icon trans">
                                    <i className="color_white flaticon-satisfaction" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <CounterUp count={8563} time={1} color="color_white" />

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
                                        <CounterUp count={263} time={1} color="color_white" />

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
                                        <CounterUp count={100} time={1} color="color_white" />
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
                                        <CounterUp count={15} time={1} color="color_white" />
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
                {/*-============spacing==========-*/}
                <div className="pd_bottom_30" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
