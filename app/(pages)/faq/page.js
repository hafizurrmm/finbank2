'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
export default function Home() {
        // Set the first FAQ (index 0) as the default active FAQ
        const [activeIndex, setActiveIndex] = useState(0);
      
        const toggleFAQ = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
      
        const faqs = [
          {
            question: "What is the minimum balance?",
            answer:
              "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
          },
          {
            question: "When will I receive my account statement?",
            answer:
              "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
          },
          {
            question: "Can I use any branch across India?",
            answer:
              "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
          },
          {
            question: "How safe/secure is our net banking a/c?",
            answer:
              "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
          },
          {
            question: "Can I use any branch across India?",
            answer:
              "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
          },
          {
            question: "How safe/secure is our net banking a/c?",
            answer:
              "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
          },
          {
            question: "What is the minimum balance?",
            answer:
              "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
          },
          
          {
            question: "What is the rate of interest?",
            answer:
              "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
          },
          {
            question: "When will I receive my account statement?",
            answer:
              "Rationally encounter consequences that are extremely painful again there anyone who loves or pursues desire.",
          },
        ];
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ">
                <div>

                    {/* FAQ Page One Start */}
                    <section className="faq-page-one">
                        <div className="container">
                        <div className="sec-title text-center">
                            <h2>Frequently Asked Questions</h2>
                            <div className="sub-title">
                            <p>Find answers to all your queries about our service.</p>
                            </div>
                        </div>

                        <div className="faq-search-box">
                            <div className="faq-search-box__inner">
                            <form className="search-form" action="#">
                                <input placeholder="Related Keyword..." type="text" />
                                <button type="submit">
                                <i className="icon-search"></i>
                                </button>
                            </form>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                            <div className="faq-style1__content">
                                <ul className="accordion-box">
                                {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                                    <li
                                    key={index}
                                    className={`accordion block ${activeIndex === index ? "active-block" : ""}`}
                                    >
                                    <div
                                        className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <div className="icon-outer">
                                        <i className="icon-right-arrow"></i>
                                        </div>
                                        <h3>{faq.question}</h3>
                                    </div>
                                    <div className={`acc-content ${activeIndex === index ? "current" : ""}`}>
                                        <p>{faq.answer}</p>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </div>

                            <div className="col-xl-6">
                            <div className="faq-style1__content">
                                <ul className="accordion-box">
                                {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                                    <li
                                    key={index + Math.ceil(faqs.length / 2)}
                                    className={`accordion block ${activeIndex === index + Math.ceil(faqs.length / 2) ? "active-block" : ""}`}
                                    >
                                    <div
                                        className={`acc-btn ${activeIndex === index + Math.ceil(faqs.length / 2) ? "active" : ""}`}
                                        onClick={() => toggleFAQ(index + Math.ceil(faqs.length / 2))}
                                    >
                                        <div className="icon-outer">
                                        <i className="icon-right-arrow"></i>
                                        </div>
                                        <h3>{faq.question}</h3>
                                    </div>
                                    <div className={`acc-content ${activeIndex === index + Math.ceil(faqs.length / 2) ? "current" : ""}`}>
                                        <p>{faq.answer}</p>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* FAQ Page One End */}

                </div>

            </Layout>
        </>
    )
}