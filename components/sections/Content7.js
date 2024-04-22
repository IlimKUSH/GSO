import Link from "next/link"
import VideoBox from "../elements/VideoBox"


export default function Content7() {
    return (
        <>
            <section className="content-section bg_light_1">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="image_video_box_only  type_one">
                                <div className="image one height_550px">
                                    <img src="/assets/images/form-image-1.jpg" alt="img" className="img-fluid height_550px object-fit-cover" />
                                    <div className="video_box video-inner text-center">
                                        <VideoBox />
                                    </div>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-7 col-md-12 pd_left_40">
                            <div className="section_title type_one">
                                <h4 className="sm_title"> Amazing Company</h4>
                                <div className="title_whole">
                                    <h2 className="title"> We Help you Build and Grow Your Business</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative border_left_abolute_5px_two pd_left_40">
                                Sit amet consectetur adipiscing elites varius montes, massa, blandit orci. Sed
                                egestas tellus est aliquet eget.
                                At tristique nisl nullam pharetra sed tempor sed ipsum eivera consectetur augue
                                molestie amet utiverra
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="icon_box_only type_five d-flex color_two trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">
                                                    Insurance Agency </Link></div>
                                            <p>On the other hand denoue
                                                with right indignation</p>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon_box_only type_five d-flex color_two  trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">
                                                    Fsat &amp; Easy Process </Link></div>
                                            <p>At vero eos et accu samus dignissimos ducimus</p>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon_box_only type_five d-flex color_two  trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">
                                                    Control Over Policy </Link></div>
                                            <p>Nam libero tempore cums soluta nobis cumque</p>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon_box_only type_five d-flex  color_two  trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">
                                                    Save Your Money </Link></div>
                                            <p>Blame belongs those Who duty through weakness</p>
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
                <div className="pd_bottom_60" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
