import Link from "next/link"

export default function Footer1() {
    return (
        <>
        {/* Start footer area */}
        <footer className="footer-area">
            <div className="right-shape">
            <img src="/assets/images/shapes/footer-right-shape.png" alt="Footer Shape" />
            </div>

            {/* Start Footer Top */}
            <div className="footer-top">
            <div className="lef-shape">
                <span className="icon-origami"></span>
            </div>
            <div className="container">
                <div className="row">
                {/* Start single footer widget */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="title">
                        <h3>Loans</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="#">Home Loan</Link></li>
                        <li><Link href="#">Car Loan</Link></li>
                        <li><Link href="#">Two Wheeler Loan</Link></li>
                        <li><Link href="#">Commercial Vehicle Loan</Link></li>
                        <li><Link href="#">Personal Loan</Link></li>
                        <li><Link href="#">Tractor Loan</Link></li>
                        <li><Link href="#">Construction Loan</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}
                
                {/* Start single footer widget */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="title">
                        <h3>Rates & Charges</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="#">Interest Rates</Link></li>
                        <li><Link href="#">Gold Rate Today</Link></li>
                        <li><Link href="#">Service Charges & Fees</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="single-footer-widget single-footer-widget--link-box-style2">
                    <div className="title">
                        <h3>Online</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="#">Mobile Banking</Link></li>
                        <li><Link href="#">Internet Banking</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}
                
                {/* Start single footer widget */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="title">
                        <h3>About Us</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="#">Our Story</Link></li>
                        <li><Link href="#">Board of Directors</Link></li>
                        <li><Link href="#">Management Committee</Link></li>
                        <li><Link href="#">Media</Link></li>
                        <li><Link href="#">Investor Relations</Link></li>
                        <li><Link href="#">Awards & Recognition</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}
                
                {/* Start single footer widget */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="title">
                        <h3>Services</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="#">Savings Account</Link></li>
                        <li><Link href="#">Current Account</Link></li>
                        <li><Link href="#">Deposits</Link></li>
                        <li><Link href="#">Cards</Link></li>
                        <li><Link href="#">Payments</Link></li>
                        <li><Link href="#">Insurance</Link></li>
                        <li><Link href="#">Locker Facility</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}
                </div>
            </div>
            </div>
            {/* End Footer Top */}
            
            {/* Start Footer */}
            <div className="footer">
            <div className="container">
                <div className="row">
                {/* Start single footer widget */}
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="single-footer-widget marbtm50">
                    <div className="our-company-info">
                        <div className="footer-logo-style1">
                        <Link href="/">
                            <img src="/assets/images/footer/footer-logo-1.png" alt="Awesome Logo" title="" />
                        </Link>
                        </div>
                        <div className="copyright-text">
                        <p>
                            Copyright &copy; 2022 <Link href="/">Finbank.</Link> Licensed by the<br />
                            Central Bank of United States.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}
                
                {/* Start single footer widget */}
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="single-footer-widget marbtm50">
                    <div className="footer-widget-contact-info">
                        <ul>
                        <li>
                            <h3>
                            <Link href="tel:2512353256">(800) 123 456 78</Link>
                            </h3>
                            <p>Customer Care</p>
                        </li>
                        <li>
                            <h3>Mon - Fri: 9.00am to 5.00pm</h3>
                            <p>Banking Hours</p>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}
                
                {/* Start single footer widget */}
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="single-footer-widget">
                    <div className="single-footer-widget-right-colum">
                        <ul>
                        <li>
                            <Link href="#">
                            Download Forms
                            <span className="icon-download"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            Register Your Complaint
                            <span className="icon-feedback"></span>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}
                </div>
            </div>
            </div>
            {/* End Footer */}
            
            <div className="footer-bottom">
            <div className="container">
                <div className="bottom-inner">
                <div className="footer-menu">
                    <ul>
                    <li><Link href="#">Disclaimer</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Terms & Conditions</Link></li>
                    <li><Link href="#">Online Security Tips</Link></li>
                    </ul>
                </div>
                <div className="footer-social-link">
                    <ul className="clearfix">
                    <li>
                        <Link href="#">
                        <i className="fab fa-youtube"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        <i className="fab fa-instagram"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        <i className="fab fa-twitter"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </footer>
        {/* End footer area */}
        </>
    )
}
