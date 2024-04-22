import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogStyle2() {

    return (
        <>
            <Layout breadcrumbTitle="Blog">
                <div id="content" className="site-content">
                    <section className="blog_post position-relative">
                        {/*-============spacing==========-*/}
                        <div className="pd_top_90" />
                        {/*-============spacing==========-*/}
                        <div className="container">
                            <div className="row">
                                <BlogPost showItem={6} style={3} showPagination />
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_70" />
                        {/*-============spacing==========-*/}
                    </section>
                </div>

            </Layout>
        </>
    )
}