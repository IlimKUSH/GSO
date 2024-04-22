import Link from "next/link"


export default function About2() {
    return (
        <>
            <section className="about-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="image">
                                <img src="/assets/images/about/about-2-11.png" className="img-fluid" alt="img" />
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-6">
                            <div className="section_title type_two">
                                <h4 className="sm_title"> Amazing Company</h4>
                                <div className="title_whole">
                                    <h2 className="title"> We’re a Trusted and Professional Insurance Company </h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative border_left_abolute_5px pd_left_40">
                                Sit amet consectetur adipiscing elites varius montes, massa, blandit orci. Sed
                                egestas tellus est aliquet eget.
                                At tristique nisl nullam pharetra sed tempor sed ipsum eivera consectetur augue
                                molestie amet utiverra
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                            <div className="row gutter_15px pd_left_40">
                                <div className="col-lg-5">
                                    <div className="theme_btn_all">
                                        <Link href="#" className="theme_btn color_two rotate big">
                                            Learn More <span> <i className=" fi-rr-arrow-small-up" /></span>
                                        </Link>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-7">
                                    <div className="d-flex align-items-center contact_header_one color_two">
                                        <div className="icon_s">
                                            <i className=" fi-rr-headphones" />
                                        </div>
                                        <div className="content">
                                            <h6 className="tite">Need Help?</h6>
                                            <div className="title_20"><Link href="tel:+000(123)45688">+000(123)456
                                                88</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_40" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
