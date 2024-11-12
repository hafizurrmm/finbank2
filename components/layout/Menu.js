import Link from "next/link";

export default function Menu() {
    return (
        <>
            <ul className="main-menu__list">
                <li className="dropdown megamenu">
                    <Link href="/">Home</Link>
                    <ul>
                        <li>
                            <div className="megamenu-content-box">
                                <div className="container">
                                    <div className="megamenu-content-box__inner">
                                        <div className="row">
                                            {/* Start Home Showcase Item */}
                                            <div className="col-lg-4">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="/assets/images/home-showcase/home-showcase-1-1.jpg" alt="Home Showcase 1" />
                                                        <div className="home-showcase__buttons">
                                                            <Link href="/" className="btn-one home-showcase__buttons__item top">
                                                                <span className="txt">Multi Page</span>
                                                            </Link>
                                                            <Link href="/index-one-page" className="btn-one home-showcase__buttons__item">
                                                                <span className="txt">One Page</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page One
                                                    </h3>
                                                </div>
                                            </div>
                                            {/* End Home Showcase Item */}

                                            {/* Start Home Showcase Item */}
                                            <div className="col-lg-4">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="/assets/images/home-showcase/home-showcase-1-2.jpg" alt="Home Showcase 2" />
                                                        <div className="home-showcase__buttons">
                                                            <Link href="/index-2" className="btn-one home-showcase__buttons__item top">
                                                                <span className="txt">Multi Page</span>
                                                            </Link>
                                                            <Link href="/index-2-one-page" className="btn-one home-showcase__buttons__item">
                                                                <span className="txt">One Page</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page Two
                                                    </h3>
                                                </div>
                                            </div>
                                            {/* End Home Showcase Item */}

                                            {/* Start Home Showcase Item */}
                                            <div className="col-lg-4">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="/assets/images/home-showcase/home-showcase-1-3.jpg" alt="Home Showcase 3" />
                                                        <div className="home-showcase__buttons">
                                                            <Link href="/index-3" className="btn-one home-showcase__buttons__item top">
                                                                <span className="txt">Multi Page</span>
                                                            </Link>
                                                            <Link href="/index-3-one-page" className="btn-one home-showcase__buttons__item">
                                                                <span className="txt">One Page</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page Three
                                                    </h3>
                                                </div>
                                            </div>
                                            {/* End Home Showcase Item */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                        <li className="dropdown">
                            <Link href="#">Accounts</Link>
                            <ul>
                                <li><Link href="/accounts">All Accounts</Link></li>
                                <li><Link href="/account-savings">Savings Account</Link></li>
                                <li><Link href="/account-current">Current Account</Link></li>
                                <li><Link href="/account-fixed-dep">Fixed Deposit Account</Link></li>
                                <li><Link href="/account-salary">Salary Account</Link></li>
                                <li><Link href="/account-recuring-dep">Recuring Deposit Account</Link></li>
                                <li><Link href="/account-nri">NRI Account</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">Cards</Link>
                            <ul>
                                <li><Link href="/cards">Our All Cards</Link></li>
                                <li><Link href="/cards-business">Business</Link></li>
                                <li><Link href="/cards-cashback">Cashback</Link></li>
                                <li><Link href="/cards-law-interest">Low Interest</Link></li>
                                <li><Link href="/cards-rewards">Rewards</Link></li>
                                <li><Link href="/cards-secured">Secured</Link></li>
                                <li><Link href="/cards-travel-hotel">Travel & Hotel</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">Loans</Link>
                            <ul>
                                <li><Link href="/loan-home">Home Loan</Link></li>
                                <li><Link href="/loan-personal">Personal Loan</Link></li>
                                <li><Link href="/loan-vehicle">Vehicle Loan</Link></li>
                                <li><Link href="/loan-education">Education Loan</Link></li>
                                <li><Link href="/loan-gold">Gold Loan</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">About</Link>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/team">Board of Directors</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/careers-details">Career Detail</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/404">404 Error</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">News</Link>
                    <ul>
                        <li><Link href="/blog">Grid View</Link></li>
                        <li><Link href="/blog-2">List View</Link></li>
                        <li><Link href="/blog-3">Large Image</Link></li>
                        <li><Link href="/blog-single">Single Post</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">Apply Now</Link>
                    <ul>
                        <li><Link href="/loan-home">Home Loan</Link></li>
                        <li><Link href="/loan-personal">Personal Loan</Link></li>
                        <li><Link href="/loan-vehicle">Vehicle Loan</Link></li>
                        <li><Link href="/loan-education">Education Loan</Link></li>
                        <li><Link href="/loan-gold">Gold Loan</Link></li>
                    </ul>
                </li>

                <li>
                    <Link href="/contact">Get In Touch</Link>
                </li>
            </ul>
        </>
    );
}
