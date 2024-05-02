import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import {useLocale, useTranslations} from "next-intl";
import useAxios from "@/hooks/useAxios";

const BlogDetails = () => {
    const t = useTranslations()
    const locale = useLocale()
    const router = useRouter()

    const { id } = router.query

    const {response, update} = useAxios()

    useEffect(() => {
        if (id) {
            update({
                method: "get",
                url: `/api/blog/${id}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
                },
            })
        }
    }, [id])

    const data = response

    return (
        <>
            <Layout>
                <section className="blog-detail-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_40" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog_single_content">
                                    <div className="single-thumbnail">
                                        <img src={data?.featured_image} className="img-fluid" alt="img" />
                                    </div>
                                    <div className="single_content_upper">
                                        <div className="post_single_content">
                                            <div className="section_title small type_one mr_bottom_25">
                                                <div className="title_whole">
                                                    <h3 className="title"> {data?.["title_" + locale]} </h3>
                                                </div>
                                            </div>
                                            <div className="position-relative position_p_relative mr_bottom_20"> {data?.["content_" + locale]}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_70" />
                    {/*-============spacing==========-*/}
                </section>
            </Layout>
        </>
    )
}

export default BlogDetails

export async function getStaticProps(context) {
    return {
        props: {
            messages: {
                ...(await import(`public/locales/${context.locale}/common.json`)).default,
            },
        },
    };
}

export function getStaticPaths(context) {
    return {
        paths: [],
        fallback: "blocking",
    };
}
