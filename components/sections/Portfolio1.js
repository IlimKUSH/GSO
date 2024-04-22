// import PortfolioFilter from "../elements/PortfolioFilter"
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('../elements/PortfolioFilter1'), {
    ssr: false,
})

export default function Portfolio1() {
    return (
        <>
            <section className="portfolio-section bg_2 position-relative bg_op_8" style={{ backgroundImage: 'url(assets/images/line-4.png)!important' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="large-container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="section_title text-center color_white type_one">
                                <h4 className="sm_title"> Popular Clients</h4>
                                <div className="title_whole">
                                    <h2 className="title"> We’ve 1520+
                                        Global Premium
                                        Clients</h2>
                                </div>
                                <p> Sed ut perspiciatis unde omnis iste natusey
                                    voluptatem accusantium dolore</p>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <section className="portfolio_v1 portfolio_tabs  ajax_protfolio_enabled ">
                        <PortfolioFilter1 />
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_70" />
                        {/*-============spacing==========-*/}
                    </section>
                </div>
            </section>

        </>
    )
}
