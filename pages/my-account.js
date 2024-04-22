import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function MyAccount() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index) // remove the curly braces
    }

    return (
        <>
            <Layout breadcrumbTitle="My Account">
                <div className="login_forms_box">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-auto">
                                <div className="login_form_and_register">
                                    <div className="section_title text-center type_one">
                                        <h4 className="sm_title">Start For Free</h4>
                                        <div className="title_whole">
                                            <h2 className="title">Create New Account </h2>
                                        </div>
                                    </div>
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Login</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>Register</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className={activeIndex === 1 ? "tab-pane show fade active" : "tab-pane fade"}>
                                            <form className="login-register-form login" method="post">
                                                <p className="form-row">
                                                    <label htmlFor="username">Username or email address <span className="required">*</span></label>
                                                    <input type="text" name="username" id="username" autoComplete="username" />
                                                </p>
                                                <p className="form-row">
                                                    <label htmlFor="password">Password <span className="required">*</span></label>
                                                    <input type="password" name="password" id="password" autoComplete="current-password" />
                                                </p>
                                                <p className="form-row">
                                                    <label>
                                                        <input name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span>Remember me</span>
                                                    </label>
                                                    <button type="submit" name="login" value="Log in">Log in</button>
                                                </p>
                                                <p className="lost_password">
                                                    <Link href="#">Lost your password?</Link>
                                                </p>
                                            </form>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane show fade active" : "tab-pane fade"}>
                                            <form method="post" className="login-register-form register">
                                                <p className="form-row">
                                                    <label htmlFor="reg_email">Email address <span className="required">*</span></label>
                                                    <input type="email" name="email" id="reg_email" autoComplete="email" />
                                                </p>
                                                <p>A link to set a new password will be sent to your email address.</p>
                                                <div className="privacy-policy-text">
                                                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="#" className="woocommerce-privacy-policy-link" target="_blank">privacy policy</Link>.</p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_80" />
                    {/*-============spacing==========-*/}
                </div>
            </Layout>
        </>
    )
}