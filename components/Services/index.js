import React from 'react'
import Link from 'next/link'

export default function Services() {

    return (
        <>
            <section className="feature-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                            <div className="feature-one__single">
                                <div className="feature-one__img">
                                    <img src="assets/images/resources/resized-img-serv-integr-370x346.webp"
                                         alt="" />
                                    <div className="feature-one__title-box">
                                        <h3 className="feature-one__title">
                                        <Link  href="/integration-services">
                                            <a> Integration Services</a>
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="feature-one__hover-content">
                                        <div className="feature-one__icon">
                                            <span className="icon-system" />
                                        </div>
                                        <h3 className="feature-one__hover-title">
                                            <a href="#"> Integration Services</a>
                                        </h3>
                                        <p className="feature-one__hover-text">
                                            There are many lipsum of in pass sages of available some.
                                        </p>
                                        <div className="feature-one__learn-more">
                                             <Link  href="/services/integration-services">
                                               <a>Learn more
                                                <i className="fa fa-long-arrow-alt-right" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">

                            <div className="feature-one__single">
                                <div className="feature-one__img">
                                    <img src="assets/images/resources/web-dev-370x346.webp"
                                        alt="" />
                                    <div className="feature-one__title-box">
                                        <h3 className="feature-one__title">
                                            <a href="#">Web  Development</a>
                                        </h3>
                                    </div>
                                    <div className="feature-one__hover-content">
                                        <div className="feature-one__icon">
                                            <span className='icon-data-protection'>
                                        </span>
                                            {/* <span className="icon-cyber" /> */}
                                        </div>
                                        <h3 className="feature-one__hover-title">
                                            <a href="#">Web  Development</a>
                                        </h3>
                                        <p className="feature-one__hover-text">
                                            There are many lipsum of in pass sages of available some.
                                        </p>
                                        <div className="feature-one__learn-more">
                                        <Link href="/web-development">
                                            <a> Learn more
                                                <i className="fa fa-long-arrow-alt-right" />
                                            </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                            <div className="feature-one__single">
                                <div className="feature-one__img">
                                    <img src="assets/images/resources/cloud-servi-370x346.webp"
                                        alt="" />
                                    <div className="feature-one__title-box">
                                        <h3 className="feature-one__title">
                                            <a href="#">Cloud Services</a>
                                        </h3>
                                    </div>
                                    <div className="feature-one__hover-content">
                                        <div className="feature-one__icon">
                                            <span className='icon-technology'>
                                        </span>
                                            {/* <span className="icon-application" /> */}
                                        </div>
                                        <h3 className="feature-one__hover-title">
                                            <a href="#">Cloud Services</a>
                                        </h3>
                                        <p className="feature-one__hover-text">
                                            There are many lipsum of in pass sages of available some.
                                        </p>
                                        <div className="feature-one__learn-more">
                                        <Link href="/cloud-services">
                                            <a>Learn more
                                                <i className="fa fa-long-arrow-alt-right" />
                                            </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                            <div className="feature-one__single">
                                <div className="feature-one__img">
                                    <img src="assets/images/resources/service-370x346.webp"
                                         alt="" />
                                    <div className="feature-one__title-box">
                                        <h3 className="feature-one__title">
                                            <a href="#">Trainings</a>
                                        </h3>
                                    </div>
                                    <div className="feature-one__hover-content">
                                        <div className="feature-one__icon">
                                            <span className='icon-design-thinking'></span>
                                            {/* <span className="icon-system" /> */}
                                        </div>
                                        <h3 className="feature-one__hover-title">
                                            <a href="#">Trainings</a>
                                        </h3>
                                        <p className="feature-one__hover-text">
                                            There are many lipsum of in pass sages of available some.
                                        </p>
                                        <div className="feature-one__learn-more">
                                        <Link href="/trainings">
                                            <a>
                                                Learn more
                                                <i className="fa fa-long-arrow-alt-right" />
                                            </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">

                            <div className="feature-one__single">
                                <div className="feature-one__img">
                                    <img src="assets/images/resources/service-security-370x346.webp"
                                         alt="" />
                                    <div className="feature-one__title-box">
                                        <h3 className="feature-one__title">
                                            <a href="#">IT Security Consulting</a>
                                        </h3>
                                    </div>
                                    <div className="feature-one__hover-content">
                                        <div className="feature-one__icon">
                                            <span className="icon-cyber" />
                                        </div>
                                        <h3 className="feature-one__hover-title">
                                            <a href="#">IT Security Consulting</a>
                                        </h3>
                                        <p className="feature-one__hover-text">
                                            There are many lipsum of in pass sages of available some.
                                        </p>
                                        <div className="feature-one__learn-more">
                                        <Link href="/IT-security-consulting">
                                            <a>
                                                Learn more
                                                <i className="fa fa-long-arrow-alt-right" />
                                            </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                            <div className="feature-one__single">
                                <div className="feature-one__img">
                                    <img src="assets/images/resources/UI-UX-Design.webp" 
                                        alt="" />
                                    <div className="feature-one__title-box">
                                        <h3 className="feature-one__title">
                                            <a href="#">UI/UX Designing</a>
                                        </h3>
                                    </div>
                                    <div className="feature-one__hover-content">
                                        <div className="feature-one__icon">
                                            <span className="icon-application" />
                                        </div>
                                        <h3 className="feature-one__hover-title">
                                            <a href="#">UI/UX Designing</a>
                                        </h3>
                                        <p className="feature-one__hover-text">
                                            There are many lipsum of in pass sages of available some.
                                        </p>
                                        <div className="feature-one__learn-more">
                                        <Link href="/ui-ux-designing">
                                            <a>
                                                Learn more
                                                <i className="fa fa-long-arrow-alt-right" />
                                            </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}