import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Shop() {

    return (
        <>
            <Layout breadcrumbTitle="Shop">
                {/*-shop*/}
                <div className="shop-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product_top_header">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <p className="woocommerce-result-count"> Showing 1–8 of 10 results </p>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12" />
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <form className="woocommerce-ordering" method="get">
                                                <select name="orderby" aria-label="Shop order" tabIndex={-1} aria-hidden="true">
                                                    <option value="menu_order" >Default sorting</option>
                                                    <option value="popularity">Sort by popularity</option>
                                                    <option value="rating">Sort by average rating</option>
                                                    <option value="date">Sort by latest</option>
                                                    <option value="price">Sort by price: low to high</option>
                                                    <option value="price-desc">Sort by price: high to low</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-section">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                            <div className="van_product_card">
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
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                            <div className="van_product_card">
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
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                            <div className="van_product_card">
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
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                            <div className="van_product_card">
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
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                            <div className="van_product_card">
                                                <Link href="/shop-details">
                                                    <span className="onsale">Sale!</span>
                                                    <img src="/assets/images/shop/product-8-min.png" className="img-fluid" alt="img" />
                                                    <h2 className="woocommerce-loop-product__title">Squirrel in The Schooll By Nimal</h2>
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>140.00 </bdi>
                                                            </span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>136.00 </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </Link>
                                                <Link href="/shop-details" className="button ajax_add_to_cart">Add to cart</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                            <div className="van_product_card">
                                                <Link href="/shop-details">
                                                    <span className="onsale">Sale!</span>
                                                    <img src="/assets/images/shop/product-9-min.png" className="img-fluid" alt="img" />
                                                    <h2 className="woocommerce-loop-product__title">Start Living The Adventures of Yes</h2>
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>140.00 </bdi>
                                                            </span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>136.00 </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </Link>
                                                <Link href="/shop-details" className="button ajax_add_to_cart">Add to cart</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                            <div className="van_product_card">
                                                <Link href="/shop-details">
                                                    <span className="onsale">Sale!</span>
                                                    <img src="/assets/images/shop/product-2-min.png" className="img-fluid" alt="img" />
                                                    <h2 className="woocommerce-loop-product__title">The Women Who Don’t Give Up</h2>
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>140.00 </bdi>
                                                            </span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>136.00 </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </Link>
                                                <Link href="/shop-details" className="button ajax_add_to_cart">Add to cart</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                            <div className="van_product_card">
                                                <Link href="/shop-details">
                                                    <span className="onsale">Sale!</span>
                                                    <img src="/assets/images/shop/product-7-min.png" className="img-fluid" alt="img" />
                                                    <h2 className="woocommerce-loop-product__title">Why Good With Out Good By John Bevere</h2>
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>120.00 </bdi>
                                                            </span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>115.00 </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </Link>
                                                <Link href="/shop-details" className="button ajax_add_to_cart">Add to cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <nav className="woocommerce-pagination text-center">
                                        <ul className="page-numbers">
                                            <li>
                                                <span aria-current="page" className="page-numbers current">1</span>
                                            </li>
                                            <li>
                                                <Link className="page-numbers" href="#">2</Link>
                                            </li>
                                            <li>
                                                <Link className="next page-numbers" href="#">→</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_80" />
                        {/*-============spacing==========-*/}
                    </div>
                </div>
                {/*-shop end*/}


            </Layout>
        </>
    )
}