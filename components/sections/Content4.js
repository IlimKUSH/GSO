import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import useAxios from "@/hooks/useAxios";

export default function Content4() {
  const t = useTranslations();
  const locale = useLocale();

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    region: "",
  });

  const { response } = useAxios({
    method: "get",
    url: "/api/form/",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    },
  });
  const data = response?.results[0];

  const { response: insuranceType } = useAxios({
    method: "get",
    url: "/api/region/",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    },
  });

  const { update } = useAxios();

  const region = insuranceType?.results;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await update({
        method: "post",
        url: "/api/insurances/",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        },
        data: formData,
      });
      setSubmissionStatus("success");
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        region: "",
      });
    } catch (error) {
      setSubmissionStatus("error");
    }
  };

  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  return (
    <>
      <section
        id="request"
        className="content-section bg_op_1 position-relative"
        style={{ backgroundImage: "url(assets/images/bg-3.jpg)" }}
      >
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
                            <label>
                              {t("FullName")} <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Larry"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-lg-6">
                            <label>{t("Email")}</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="support@gmail.com"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-lg-6">
                            <label>
                              {t("Phone number")} <span>*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone_number"
                              placeholder="+996999999999"
                              required
                              value={formData.phone_number}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-lg-6">
                            <label>{t("Region")}</label>
                            <select
                              name="region"
                              value={formData.region}
                              onChange={handleInputChange}
                            >
                              {region?.map((type) => (
                                <option value={type.id} key={type.id}>
                                  {type.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-lg-12">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_15" />
                            {/*-============spacing==========-*/}
                            <button type="submit">
                              {t("Leave a request")}
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="mr_top_20 pd_top_20">
                        {submissionStatus === "success" && (
                          <p className="not-style success">{t("Success")}</p>
                        )}
                        {submissionStatus === "error" && <p className="not-style error">{t("Error")}</p>}
                      </div>
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
                    <small>+ </small>
                  </h4>
                  <h6 className="title_no_a_26">
                    {data?.["feature_description_" + locale]}
                  </h6>
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
  );
}
