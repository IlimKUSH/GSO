import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>
            <Layout breadcrumbTitle="Contact">
                {/*-contact*/}
                <section className="contact-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact_box_content">
                                    <div className="icon trans">
                                        <img src="/assets/images/cont-1.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="contact-infor">
                                        <h6 className="title_no_a_24"> Location</h6>
                                        <span>55 Main Street, 2nd Block
                                            melbourne, Australia</span>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact_box_content">
                                    <div className="icon trans">
                                        <img src="/assets/images/cont-2.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="contact-infor">
                                        <h6 className="title_no_a_24">Email</h6>
                                        <Link href="mailto:support@gmail.com">support@gmail.com
                                        </Link>
                                        <Link href="mailto:infoinsurace.com">infoinsurace.com</Link>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact_box_content">
                                    <div className="icon trans">
                                        <img src="/assets/images/cont-3.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="contact-infor">
                                        <h6 className="title_no_a_24">Call Us</h6>
                                        <Link href="tel:+00012345688">+000 (123) 456 88
                                        </Link>
                                        <Link href="tel:+12345678">+12345 678</Link>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                {/*-contact end*/}\
                {/*map*/}
                <section className="contact-map-section">
                    <div className="container-no">
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="map-section">
                                    {/*Map Outer*/}
                                    <div className="map-outer">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                {/*map*/}
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
                                        <form id="contact-form" method="post" action="contact.php" role="form">
                                            <div className="messages" />
                                            <div className="controls">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" name="name" placeholder="Your Name *" required="required" data-error="Enter Your Name" />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" name="email" required="required" placeholder="Email *" data-error="Enter Your Email Id" />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" name="subject" required="required" placeholder=" Subject  (Optional)" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <textarea name="message" placeholder="Additional Information... (Optional) " rows={3} required="required" data-error="Please, leave us a message." />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group mg_top apbtn">
                                                            <button className="theme_btn" type="submit">Send Message</button>
                                                        </div>
                                                    </div>
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