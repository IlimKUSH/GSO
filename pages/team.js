import VideoBox from "@/components/elements/VideoBox"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function Team() {

    return (
        <>
            <Layout breadcrumbTitle="Team">
                {/*team*/}
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
                                            <img src="/assets/images/team/team-5.png" alt="img" className="img-fluid" />
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
                                            <img src="/assets/images/team/team-6.png" alt="img" className="img-fluid" />
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
                                            <img src="/assets/images/team/team-7.png" alt="img" className="img-fluid" />
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
                                            <img src="/assets/images/team/team-8.png" alt="img" className="img-fluid" />
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
                {/*team*/}
                {/*content*/}
                <section className="content-section">
                    <div className="medium-container-two">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image_video_box_only  type_one mr_bottom_minus_140 z_1">
                                    <div className="image one height_600px">
                                        <img src="/assets/images/team/team-ex-1-min.png" alt="img" className="img-fluid height_600px" />
                                        <div className="video_box video-inner text-center">
                                            <VideoBox />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pd_left_80 pd_bottom_30">
                                {/*-============spacing==========-*/}
                                <div className="pd_top_30" />
                                {/*-============spacing==========-*/}
                                <div className="section_title type_one"><h4 className="sm_title"> Popular Skills</h4><div className="title_whole"><h2 className="title"> We’re Best Experience
                                    Insurance Provider</h2></div><p> Sit amet consectetur adipiscing elites varius montes, massa
                                        blandit orci. Sed egestas tellu aliquet egetristique</p></div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="progress_bar"><div className="d-flex align-items-center"><h6 className="title_no_a_18">Development</h6><div> <CounterUp count={79} time={1} />%</div></div><div className="bar"><div className="bar-inner count-bar counted" data-percent="79%" style={{ width: '79%' }} /></div></div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                                <div className="progress_bar"><div className="d-flex align-items-center"><h6 className="title_no_a_18">Banking &amp; Transactions</h6><div> <CounterUp count={93} time={1} />%</div></div><div className="bar"><div className="bar-inner count-bar counted" data-percent="93%" style={{ width: '93%' }} /></div></div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_60" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                </section>
                {/*content*/}
                {/*service*/}
                <section className="service-section bg_light_1">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_170" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center type_one">
                                    <h4 className="sm_title"> Great Offer For Customer</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Amazing Features For Insurance</h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_top_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_only  type_seven">
                                    <div className="icon">
                                        <i className=" flaticon-insurance-2" /></div>
                                    <div className="title_24">
                                        <Link href="#">
                                            Insurance Services </Link></div>
                                    <p>Sed ut perspiciatis unde omnis
                                        natus errr voluptatem accusantium doloremue laudant totam</p>
                                    <Link className="rd_more" href="#">
                                        Read More<i className="icontb fi-rs-arrow-small-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_only  type_seven">
                                    <div className="icon">
                                        <i className=" flaticon-insurance-2" /></div>
                                    <div className="title_24">
                                        <Link href="#">
                                            Insurance Services </Link></div>
                                    <p>Sed ut perspiciatis unde omnis
                                        natus errr voluptatem accusantium doloremue laudant totam</p>
                                    <Link className="rd_more" href="#">
                                        Read More<i className="icontb fi-rs-arrow-small-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_only   type_seven">
                                    <div className="icon">
                                        <i className=" flaticon-iteration" /></div>
                                    <div className="title_24">
                                        <Link href="#">
                                            Easy &amp; Fast Process </Link></div>
                                    <p>Sed ut perspiciatis unde omnis
                                        natus errr voluptatem accusantium doloremue laudant totam</p>
                                    <Link className="rd_more" href="#">
                                        Read More<i className="icontb fi-rs-arrow-small-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                </section>
                {/*service*/}


            </Layout>
        </>
    )
}