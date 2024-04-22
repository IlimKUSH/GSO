import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})


export default function About5() {
    return (
        <>
            <section className="about-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_80" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="image_box_only type_seven">
                                <div className="icon_box_only type_four inline_box trans">
                                    <div className="icon">
                                        <img src="/assets/images/icon-image-1.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="content">
                                        <div className="title_18">
                                            <Link href="#">
                                                Life Insurance
                                            </Link>
                                        </div>
                                    </div>
                                    <Link className="link" href="#">
                                        <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                                            </circle>
                                            <g clipPath="url(#clip0_117_28468)">
                                                <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_117_28468">
                                                    <rect width={25} height={25} fill="white" transform="translate(5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                                <div className="icon_box_only type_four position_two trans">
                                    <div className="icon">
                                        <img src="/assets/images/icon-image-2.png" alt="img" className="img-fluid" />
                                    </div>
                                    <div className="content">
                                        <div className="title_18">
                                            <Link href="#">
                                                Health Insurance
                                            </Link>
                                        </div>
                                    </div>
                                    <Link className="link" href="#">
                                        <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                                            </circle>
                                            <g clipPath="url(#clip0_117_28462)">
                                                <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_117_28462">
                                                    <rect width={25} height={25} fill="white" transform="translate(5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                                <div className="fun_facts type_two">
                                    <h4>

                                        <CounterUp count={25} time={1} />
                                        <small>
                                            + </small></h4>
                                    <h6 className="title_no_a_26">Years Of
                                        Experience</h6>
                                </div>
                                <div className="m_image">
                                    <img src="/assets/images/about/about-1-min.png" alt="img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 pd_left_80">
                            <div className="section_title type_one">
                                <h4 className="sm_title"> Amazing Company</h4>
                                <div className="title_whole">
                                    <h2 className="title"> We’re a Trusted and Professional Insurance Company</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative">
                                Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                                laudanti totam aperiam eaquecy epsa abillo inventore veritatis architecto beatae
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                            <div className="row">
                                <div className="col-lg-5 col-md-12">
                                    <div className="theme_btn_all">
                                        <Link href="#" className="theme_btn rotate big">
                                            Learn More <span><i className=" fi-rr-arrow-small-up" /></span>
                                        </Link>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-7 col-md-12">
                                    <div className="d-flex align-items-center contact_header_one color_three">
                                        <div className="icon_s">
                                            <i className=" fi-rr-headphones" /></div>
                                        <div className="content">
                                            <h6 className="tite">Need Help?</h6>
                                            <div className="title_20"><Link href="tel:+000(123)45688">+000(123)456
                                                88</Link></div>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                            <div className="divider" />
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="fun_facts type_one with_box_shadow">
                                        <h4>

                                            <CounterUp count={8563} time={1} />
                                            <small>
                                                + </small></h4>
                                        <h6 className="title_no_a_18">Saticfied Custimer</h6>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="fun_facts type_one">
                                        <h4>

                                            <CounterUp count={8563} time={1} />
                                            <small>
                                                + </small></h4>
                                        <h6 className="title_no_a_18">Saticfied Custimer</h6>
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
                <div className="pd_bottom_80" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
