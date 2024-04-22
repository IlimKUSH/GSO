import Link from "next/link"

export default function Cta2() {
    return (
        <>
            <section className="position-relative z_99 mr_bottom_minus_80">
                <div className="container">
                    <div className="call_to_action style_one">
                        <div className="section_title type_one">
                            <div className="title_whole">
                                <h2 className="title">
                                    Find an Insurance Agent or Start
                                    Tracking your Claims
                                </h2>
                            </div>
                        </div>
                        <div className="theme_btn_all">
                            <Link href="#" className="theme_btn">
                                Track Your Claim <span> <i className=" fi-rr-arrow-small-up" /></span>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center contact_header_one">
                            <div className="icon_s">
                                <i className=" fi-rr-headphones" />
                            </div>
                            <div className="content">
                                <h6 className="tite">Need Help?</h6>
                                <div className="title_20"><Link href="tel:+000(123)45688">+000(123)456 88</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
