import Link from "next/link"
import useAxios from "@/hooks/useAxios";
import {useLocale} from "next-intl";

export default function Process2() {
    const locale = useLocale()
    const {response, loading, update} = useAxios({
        method: "get",
        url: "/api/process/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })
    const data = response?.results[0]

    return (
        <>
            <section id="process" className="process-section">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="section_title text-center type_four">
                                <h4 className="sm_title"> {data?.["main_title_" + locale]}</h4>
                                <div className="title_whole">
                                    <h2 className="title"> {data?.["subtitle_" + locale]}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                    <div className="row">
                        {data?.process_list?.map((listItem) => (
                            <div key={listItem.id} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="process_box type_two type_three color_two hover_1_get">
                                    <div className="image_box hover_1">
                                        <img src={listItem.photo} alt="img"
                                             className="img-fluid"/>
                                        <div className="oh ho_1"/>
                                        <div className="oh ho_2"/>
                                        <div className="oh ho_3"/>
                                        <div className="oh ho_4"/>
                                        <div className="icon trans"/>
                                    </div>
                                    <div className="content_no">
                                        <div className="con_top">
                                            <p className="step">{listItem.process}</p>
                                            <div className="title_22">
                                                <Link href="#">
                                                    {listItem?.["title_" + locale]} </Link></div>
                                        </div>
                                        <p>{listItem?.["description_" + locale]}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
