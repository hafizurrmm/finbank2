'use client'
import Link from "next/link"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Swiper options
const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,
    // Removed pagination settings
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
    },
}

export default function WealthSecure() {
    return (
        <section className="wealth-secure-area">
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Grow Your Wealth Secure</h2>
                    <div className="sub-title">
                        <p>Don’t just make a deposit, make an investment today.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper {...swiperOptions} className="wealth-secure-carousel">
                            <SwiperSlide>
                                <div className="single-wealth-secure-box style2">
                                    <div className="img-box">
                                        <div className="img-box-inner">
                                            <img src="/assets/images/resources/wealth-secure-2.jpg" alt="Multi Currency a/c" />
                                        </div>
                                        <div className="inner-title">
                                            <h3>
                                                <Link href="#">Multi Currency a/c</Link>
                                            </h3>
                                            <div className="right-arrow-btn">
                                                <Link href="#">
                                                    <span className="icon-right-arrow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-box">
                                        <p>Cases are perfectly simple & easy to distinguish in a free hour when power of choice is prevents.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-wealth-secure-box style3">
                                    <div className="img-box">
                                        <div className="img-box-inner">
                                            <img src="/assets/images/resources/wealth-secure-3.jpg" alt="Mutual Funds" />
                                        </div>
                                        <div className="inner-title">
                                            <div className="arrow-top"></div>
                                            <div className="arrow-bottom"></div>
                                            <h3>
                                                <Link href="#">Mutual Funds</Link>
                                            </h3>
                                            <div className="right-arrow-btn">
                                                <Link href="#">
                                                    <span className="icon-right-arrow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-box">
                                        <p>The claims off duty or the obligations business it will frequently occur that pleasures be repudiated.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-wealth-secure-box style4">
                                    <div className="img-box">
                                        <div className="img-box-inner">
                                            <img src="/assets/images/resources/wealth-secure-4.jpg" alt="Pension Scheme" />
                                        </div>
                                        <div className="inner-title">
                                            <div className="arrow-top"></div>
                                            <div className="arrow-bottom"></div>
                                            <h3>
                                                <Link href="#">Pension Scheme</Link>
                                            </h3>
                                            <div className="right-arrow-btn">
                                                <Link href="#">
                                                    <span className="icon-right-arrow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-box">
                                        <p>Beguiled and demoralized by charms pleasure of the moment so blinded by they cannot and trouble.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-wealth-secure-box style2">
                                    <div className="img-box">
                                        <div className="img-box-inner">
                                            <img src="/assets/images/resources/wealth-secure-2.jpg" alt="Multi Currency a/c" />
                                        </div>
                                        <div className="inner-title">
                                            <div className="arrow-top"></div>
                                            <div className="arrow-bottom"></div>
                                            <h3>
                                                <Link href="#">Multi Currency a/c</Link>
                                            </h3>
                                            <div className="right-arrow-btn">
                                                <Link href="#">
                                                    <span className="icon-right-arrow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-box">
                                        <p>Cases are perfectly simple & easy to distinguish in a free hour when power of choice is prevents.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
