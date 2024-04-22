import Layout from "@/components/layout/Layout"
import { useState } from "react"
export default function Checkout() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout breadcrumbTitle="Checkout">
                <div className="checkout_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*===============spacing==============*/}
                                <div className="pd_top_90" />
                                {/*===============spacing==============*/}
                                <form name="checkout" method="post" className="checkout woocommerce-checkout" action="checkout" noValidate="novalidate">
                                    <div className="row gutter_30px">
                                        <div className="col-lg-6">
                                            <div className="woocommerce-billing-fields">
                                                <h3>Billing details</h3>
                                                <div className="woocommerce-billing-fields__field-wrapper">
                                                    <p className="form-row form-row-first validate-required" id="billing_first_name_field">
                                                        <label>First name <abbr className="required" title="required">*</abbr></label>
                                                        <input type="text" className="input-text" name="billing_first_name" id="billing_first_name" />
                                                    </p>
                                                    <p className="form-row form-row-last validate-required" id="billing_last_name_field">
                                                        <label>Last name <abbr className="required" title="required">*</abbr></label>
                                                        <input type="text" className="input-text" name="billing_last_name" id="billing_last_name" />
                                                    </p>
                                                    <p className="form-row form-row-wide" id="billing_company_field">
                                                        <label>Company name <span className="optional">(optional)</span></label>
                                                        <input type="text" className="input-text " name="billing_company" id="billing_company" />
                                                    </p>
                                                    <p className="form-row address-field validate-required form-row-wide" id="billing_address_1_field">
                                                        <label>Street address <abbr className="required" title="required">*</abbr></label>
                                                        <input type="text" className="input-text " name="billing_address_1" id="billing_address_1" placeholder="House number and street name" data-placeholder="House number and street name" />
                                                    </p>
                                                    <p className="form-row address-field form-row-wide" id="billing_address_2_field">
                                                        <label>Apartment, suite, unit, etc. <span className="optional">(optional)</span></label>
                                                        <input type="text" className="input-text " name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit, etc. (optional)" data-placeholder="Apartment, suite, unit, etc. (optional)" />
                                                    </p>
                                                    <p className="form-row address-field validate-required form-row-wide" id="billing_city_field">
                                                        <label>Town / City <abbr className="required" title="required">*</abbr></label>
                                                        <input type="text" className="input-text" name="billing_city" id="billing_city" />
                                                    </p>
                                                    <p className="form-row address-field validate-required validate-state form-row-wide" id="billing_state_field">
                                                        <label>State <abbr className="required" title="required">*</abbr></label>
                                                        <select name="billing_state" id="billing_state" className="state_select select2-hidden-accessible" data-placeholder="Select an option…" data-input-classes data-label="State" tabIndex={-1} aria-hidden="true">
                                                            <option value>Select an option…</option>
                                                            <option value="TN">Tamilnadu</option>
                                                            <option value="KL">Kerla</option>
                                                            <option value="KR">Karanataka</option>
                                                        </select>
                                                    </p>
                                                    <p className="form-row address-field validate-required validate-postcode form-row-wide" id="billing_postcode_field">
                                                        <label>ZIP Code <abbr className="required" title="required">*</abbr></label>
                                                        <input type="text" className="input-text" name="billing_postcode" id="billing_postcode" autoComplete="postal-code" />
                                                    </p>
                                                    <p className="form-row form-row-wide validate-required validate-phone" id="billing_phone_field">
                                                        <label>Phone <abbr className="required" title="required">*</abbr></label>
                                                        <input type="tel" className="input-text " name="billing_phone" id="billing_phone" autoComplete="tel" />
                                                    </p>
                                                    <p className="form-row form-row-wide validate-required validate-email" id="billing_email_field">
                                                        <label>Email address <abbr className="required" title="required">*</abbr></label>
                                                        <input type="email" className="input-text " name="billing_email" id="billing_email" autoComplete="email username" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="woocommerce-additional-fields">
                                                <h3>Additional information</h3>
                                                <div className="woocommerce-additional-fields__field-wrapper">
                                                    <p className="form-row notes" id="order_comments_field" data-priority>
                                                        <label htmlFor="order_comments" className="img-fluid">Order notes <span className="optional">(optional)</span></label>
                                                        <textarea name="order_comments" className="input-text" id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." />
                                                    </p>
                                                </div>
                                            </div>
                                            <div id="order_review" className="woocommerce-checkout-review-order">
                                                <h3 id="order_review_heading">Your order</h3>
                                                <div className="your_order_box">
                                                    <table className="shop_table woocommerce-checkout-review-order-table">
                                                        <thead>
                                                            <tr>
                                                                <th className="product-name">Product</th>
                                                                <th className="product-total">Subtotal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="cart_item">
                                                                <td className="product-name">
                                                                    Esssays Change You Think <strong className="product-quantity">× 1</strong>
                                                                </td>
                                                                <td className="product-total">
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi><span className="woocommerce-Price-currencySymbol">$</span>30.00</bdi>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr className="cart-subtotal">
                                                                <th>Subtotal</th>
                                                                <td>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi><span className="woocommerce-Price-currencySymbol">$</span>30.00</bdi>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr className="order-total">
                                                                <th>Total</th>
                                                                <td>
                                                                    <strong><span className="woocommerce-Price-amount amount">
                                                                        <bdi><span className="woocommerce-Price-currencySymbol">$</span>30.00</bdi></span>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div id="payment" className="woocommerce-checkout-payment">
                                    <ul className="accordion-box">
                                        <li className={isActive.key == 1 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <div className="icon-outer"><i className="fa fa-angle-down" /></div>
                                                <h4>Direct Bank Transfer</h4>
                                            </div>
                                            <div className="acc-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                <div className="payment-info">
                                                    <div className="row gutter_30px clearfix mr_top_20">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="name" placeholder="Name on the Card" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="number" placeholder="Card Number" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="date" placeholder="Expiry Date" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="code" placeholder="Security Code" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-12 col-sm-12 column">
                                                            <div className="field-input message-btn">
                                                                <button type="button" className="theme_btn">Make Payment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={isActive.key == 2 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-outer"><i className="fa fa-angle-down" /></div>
                                                <h4>Credir Card / Debit Card</h4>
                                            </div>
                                            <div className="acc-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                <div className="payment-info">
                                                    <div className="row mr_top_20 gutter_30px clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="name" placeholder="Name on the Card" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="number" placeholder="Card Number" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="date" placeholder="Expiry Date" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="code" placeholder="Security Code" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-12 col-sm-12 column">
                                                            <div className="field-input message-btn">
                                                                <button type="button" className="theme_btn">Make Payment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={isActive.key == 3 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <div className="icon-outer"><i className="fa fa-angle-down" /></div>
                                                <h4>Cheque Payment</h4>
                                            </div>
                                            <div className="acc-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <div className="payment-info">
                                                    <div className="row mr_top_20 gutter_30px clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="name" placeholder="Name on the Card" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="number" placeholder="Card Number" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="date" placeholder="Expiry Date" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="code" placeholder="Security Code" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-12 col-sm-12 column">
                                                            <div className="field-input message-btn">
                                                                <button type="button" className="theme_btn">Make Payment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={isActive.key == 4 ? "accordion  active-block" : "accordion"}>
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                <div className="icon-outer"><i className="fa fa-angle-down" /></div>
                                                <h4>Other Payment</h4>
                                            </div>
                                            <div className="acc-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <div className="payment-info">
                                                    <div className="row gutter_30px clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="name" placeholder="Name on the Card" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="number" placeholder="Card Number" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="date" placeholder="Expiry Date" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                                                            <div className="field-input">
                                                                <input type="text" name="code" placeholder="Security Code" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-12 col-sm-12 column">
                                                            <div className="field-input message-btn">
                                                                <button type="button" className="theme_btn">Make Payment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_90" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}