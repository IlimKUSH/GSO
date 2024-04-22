import Link from "next/link"

export default function Breadcrumb({breadcrumbTitle}) {
    return (
        <>
            <section className="page_header_default pg_bg_cover alignment_center">
                <div className="bakground_cover" style={{ backgroundImage: 'url(assets/images/page-image-1-min.jpg)' }} />
                <div className="page_header_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner_title_inner">
                                    <div className="title">
                                        <span className="main_tit">{breadcrumbTitle}</span> </div>
                                </div>
                            </div>
                            <div className="col-lg-12 vankine">
                                <ul className="breadcrumb m-auto">
                                    <li><Link href="#">Home</Link> </li>
                                    <li className="active">{breadcrumbTitle}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
