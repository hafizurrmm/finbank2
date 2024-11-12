'use client'
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function DealsArea() {
    const slides = [
        {
            title: "0% Installment Offers",
            subtitle: "Travel & Hotel Offers",
            description: "Claims off duty or the obligations business it will frequently occur that pleasures be repudiated.",
            imageUrl: "/assets/images/resources/deals-1.jpg",
            items: [
                { text: "Spend Minimum 75 US Dollar" },
                { text: "Spend Minimum 50 US Dollar" },
            ]
        },
        {
            title: "Get 10% Cashback",
            subtitle: "Buy a Mobile Phone",
            description: "Claims off duty or the obligations business it will frequently occur that pleasures be repudiated.",
            imageUrl: "/assets/images/resources/deals-2.jpg",
            items: [
                { text: "Spend Minimum 40 US Dollar" },
                { text: "Not Valid for Commercial Credit Card" },
            ]
        }
        // Add more slides if needed
    ];

    return (
        <>
            <section className="deals-area">
                <div className="auto-container">
                    <div className="deals-content-box">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{ delay: 10000, disableOnInteraction: false }}
                            loop={slides.length >= 3} // Enable loop only if there are 3 or more slides
                            speed={500}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                992: { slidesPerView: 1 },
                                1550: { slidesPerView: 1.4 },
                            }}
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="single-deals-box">
                                        <div className="text-box">
                                            <div className="inner-title">
                                                <h4>{slide.title}</h4>
                                                <h2>{slide.subtitle}</h2>
                                            </div>
                                            <p>{slide.description}</p>
                                            <ul>
                                                {slide.items.map((item, idx) => (
                                                    <li key={idx}>
                                                        <div className="inner">
                                                            <div className="icon">
                                                                <span className="icon-checkbox-mark"></span>
                                                            </div>
                                                            <div className="text">
                                                                <p>{item.text}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="btns-box">
                                                <Link className="btn-one" href="#">
                                                    <span className="txt">Grab Your Deals</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="img-box">
                                            <div
                                                className="img-bg"
                                                style={{ backgroundImage: `url(${slide.imageUrl})` }}
                                            ></div>
                                            <div className="shape-left-1"></div>
                                            <div className="shape-right-1"></div>
                                            <div className="shape-right-2"></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}
