import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function TeamDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Team Details">
                {/*-team-section*/}
                <section className="team-section-one">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="image">
                                    <img src="/assets/images/team/team-detail-min.png" className="img-fluid" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 pd_left_60">
                                <div className="section_title type_one">
                                    <div className="title_whole">
                                        <h2 className="title"> Kevin K. Castrejon</h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_10" />
                                {/*-============spacing==========-*/}
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Kevin K. Castrejon</h4>
                                    <p className="pd_top_0"> Sit amet consectetur adipiscing elites varius montes,
                                        massa blandit orci egestas tellus est aliquet egetristique nisullam pharetra
                                        sed tempor sed consectetur</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                                <div className="box bg_light_1 pd_top_50 pd_bottom_50 pd_left_50 pd_right_50 md_pd_left_15 md_pd_right_15">
                                    <div className="progress_bar">
                                        <div className="d-flex align-items-center">
                                            <h6 className="title_no_a_18">Development</h6>
                                            <div> <CounterUp count={79} time={1} />%</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner count-bar counted" data-percent="79%" style={{ width: '79%' }} />
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                    <div className="progress_bar">
                                        <div className="d-flex align-items-center">
                                            <h6 className="title_no_a_18">Banking &amp; Transactions</h6>
                                            <div> <CounterUp count={96} time={1} />%</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner count-bar counted" data-percent="93%" style={{ width: '93%' }} />
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                    <div className="progress_bar">
                                        <div className="d-flex align-items-center">
                                            <h6 className="title_no_a_18">Communication</h6>
                                            <div> <CounterUp count={65} time={1} />%</div>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner count-bar counted" data-percent="65%" style={{ width: '65%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-team-section*/}
                {/*-team-section*/}
                <section className="team-section-two">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Qualification &amp; Experience</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> We’re Best Experience
                                            Insurance Provider</h2>
                                    </div>
                                    <p> On the other hand denounce with righteous indignation
                                        and dislike men who are beguiled demoralized</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="position-relative">
                                            <ul className="list_box list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" flaticon-check-mark" /></div>
                                                        <Link className="links" href="#">
                                                            Business Development </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" flaticon-check-mark" /></div>
                                                        <Link className="links" href="#">
                                                            Marketing Analysis </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" flaticon-check-mark" /></div>
                                                        <Link className="links" href="#">
                                                            Digital Solutions </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_20" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                    <div className="col">
                                        <div className="position-relative">
                                            <ul className="list_box list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" flaticon-check-mark" /></div>
                                                        <Link className="links" href="#">
                                                            Business Development </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" flaticon-check-mark" /></div>
                                                        <Link className="links" href="#">
                                                            Marketing Analysis </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="icon trans">
                                                            <i className=" flaticon-check-mark" /></div>
                                                        <Link className="links" href="#">
                                                            Digital Solutions </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*-============spacing==========-*/}
                                        <div className="pd_bottom_20" />
                                        {/*-============spacing==========-*/}
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_10" />
                                {/*-============spacing==========-*/}
                                <div className="theme_btn_all">
                                    <Link href="#" className="theme_btn big rotate">
                                        Contact us <span> <i className="fi-rr-arrow-small-right" /></span>
                                    </Link></div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="image">
                                    <img src="/assets/images/an-1-min.png" className="img-fluid" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_90" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-team-section*/}
                {/*form*/}
                <section className="form-section bg_light_1 position-relative">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> Get In Touch</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Need Any Help?
                                            Or Looking For
                                            an Agent</h2>
                                    </div>
                                    <p> On the other hand denounce righteousy indignation and dislike men</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                                <div className="social-icons">
                                    <ul>
                                        <li><Link href="#" className="m_icon"> <i className="fab fa-facebook" />
                                        </Link></li>
                                        <li><Link href="#" className="m_icon"> <i className="fab fa-twitter" />
                                        </Link></li>
                                        <li><Link href="#" className="m_icon"> <i className="fab fa-skype" />
                                        </Link></li>
                                        <li><Link href="#" className="m_icon"> <i className="fab fa-instagram" />
                                        </Link></li>
                                    </ul>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <section className="contact_form_box_all">
                                    <div className="contact_form_shortcode">
                                        <form method="post" action="#">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 mr_bottom_15">
                                                    <input type="text" name="full-name" placeholder="Full Name" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 mr_bottom_15">
                                                    <input type="text" name="Phone" placeholder="Phone" />
                                                </div>
                                                <div className="col-sm-12 mr_bottom_15">
                                                    <input type="email" name="email" placeholder="Email Address" required />
                                                </div>
                                                <div className="col-sm-12 mr_bottom_15">
                                                    <textarea name="message" placeholder="Message" maxLength={3} />
                                                </div>
                                                <div className="col-sm-12">
                                                    <button type="submit">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="ab_img_left_bottom z_0 mr_top_minus_150">
                        <img src="/assets/images/bg-1.png" className="img-fluid" alt="img" />
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_90" />
                    {/*-============spacing==========-*/}
                </section>
                {/*form*/}


            </Layout>
        </>
    )
}