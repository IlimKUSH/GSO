import Link from "next/link"


export default function Team2() {
    return (
        <>
            <section className="team-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center type_one">
                                <h4 className="sm_title"> Our Team Member</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Meet Our Amazing Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="team_box type_two">
                                <div className="team_box_inner">
                                    <div className="contnet">
                                        <h6 className="title_22">
                                            <Link href="#">
                                                Harry R. Blackston </Link></h6>
                                        <p> Senior Manager</p>
                                    </div>
                                    <div className="image_box">
                                        <img src="/assets/images/team/team-1-min.png" alt="img" className="img-fluid" />
                                        <div className="social-icons trans">
                                            <ul>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-facebook" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-twitter" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-skype" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-instagram" />
                                                    </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="team_box type_two">
                                <div className="team_box_inner">
                                    <div className="contnet">
                                        <h6 className="title_22">
                                            <Link href="#">
                                                Guillermo V. Hanson </Link></h6>
                                        <p> Business Consultant</p>
                                    </div>
                                    <div className="image_box">
                                        <img src="/assets/images/team/team-2-min.png" alt="img" className="img-fluid" />
                                        <div className="social-icons trans">
                                            <ul>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab  fa-facebook" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-twitter" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-skype" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-instagram" />
                                                    </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="team_box type_two">
                                <div className="team_box_inner">
                                    <div className="contnet">
                                        <h6 className="title_22">
                                            <Link href="#">
                                                Michael A. Yates </Link></h6>
                                        <p> Junior Manager</p>
                                    </div>
                                    <div className="image_box">
                                        <img src="/assets/images/team/team-3-min.png" alt="img" className="img-fluid" />
                                        <div className="social-icons trans">
                                            <ul>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-facebook" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-twitter" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-skype" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-instagram" />
                                                    </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="team_box type_two">
                                <div className="team_box_inner">
                                    <div className="contnet">
                                        <h6 className="title_22">
                                            <Link href="#">
                                                Mark M. McClure </Link></h6>
                                        <p> Sr Engineer</p>
                                    </div>
                                    <div className="image_box">
                                        <img src="/assets/images/team/team-4-min.png" alt="img" className="img-fluid" />
                                        <div className="social-icons trans">
                                            <ul>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-facebook" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-twitter" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-skype" />
                                                    </Link></li>
                                                <li>
                                                    <Link href="#" className="m_icon">
                                                        <i className="fab fa-instagram" />
                                                    </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
