// import PortfolioFilter from "@/components/elements/PortfolioFilter"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const PortfolioFilterStyle2 = dynamic(() => import('@/components/elements/PortfolioFilterStyle2'), {
    ssr: false,
})
export default function PortfolioStyle2() {

    return (
        <>
            <Layout breadcrumbTitle="Portfolio Style 2">
                {/*-Portfolio*/}
                <section className="portfolio-section-one">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Latest Portfolio</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Take a Look Our Latest Portfolio Insides </h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6" />
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_20" />
                        {/*-============spacing==========-*/}
                        <section className="portfolio_v1 portfolio_tabs">
                            <PortfolioFilterStyle2 />
                        </section>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-Portfolio end*/}


            </Layout>
        </>
    )
}