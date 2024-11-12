import Link from "next/link"

export default function Footer2() {
    return (
        <>
            {/* Start footer area */}
            <footer className="footer-area footer-area--style2">
                {/* Start Footer Top */}
                <div className="footer-top-style2">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-7">
                        <div className="footer-top-style2__left-content">
                        {/* Start Our Company Info */}
                        <div className="our-company-info">
                            <div className="footer-logo-style1">
                            <Link href="/">
                                <img
                                src="assets/images/footer/footer-logo-2.png"
                                alt="Awesome Logo"
                                title=""
                                />
                            </Link>
                            </div>
                            <div className="bottom-text2">
                            <p>
                                Simple and easy to distinguish. In a free hour when our power off best pleasure is to be
                                welcomed every pleasures business it frequently occur that pleasures have to be repudiated.
                            </p>
                            <div className="btn-box">
                                <Link href="#">
                                <span className="icon-right-arrow"></span> More About Us
                                </Link>
                            </div>
                            </div>
                        </div>
                        {/* End Our Company Info */}
                        {/* Start Footer Top Style2 Left Content Inner */}
                        <div className="footer-top-style2__left-content-inner">
                            <ul className="row">
                            <li className="col-xl-4 col-lg-4 col-md-4">
                                <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="footer-widget-links">
                                    <ul>
                                    <li>
                                        <Link href="#">Home Loan</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Car Loan</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Two Wheeler Loan</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Personal Loan</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Tractor Loan</Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </li>

                            <li className="col-xl-4 col-lg-4 col-md-4">
                                <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="footer-widget-links">
                                    <ul>
                                    <li>
                                        <Link href="#">Cards</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Deposits</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Payments</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Insurance</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Locker Facility</Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </li>

                            <li className="col-xl-4 col-lg-4 col-md-4">
                                <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="footer-widget-links">
                                    <ul>
                                    <li>
                                        <Link href="#">Career</Link>
                                    </li>
                                    <li>
                                        <Link href="#">News Room</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Interest Rates</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Gold Rate Today</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Charges & Fees</Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        {/* End Footer Top Style2 Left Content Inner */}
                        </div>
                    </div>

                    <div className="col-xl-5">
                        <div className="footer-top-style2__right-content">
                        <div className="footer-contact-info-style">
                            <ul>
                            <li>
                                <div className="icon">
                                <span className="icon-map"></span>
                                </div>
                                <div className="text">
                                <h3>Corporate Branch</h3>
                                <p>
                                    141, First Floor, 12 St Roots Terrace, Los Angeles
                                    <br />
                                    United States 90010.
                                </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                <span className="icon-phone-call"></span>
                                </div>
                                <div className="text">
                                <h3>Help Desk</h3>
                                <p>
                                    Call to: <Link href="tel:123456789">+8 55-678-9012</Link>
                                </p>
                                <p>
                                    Send a Mail:{' '}
                                    <Link href="mailto:info@templatepath.com">supportyou@finbank.com</Link>
                                </p>
                                </div>
                            </li>
                            </ul>
                        </div>

                        <div className="find-nearest-branch-box">
                            <div className="top-outer">
                            <div className="top">
                                <div className="icon">
                                <span className="icon-bank-1"></span>
                                </div>
                                <div className="inner-title">
                                <h3>
                                    Over 86 Branch,
                                    <br /> Find Your Nearest One
                                </h3>
                                </div>
                            </div>
                            </div>
                            <div className="form-box1">
                            <form className="zip-form" action="#">
                                <input id="zip" name="zip" type="number" placeholder="Enter Zip Code..." />
                                <button type="submit">
                                <i className="icon-right-arrow"></i>Find
                                </button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* End Footer Top */}

                <div className="footer-bottom-style2">
                <div className="container">
                    <div className="bottom-inner">
                    <div className="footer-menu">
                        <ul>
                        <li>
                            <Link href="#">&copy; 2022 Finbank</Link>
                        </li>
                        <li>
                            <Link href="#">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link href="#">Sitemap</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="scrool-top-btn-style2">
                        <Link href="#" data-target="html" className="scroll-to-target scroll-to-top--style2">
                        <i className="icon-diagonal-arrow"></i>Back to Top
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
            {/* End footer area */}
        </>


    )
}
