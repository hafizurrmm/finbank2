'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News Large View">
                <div>

                    {/*Blog Page Start*/}
                    <section className="blog-page-three">
                        <div className="container">
                            <div className="row">
                            <div className="col-xl-9">
                            <div className="blog-details-box">
                                <div className="blog-details-img-box">
                                    <div className="inner">
                                        <img src="/assets/images/blog/blog-details-img-1.jpg" alt="" />
                                    </div>
                                    <div className="share-btn">
                                        <a href="#">Share<span className="icon-share"></span></a>
                                    </div>
                                </div>

                                <div className="blog-details-text-box">
                                    <h2 className="blog-details-title">
                                        Board Approves Capital Raise of<br /> Rs. 2000 Crores
                                    </h2>
                                    <div className="blog-details-quote-box">
                                        <div className="icon">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <div className="text">
                                            <h3>Don’t just save money, make more money with a checking account from us.</h3>
                                            <h6>- Franklin</h6>
                                        </div>
                                    </div>
                                    <div className="blog-details-text-1">
                                        <p>In a free hour, when our power of choice is untrammelled and when nothing prevents claims of duty obligations of business it will frequently occur our power of choice is untrammelled when nothing prevents our being able to do what we like best, every pleasure be welcomed and every pain avoided in certain circumstances and owings to the claims of duty or the obligations off business it will frequently occurs that pleasures have to be repudiated and annoyances accepted.</p>
                                    </div>
                                    <div className="blog-details-text-2">
                                        <p>Our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted holds in these matters to this principle of selection.</p>
                                    </div>
                                    <div className="blog-details-text-3">
                                        <p>Nothing prevents claims duty obligations of business will frequently occur powerchoice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain but in certain chooses to enjoy a pleasure that has no annoying consequences.</p>
                                    </div>
                                    <div className="blog-details-text-4">
                                        <p>Prevents our being able to do what we like best every pleasure is to be welcomed every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations.</p>
                                    </div>
                                    <div className="blog-details-text-5">
                                        <h3>Trust Your Money With Us</h3>
                                        <p>Frequently occur our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided all in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures but have to be repudiated and annoyances accepted holds in these matters to this principle.</p>
                                    </div>
                                    <div className="blog-details-text-6">
                                        <div className="inner-title">
                                            <div className="dot-box"></div>
                                            <h3>The Bank That’s Always Open</h3>
                                        </div>
                                        <p>Every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations.</p>
                                        <ul>
                                            <li>Don’t just make a deposit, make an investment today</li>
                                            <li>Known for trust, honesty, and customer care</li>
                                            <li>We’re more than just someone’s ATM. We’re here for life’s big moments</li>
                                            <li>Simplify your finances</li>
                                            <li>A bank for people who want to live life better</li>
                                            <li>Because all other banks are the same</li>
                                        </ul>
                                    </div>

                                    <div className="tag-box">
                                        <ul className="tag-list">
                                            <li><span>Cards</span></li>
                                            <li><span>Careers</span></li>
                                            <li><span>Deposit</span></li>
                                            <li><span>Fees</span></li>
                                        </ul>
                                    </div>

                                    <div className="blog-details-page__prev-next-option">
                                        <div className="single-box left">
                                            <div className="icon-box">
                                                <a href="#">
                                                    <span className="icon-right-arrow"></span>
                                                    Prev Post
                                                </a>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <a href="#">How Non-US Citizens can Open<br /> a Bank Account</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="single-box right">
                                            <div className="icon-box">
                                                <a href="#">
                                                    Next Post
                                                    <span className="icon-right-arrow"></span>
                                                </a>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <a href="#">The National Avg Interest Rate for<br /> Savings Accounts</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="author-box-holder">
                                        <div className="inner-box">
                                            <div className="img-box">
                                                <img src="/assets/images/blog/author.jpg" alt="Awesome Image" />
                                            </div>
                                            <div className="text">
                                                <h6>Post By</h6>
                                                <h3>Paul Anderson</h3>
                                                <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself because occasionally.</p>

                                                <div className="footer-social-link-style1">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-youtube"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-instagram"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-facebook-f"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-box">
                                        <div className="inner-title">
                                            <h2>Comments</h2>
                                        </div>
                                        <div className="outer-box">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    {/* Start single comment */}
                                                    <div className="single-comment">
                                                        <div className="inner">
                                                            <div className="single-comment-box">
                                                                <div className="img-holder">
                                                                    <img src="/assets/images/blog/comment-1.jpg" alt="Awesome Image" />
                                                                </div>
                                                                <div className="text-holder">
                                                                    <div className="top">
                                                                        <h3>Steven Rich, <span>08 May 2022</span></h3>
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>
                                                                            Gain is there anyone who loves or pursues or desires to obtain pain of itself, because occur in which toil and pain can procure him some great.
                                                                        </p>
                                                                        <div className="reply">
                                                                            <a href="#"><span className="icon-reply"></span> Reply</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End single comment */}

                                                    {/* Start single comment */}
                                                    <div className="single-comment">
                                                        <div className="inner">
                                                            <div className="single-comment-box">
                                                                <div className="img-holder">
                                                                    <img src="/assets/images/blog/comment-1.jpg" alt="Awesome Image" />
                                                                </div>
                                                                <div className="text-holder">
                                                                    <div className="top">
                                                                        <h3>Steven Rich, <span>08 May 2022</span></h3>
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>
                                                                            Gain is there anyone who loves or pursues or desires to obtain pain of itself, because occur in which toil and pain can procure him some great.
                                                                        </p>
                                                                        <div className="reply">
                                                                            <a href="#"><span className="icon-reply"></span> Reply</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End single comment */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="add-comment-box">
                                        <div className="inner-title">
                                            <h2>Leave Your Comments</h2>
                                        </div>
                                        <form id="add-comment-form" action="#">
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="row">
                                                        <div className="col-xl-12">
                                                            <div className="input-box">
                                                                <div className="form-group">
                                                                    <input type="text" placeholder="Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="input-box">
                                                                <div className="form-group">
                                                                    <input type="text" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="input-box">
                                                                <div className="form-group">
                                                                    <textarea placeholder="Message" defaultValue={""} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <button type="submit" className="theme-btn">Post Comment</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-xl-3 col-lg-7">
                                <div className="thm-sidebar-box">
                                    {/* Start Single Sidebar Box: Search */}
                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="dot-box"></div>
                                            <h3>Search</h3>
                                        </div>
                                        <div className="sidebar-search-box">
                                            <form className="search-form" action="#">
                                                <input placeholder="Keyword" type="text" />
                                                <button type="submit">
                                                    <i className="icon-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* End Single Sidebar Box */}

                                    {/* Start Single Sidebar Box: Categories */}
                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="dot-box"></div>
                                            <h3>Categories</h3>
                                        </div>
                                        <ul className="sidebar-categories-box">
                                            <li><Link href="#">Announcements</Link></li>
                                            <li><Link href="#">Banking</Link></li>
                                            <li><Link href="#">Finance</Link></li>
                                            <li><Link href="#">Investment</Link></li>
                                            <li><Link href="#">Press Release</Link></li>
                                            <li><Link href="#">Technology</Link></li>
                                        </ul>
                                    </div>
                                    {/* End Single Sidebar Box */}

                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="dot-box"></div>
                                            <h3>Popular Post</h3>
                                        </div>
                                        <div className="sidebar-blog-post">
                                            <Swiper
                                                modules={[Navigation]}
                                                navigation={{
                                                    nextEl: '.swiper-button-next',
                                                    prevEl: '.swiper-button-prev',
                                                }}
                                                loop={true}
                                                autoplay={true}
                                                speed={500}
                                                spaceBetween={0}
                                                slidesPerView={1}
                                            >
                                                {/* Slide 1 */}
                                                <SwiperSlide>
                                                    <ul>
                                                        <li className="sidebar-blog-post-single">
                                                            <div className="img-box">
                                                                <img
                                                                    src="/assets/images/sidebar/sidebar-blog-post-1.jpg"
                                                                    alt="Awesome Image"
                                                                />
                                                                <div className="overlay-content">
                                                                    <Link href="/blog-single">
                                                                        <i className="fa fa-link" aria-hidden="true"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="post-date">May 29, 2022</div>
                                                                <h4>
                                                                    <Link href="/blog-single">
                                                                        How Non-US Citizens can Open a Bank Account
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                        </li>
                                                        <li className="sidebar-blog-post-single">
                                                            <div className="img-box">
                                                                <img
                                                                    src="/assets/images/sidebar/sidebar-blog-post-2.jpg"
                                                                    alt="Awesome Image"
                                                                />
                                                                <div className="overlay-content">
                                                                    <Link href="/blog-single">
                                                                        <i className="fa fa-link" aria-hidden="true"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="post-date">May 25, 2022</div>
                                                                <h4>
                                                                    <Link href="/blog-single">
                                                                        Board Approves Capital Raise of Rs. 2000 Crores
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </SwiperSlide>

                                                {/* Slide 2 */}
                                                <SwiperSlide>
                                                    <ul>
                                                        <li className="sidebar-blog-post-single">
                                                            <div className="img-box">
                                                                <img
                                                                    src="/assets/images/sidebar/sidebar-blog-post-1.jpg"
                                                                    alt="Awesome Image"
                                                                />
                                                                <div className="overlay-content">
                                                                    <Link href="/blog-single">
                                                                        <i className="fa fa-link" aria-hidden="true"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="post-date">May 29, 2022</div>
                                                                <h4>
                                                                    <Link href="/blog-single">
                                                                        How Non-US Citizens can Open a Bank Account
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                        </li>
                                                        <li className="sidebar-blog-post-single">
                                                            <div className="img-box">
                                                                <img
                                                                    src="/assets/images/sidebar/sidebar-blog-post-2.jpg"
                                                                    alt="Awesome Image"
                                                                />
                                                                <div className="overlay-content">
                                                                    <Link href="/blog-single">
                                                                        <i className="fa fa-link" aria-hidden="true"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="post-date">May 25, 2022</div>
                                                                <h4>
                                                                    <Link href="/blog-single">
                                                                        Board Approves Capital Raise of Rs. 2000 Crores
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>

                                    {/* Start Single Sidebar Box: Popular Tags */}
                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="dot-box"></div>
                                            <h3>Popular Tags</h3>
                                        </div>
                                        <div className="popular-tag-box">
                                            <ul className="popular-tag">
                                                <li><Link href="#">Cards</Link></li>
                                                <li><Link href="#">Careers</Link></li>
                                                <li><Link href="#">Deposit</Link></li>
                                                <li><Link href="#">Fees</Link></li>
                                                <li><Link href="#">Forms</Link></li>
                                                <li><Link href="#">Insurance</Link></li>
                                                <li><Link href="#">Investor</Link></li>
                                                <li><Link href="#">Loans</Link></li>
                                                <li><Link href="#">Payment</Link></li>
                                                <li><Link href="#">Security</Link></li>
                                                <li><Link href="#">Tenders</Link></li>
                                                <li><Link href="#">Women's Accounts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Single Sidebar Box */}

                                    {/* Start Sidebar Banner Box */}
                                    <div className="sidebar-banner-box">
                                        <div className="top-box float-bob-y"></div>
                                        <div className="bottom-box float-bob-x"></div>
                                        <div className="logo-box">
                                            <Link href="/">
                                                <img src="/assets/images/resources/banner-logo-1.png" alt="" />
                                            </Link>
                                        </div>
                                        <h3>Small Steps to Your<br /> Better Future.</h3>
                                        <ul>
                                            <li><span className="icon-checkbox-mark"></span> The well master-builder</li>
                                            <li><span className="icon-checkbox-mark"></span> On the other hand</li>
                                        </ul>
                                        <div className="btns-box">
                                            <Link className="btn-one" href="/contact">
                                                <span className="txt">Get Support</span>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* End Sidebar Banner Box */}
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/*Blog Page End*/}

                </div>

            </Layout>
        </>
    )
}