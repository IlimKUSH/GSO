import Link from "next/link"


export default function Content2() {
    return (
        <>
            <section className="content-section">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="image">
                                <img src="/assets/images/about/content-image-1.png" className="img-fluid" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_30" />
                            {/*-============spacing==========-*/}
                            <div className="section_title type_two">
                                <h4 className="sm_title"> Awards Winning</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Something Know About Our Awadrs Winning</h2>
                                </div>
                                <p>
                                    Sit amet, consectetur adipiscing elit. Orci dui vitae sit odio. Nisl,
                                    dignissim nisi, ut maecenas libero. Massa ut cursus massa nisl sit nullam
                                    augue ornare mattis. Proin ultrices massa arcu scelerisque facilisi egestas
                                    eassa egestas at pharetra sollicitudin
                                </p>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                            <div className="theme_btn_all">
                                <Link href="#" className="theme_btn color_two big rotate">
                                    About Team <span> <i className=" fi-rr-arrow-small-up" /></span>
                                </Link>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_30" />
                    {/*-============spacing==========-*/}
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_30" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
