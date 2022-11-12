import React from 'react';
import Link from 'next/link';

export default function OurOfferings() {
    return (
        <>
            <section
                className="services-one"
                style={{ backgroundImage: "url(assets/images/shapes/service-bg-1-1.jpeg)" }}
            >
                <div className="service-one__shape-1" />
                <div className="service-one__shape-2" />
                <div className="container">
                    <div className="services-one__top">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="services-one__top-left">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <span className="section-title__tagline">
                                                What We’re Offering
                                            </span>
                                            <div className="section-title-shape">
                                                <img
                                                    src="assets/images/shapes/section-title-shape.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <h2 className="section-title__title">
                                            Services we’re Providing To Our Customers
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="services-one__top-right">
                                    <p className="services-one__top-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. quis
                                        nostrud exercitation ullamco laboris.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-one__bottom">
                        <ul className="list-unstyled services-one__list">
                            <li className="services-one__single">
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span className="icon-cloud-storage" />
                                    </div>
                                    <h3 className="services-one__title">
                                        <Link href="/integration-services">
                                       <a>Integration Services</a>
                                        </Link>
                                    </h3>
                                    <p className="services-one__text">
                                        Lorem ipsum dolor <br /> sit amet do.
                                    </p>
                                </div>
                            </li>
                            <li className="services-one__single">
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                    <span className="icon-coding" />
                                        {/* <span className="icon-design-thinking" /> */}
                                    </div>
                                    <h3 className="services-one__title">
                                        <Link href="/web-development">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>
                                    <p className="services-one__text">
                                        Lorem ipsum dolor <br /> sit amet do.
                                    </p>
                                </div>
                            </li>
                            <li className="services-one__single">
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span className="icon-technology" />
                                    </div>
                                    <h3 className="services-one__title">
                                        <Link href="/cloud-services">
                                           <a>Cloud Services</a>
                                        </Link>
                                    </h3>
                                    <p className="services-one__text">
                                        Lorem ipsum dolor <br /> sit amet do.
                                    </p>
                                </div>
                            </li>
                            <li className="services-one__single">
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span className="icon-design-thinking" />
                                    </div>
                                    <h3 className="services-one__title">
                                        <Link href="/trainings">
                                          <a>Trainings</a>
                                        </Link>
                                    </h3>
                                    <p className="services-one__text">
                                        Lorem ipsum dolor <br /> sit amet do.
                                    </p>
                                </div>
                            </li>
                            <li className="services-one__single">
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span className="icon-optimization" />
                                    </div>
                                    <h3 className="services-one__title">
                                        <Link href="/IT-security-consulting">
                                            <a>
                                          IT Security Consulting
                                          </a>
                                        </Link>
                                    </h3>
                                    <p className="services-one__text">
                                        Lorem ipsum dolor <br /> sit amet do.
                                    </p>
                                </div>
                            </li>
                            <li className="services-one__single">
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                    <span className="icon-content" />
                                        {/* <span className="icon-optimization" /> */}
                                    </div>
                                    <h3 className="services-one__title">
                                        <Link href="/ui-ux-designing">
                                           <a>UI/UX Designing</a>
                                        </Link>
                                    </h3>
                                    <p className="services-one__text">
                                        Lorem ipsum dolor <br /> sit amet do.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}