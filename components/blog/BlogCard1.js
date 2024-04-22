import Link from "next/link"

export default function BlogCard1({ item }) {
    return (
        <>
            <div className="col-xl-12">
                <article className="blog_style one has_images" id="post-1576">
                    <div className="image_box ">
                        <Link href={`/blog/${item.id}`}>
                            <img src={`/assets/images/blog/${item.img}`} alt="img" className="img-fluid" />
                        </Link>
                    </div>
                    <div className="content_box">
                        <div className="d-flex top align-items-center">
                            <Link href={`/blog/${item.id}`} className="cat_gry">Business Insurance</Link>
                            <span className="date_tm">
                                <i className="fi-rr-calendar" />
                                <time className="date published" dateTime="2023-01-03T10:03:20+00:00">Jan 3, 2023</time>
                            </span>
                        </div>
                        <div className="d-flex authour align-items-center">
                            <img alt="blog" src="assets/images/gavatar.png" className="img-fluid" /> Bradley R Grady
                        </div>
                        <h2 className="tit_ho title_28">
                            <Link href={`/blog/${item.id}`} rel="bookmark">{item.title}</Link>
                        </h2>
                        <div className="bottom d-flex  align-items-center">
                            <Link href={`/blog/${item.id}`} className="rd_more">Read More <i className="fi-rr-arrow-small-right" />
                            </Link>
                            <small className="comments">
                                <i className="far fa-comment-dots" />
                                <Link href={`/blog/${item.id}`} className="Comments are Closed">Post a Comment</Link>
                            </small>
                        </div>
                    </div>
                </article>
            </div>

        </>
    )
}
