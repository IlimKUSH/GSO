

export default function Form3() {
    return (
        <>
            <section className="form-section mr_bottom_minus_250 position-relative z_1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact_form_box_all style_one bg_14 bg_op_4 mr_right_40 z_1" style={{ backgroundImage: 'url(assets/images/form-shape-1.png)' }}>
                                <div className="section_title color_white type_one">
                                    <h4 className="sm_title"> Check Your Favorite Insurance</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Get Started Favorite
                                            Insurance</h2>
                                    </div>
                                </div>
                                <div className="contact_form_shortcode">
                                    <form method="post" action="#">
                                        <div className="forms-field-name mr_bottom_20">
                                            <input type="text" name="name" placeholder="First Name" required />
                                        </div>
                                        <div className="forms-field-name mr_bottom_20">
                                            <input type="text" name="sname" placeholder="Second Name" required />
                                        </div>
                                        <div className="forms-field-email mr_bottom_20">
                                            <input type="text" name="email" placeholder="Email" spellCheck="false" required />
                                        </div>
                                        <div className="forms-field-Dropdown mr_bottom_40">
                                            <select name="select">
                                                <option value className="placeholder" disabled >Insurance Type</option>
                                                <option value="Life Insurance">Life Insurance</option>
                                                <option value="Health Insurance">Health Insurance
                                                </option>
                                                <option value="House Insurance">House Insurance</option>
                                                <option value="Travel Insurance">Travel Insurance
                                                </option>
                                            </select>
                                        </div>
                                        <div className="forms-field-number-slider mr_bottom_40">
                                            <input type="range" name="range" min={0} max={7000} step={1} style={{ width: "100%" }} />
                                            <div className="slider-hint mr_top_5" data-hint="Selected Value: {value}">
                                                Selected Value: <b>4500</b>
                                            </div>
                                        </div>
                                        <button type="submit">Get a Guote</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mr_left_minus_100">
                            <div className="image_box_only type_nine">
                                <img src="/assets/images/form-image-1.jpg" className="img-fluid" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
