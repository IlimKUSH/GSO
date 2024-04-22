import QuantityInput from "@/components/elements/QuantityInput"
import ThumbSlider from "@/components/elements/ThumbSlider"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function ShopDetails() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout breadcrumbTitle="Shop Details">
                <section className="default_single_product">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <ThumbSlider />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="summary entry-summary">
                                    <h1 className="product_title entry-title">Esssays Change You Think</h1>
                                    <p className="price">
                                        <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                                <span className="woocommerce-Price-currencySymbol">$</span>30.00 </bdi>
                                        </span>
                                    </p>
                                    <div className="woocommerce-product-details__short-description">
                                        <p>Beguiled and demoralized by the charms of pleasure of the moment blinded by desire that they cannot foresee the pain and trouble that are bound to and equal blame belongs to those who fail in their duty.</p>
                                        <p>Nor again is there anyone who loves or pursues or desires to pain of because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                                        <p>Must explain to you how all this mistaken idea of denouncing pleasure praising will give you a completed great the great explorer.</p>
                                    </div>
                                    <p className="stock in-stock mr_bottom_30">200 in stock (can be backordered)</p>
                                    <form className="cart d-flex align-items-center mr_bottom_30" action="#" method="post">
                                        <QuantityInput />
                                        <button type="submit" name="add-to-cart" value={2650} className="mr_left_10 single_add_to_cart_button button mr_top_0 alt wp-element-button"> Add to cart </button>
                                    </form>
                                    <div className="product_meta">
                                        <span className="posted_in">Categories: <Link href="/shop-details" rel="tag">Coaching</Link>, <Link href="#" rel="tag">Employee Relation</Link>, <Link href="/shop-details" rel="tag">HR Consulting</Link> , <Link href="#" rel="tag">Recruiting</Link>, <Link href="#" rel="tag">Small Business HR</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_40" />
                            {/*-============spacing==========-*/}
                            <div className="col-lg-12">
                                <div className="woocommerce-tabs wc-tabs-wrapper">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}> Reviews (0) </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}> Description </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>Additional information </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div id="reviews" className="woocommerce-Reviews">
                                                <div id="comments">
                                                    <h2 className="woocommerce-Reviews-title"> Reviews </h2>
                                                    <p className="woocommerce-noreviews">There are no reviews yet.</p>
                                                </div>
                                                <div id="review_form_wrapper">
                                                    <div id="review_form">
                                                        <div id="respond" className="comment-respond">
                                                            <form action="#" method="post" className="comment-form">
                                                                <p className="comment-notes mr_bottom_20">
                                                                    <span id="email-notes">Your email address will not be published.</span>
                                                                    <span className="required-field-message">Required fields are marked <span className="required">*</span>
                                                                    </span>
                                                                </p>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="comment-form-rating mr_bottom_20">
                                                                            <label htmlFor="rating">Your rating  <span className="required">*</span>
                                                                            </label>
                                                                            <select name="rating" id="rating" required style={{ display: 'none' }}>
                                                                                <option value>Rate…</option>
                                                                                <option value={5}>Perfect</option>
                                                                                <option value={4}>Good</option>
                                                                                <option value={3}>Average</option>
                                                                                <option value={2}>Not that bad</option>
                                                                                <option value={1}>Very poor</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-12">
                                                                        <p className="comment-form-author mr_bottom_20">
                                                                            <label htmlFor="author">Name  <span className="required">*</span>
                                                                            </label>
                                                                            <input id="author" name="author" type="text" size={30} required />
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-12">
                                                                        <p className="comment-formemail mr_bottom_20">
                                                                            <label htmlFor="email">Email  <span className="required">*</span></label>
                                                                            <input id="email" name="email" type="email" size={30} required />
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <p className="comment-form-cookies-consent mr_bottom_20">
                                                                            <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
                                                                            <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <p className="form-submit">
                                                                            <input name="submit" type="submit" id="submit" className="submit" value="Submit" />
                                                                            <input type="hidden" name="comment_post_ID" value={2650} id="comment_post_ID" />
                                                                            <input type="hidden" name="comment_parent" id="comment_parent" value={0} />
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        {/* #respond */}
                                                    </div>
                                                </div>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div className="content_box">
                                                <h2>Description</h2>
                                                <p>Nor again is there anyone who loves or pursues or desires to pain of because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                                                <p>Must explain to you how all this mistaken idea of denouncing pleasure praising will give you a completed great the great explorer.</p>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div className="content_box">
                                                <h2>Additional information</h2>
                                                <table className="woocommerce-product-attributes shop_attributes">
                                                    <tbody>
                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_books">
                                                            <th className="woocommerce-product-attributes-item__label">Books</th>
                                                            <td className="woocommerce-product-attributes-item__value">
                                                                <p>Comics, Dc</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                <section className="related products nav_false">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_40" />
                    {/*-============spacing==========-*/}
                    <div className="auto-container">
                        <div className="row gutter_30px">
                            <div className="col-lg-12">
                                <h2 className="text-center">Related products</h2>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                                <Swiper {...swiperOptions} className="theme_carousel">
                                    <SwiperSlide className="van_product_card">
                                        <Link href="/shop-details" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                            <span className="onsale">Sale!</span>
                                            <img src="/assets/images/shop/product-1-min.png" className="img-fluid" alt="product" />
                                            <h2 className="woocommerce-loop-product__title">All the Letters I Should Have Sent </h2>
                                            <span className="price">
                                                <del aria-hidden="true">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>400.00 </bdi>
                                                    </span>
                                                </del>
                                                <ins>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>289.00 </bdi>
                                                    </span>
                                                </ins>
                                            </span>
                                        </Link>
                                        <Link href="/shop-details" className="button ajax_add_to_cart">Add to cart</Link>
                                    </SwiperSlide>
                                    <SwiperSlide className="van_product_card">
                                        <Link href="/shop-details">
                                            <span className="onsale">Sale!</span>
                                            <img src="/assets/images/shop/product-10-min.png" className="img-fluid" alt="img" />
                                            <h2 className="woocommerce-loop-product__title">Esssays Change You Think</h2>
                                            <span className="price">
                                                <del aria-hidden="true">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>256.00 </bdi>
                                                    </span>
                                                </del>
                                                <ins>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>88.00 </bdi>
                                                    </span>
                                                </ins>
                                            </span>
                                        </Link>
                                        <Link href="/shop-details" className="button ajax_add_to_cart">Add to cart</Link>
                                    </SwiperSlide>
                                    <SwiperSlide className="van_product_card">
                                        <Link href="/shop-details">
                                            <span className="onsale">Sale!</span>
                                            <img src="/assets/images/shop/product-1-min.png" className="img-fluid" alt="img" />
                                            <h2 className="woocommerce-loop-product__title">How to Stop Worrying &amp; Living</h2>
                                            <span className="price">
                                                <del aria-hidden="true">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>156.00 </bdi>
                                                    </span>
                                                </del>
                                                <ins>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>125.00 </bdi>
                                                    </span>
                                                </ins>
                                            </span>
                                        </Link>
                                        <Link href="/shop-details" className="button ajax_add_to_cart">Add to cart</Link>
                                    </SwiperSlide>
                                    <SwiperSlide className="van_product_card">
                                        <Link href="/shop-details">
                                            <span className="onsale">Sale!</span>
                                            <img src="/assets/images/shop/product-5-min.png" className="img-fluid" alt="img" />
                                            <h2 className="woocommerce-loop-product__title">Milk and Honey By Rupi Kaur</h2>
                                            <span className="price">
                                                <del aria-hidden="true">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>100.00 </bdi>
                                                    </span>
                                                </del>
                                                <ins>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>99.00 </bdi>
                                                    </span>
                                                </ins>
                                            </span>
                                        </Link>
                                        <Link href="/shop-details" className="button ajax_add_to_cart">Add to cart</Link>
                                    </SwiperSlide>
                                    <SwiperSlide className="van_product_card">
                                        <Link href="/shop-details">
                                            <span className="onsale">Sale!</span>
                                            <img src="/assets/images/shop/product-1-min.png" className="img-fluid" alt="img" />
                                            <h2 className="woocommerce-loop-product__title">How to Stop Worrying &amp; Living</h2>
                                            <span className="price">
                                                <del aria-hidden="true">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>156.00 </bdi>
                                                    </span>
                                                </del>
                                                <ins>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>125.00 </bdi>
                                                    </span>
                                                </ins>
                                            </span>
                                        </Link>
                                        <Link href="/shop-details" className="button ajax_add_to_cart">Add to cart</Link>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>


            </Layout>
        </>
    )
}