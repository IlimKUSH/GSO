import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Cart() {

    return (
        <>
            <Layout breadcrumbTitle="Cart">
                <div className="cart_section">
                    <div className="container">
                        <div className="row">
                            {/*===============spacing==============*/}
                            <div className="pd_top_90" />
                            {/*===============spacing==============*/}
                            <form className="woocommerce-cart-form" action="cart" method="post">
                                <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing={0}>
                                    <thead>
                                        <tr>
                                            <th className="product-remove">
                                                <span className="screen-reader-text">Remove item</span>
                                            </th>
                                            <th className="product-thumbnail">
                                                <span className="screen-reader-text">Thumbnail image</span>
                                            </th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="woocommerce-cart-form__cart-item cart_item">
                                            <td className="product-remove">
                                                <Link href="#" className="remove" aria-label="Remove this item" data-product_id={2650} data-product_sku>×</Link>
                                            </td>
                                            <td className="product-thumbnail">
                                                <Link href="/shop-details">
                                                    <img width={300} height={300} src="/assets/images/shop/product-2-min.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="img" />
                                                </Link>
                                            </td>
                                            <td className="product-name" data-title="Product">
                                                <Link href="/shop-details">Esssays Change You Think</Link>
                                            </td>
                                            <td className="product-price" data-title="Price">
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>30.00 </bdi>
                                                </span>
                                            </td>
                                            <td className="product-quantity" data-title="Quantity">
                                                <QuantityInput />
                                            </td>
                                            <td className="product-subtotal" data-title="Subtotal">
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>30.00 </bdi>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5} className="actions">
                                                <div className="coupon d-flex align-items-center">
                                                    <label htmlFor="coupon_code" className="pd_right_10 mr_bottom_0">Coupon:</label>
                                                    <input type="text" name="coupon_code" className="input-text mr_bottom_0 mr_right_10" id="coupon_code" placeholder="Coupon code" />
                                                    <button type="submit" className="button wp-element-button mr_top_0" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="submit" className="button wp-element-button" name="update_cart" value="Update cart" disabled aria-disabled="true">Update cart</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                            <div className="cart-collaterals">
                                <div className="cart_totals ">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-12">
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <h2>Cart totals</h2>
                                            <table cellSpacing={0} className="shop_table shop_table_responsive">
                                                <tbody>
                                                    <tr className="cart-subtotal">
                                                        <th>Subtotal</th>
                                                        <td data-title="Subtotal">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>30.00 </bdi>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr className="order-total">
                                                        <th>Total</th>
                                                        <td data-title="Total">
                                                            <strong>
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <bdi>
                                                                        <span className="woocommerce-Price-currencySymbol">$</span>30.00 </bdi>
                                                                </span>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="wc-proceed-to-checkout">
                                                <Link href="/checkout" className="button theme_btn big_2"> Proceed to checkout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_90" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>


            </Layout>
        </>
    )
}