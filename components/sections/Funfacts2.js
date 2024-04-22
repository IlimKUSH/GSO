import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})


export default function Funfacts2() {
    return (
        <>
            <section className="funfacts-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 w_50_after_max_768">
                            <div className="fun_facts type_one color_three text-start">
                                <h4>

                                    <CounterUp count={528} time={1} />
                                    <small>
                                        k+ </small></h4>
                                <h6 className="title_no_a_18">Customer Profiles</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 w_50_after_max_768">
                            <div className="fun_facts type_one color_three text-start">
                                <h4>

                                    <CounterUp count={99} time={1} />
                                    <small>
                                        % </small></h4>
                                <h6 className="title_no_a_18">Satisficed Customer</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 w_50_after_max_768">
                            <div className="fun_facts type_one color_three text-start">
                                <h4>

                                    <CounterUp count={36} time={1} />
                                    <small>
                                        + </small></h4>
                                <h6 className="title_no_a_18">Years Of Experience</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 w_50_after_max_768">
                            <div className="fun_facts type_one color_three text-start">
                                <h4>

                                    <CounterUp count={803} time={1} />
                                    <small>
                                        + </small></h4>
                                <h6 className="title_no_a_18">Awards Winning</h6>
                            </div>
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
