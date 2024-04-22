import Link from "next/link"

export default function BlogCard3({ item }) {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="blog_box type_two trans hover_1_get">
                    <div className="blog_inner trans">
                        <div className="image_box trans hover_1">
                            <Link href={`/blog/${item.id}`}>
                                <img src={`/assets/images/blog/${item.img}`} className="img-fluid" alt="img" />
                            </Link>
                            <div className="oh ho_1" />
                            <div className="oh ho_2" />
                            <div className="oh ho_3" />
                            <div className="oh ho_4" />
                            <span className="date_tm">
                                <i className="fi-rr-calendar" />
                                <time className="date published" >Jan 3, {new Date().getFullYear()}</time>
                            </span>
                        </div>
                        <div className="content">
                            <div className="d-flex authour align-items-center">
                                <img src="/assets/images/gavatar.png" alt="gavatar" className="img-fluid" /> Bradley R Grady
                            </div>
                            <h4 className="title_22">
                                <Link href={`/blog/${item.id}`}>Former insures only the marine perils</Link>
                            </h4>
                            <p className="descs"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem…</p>
                            <div className="bottn_flex">
                                <Link href="/blog-details" className="rd_more">Read More <i className="fi-rr-arrow-small-right" />
                                </Link>
                                <small className="comments">
                                    <i className="far fa-comment-dots" />
                                    <Link href={`/blog/${item.id}`} className="Comments are Closed">Post a Comment</Link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
