import dynamic from 'next/dynamic'
import { useState } from "react"
import {useLocale, useTranslations} from "next-intl";
import useAxios from "@/hooks/useAxios";
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})


export default function Content4() {
    const t = useTranslations()
    const locale = useLocale()

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: "",
        insurance_type: 1,
        limit_of_balance: 2000,
    });

    const {response} = useAxios({
        method: "get",
        url: "/api/form/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })
    const data = response?.results[0]

    const {response: insuranceType} = useAxios({
        method: "get",
        url: "/api/insurance_types/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
    })

    const {update} = useAxios()

    const insuranceTypes = insuranceType?.results

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await update({
            method: "post",
            url: "/api/insurances/",
            headers: {
                'Content-Type': 'application/json',
                Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
            },
            data: formData
        });
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone_number: "",
            insurance_type: 1,
            limit_of_balance: 2000,
        })
    }

    return (
        <>
            <section className="content-section bg_op_1 position-relative" style={{ backgroundImage: 'url(assets/images/bg-3.jpg)' }}>
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="background_overlay bg_light_3 z_0" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 pd_right_60">
                            <div className="section_title type_four">
                                <h4 className="sm_title"> {data?.["title_" + locale]}</h4>
                                <div className="title_whole">
                                    <h2 className="title"> {data?.["subtitle_" + locale]} </h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="fom_tab_box custom_tabs type_three">
                                <div className="s_tabs_content tab-content">
                                    <div className="contentbox ">
                                        <div className="contact_form_shortcode">
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <label>{t("FirstName")} <span>*</span></label>
                                                        <input type="text" name="first_name" placeholder="Larry"
                                                               required
                                                               value={formData.first_name}
                                                               onChange={handleInputChange}/>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label>{t("LastName")} <span>*</span></label>
                                                        <input type="text" name="last_name" placeholder=" D. McMahon"
                                                               required
                                                               value={formData.last_name} onChange={handleInputChange}/>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label>{t("Email")} <span>*</span></label>
                                                        <input type="email" name="email" placeholder="support@gmail.com"
                                                               required
                                                               value={formData.email} onChange={handleInputChange}/>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label>{t("PhoneNumber")} <span>*</span></label>
                                                        <input type="tel" name="phone_number" placeholder="+0237671872" required
                                                               value={formData.phone_number} onChange={handleInputChange} />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label>{t("InsuranceType")}</label>
                                                        <select value={formData.insurance_type} onChange={handleInputChange}>
                                                            {insuranceTypes?.map((type) => (
                                                                <option value={type.id}>{type.type}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <label>{t("BalanceLimit")}</label>
                                                        <input type="range" name="limit_of_balance" min={0} max={9000} step={1}
                                                               style={{ width: "100%" }} value={formData.limit_of_balance} onChange={handleInputChange} />
                                                        <div className="slider-hint"><b>{formData.limit_of_balance}</b>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        {/*-============spacing==========-*/}
                                                        <div className="pd_top_15"/>
                                                        {/*-============spacing==========-*/}
                                                        <button type="submit">{t("GetAQuote")}</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="image_box_only type_seven color_two">
                                <div className="fun_facts type_two">
                                    <h4>
                                        <span className="count">{data?.feature_number}</span>
                                        <small>
                                            + </small></h4>
                                    <h6 className="title_no_a_26">{data?.["feature_description_" + locale]}</h6>
                                </div>
                                <div className="m_image">
                                    <img src={data?.image} alt="img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_70" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
