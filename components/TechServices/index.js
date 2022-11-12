import React from 'react'
import Link from 'next/link';
export default function TechServices() {
    return (
        <>
            <section className="tech-services">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="tech-services__left">
                                <div
                                    className="tech-services__img-box wow slideInLeft"
                                    data-wow-delay="100ms"
                                    data-wow-duration="2500ms"
                                >
                                    <div className="tech-services__img">
                                        <img
                                            src="assets/images/resources/pexels-antoni-shkraba.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="tech-services__img-content">
                                        <p className="tech-services__img-text">
                                            At mi mauris <br /> vestibulum <br /> eu tellus <br />
                                            tristique <br /> sapien
                                        </p>
                                        <div className="tech-services__learn-more">
                                            <Link href="/">
                                                <a >
                                                    Learn more
                                                    <i className="fa fa-long-arrow-alt-right" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="tech-services__right">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Stay protected</span>
                                        <div className="section-title-shape">
                                            <img
                                                src="assets/images/shapes/section-title-shape.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <h2 className="section-title__title">
                                        Tech Services For Your Business Ideas
                                    </h2>
                                </div>
                                <p className="tech-services__text">
                                    Donec suscipit ante ipsum. Donec convallis quam at tortor
                                    hendrerit, ut elementum augue suscipit. Morbi tincidunt risus vel
                                    neque convallis pretium non nec justo.
                                </p>
                                <ul className="list-unstyled tech-services__points">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick" />
                                        </div>
                                        <div className="content">
                                            <h4>We deliver Perfect Solutions</h4>
                                            <p>Lorem Ipsum nibh vel velit auctor aliqu aenean sollic.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick" />
                                        </div>
                                        <div className="content">
                                            <h4>We work with Global Brands</h4>
                                            <p>Lorem Ipsum nibh vel velit auctor aliqu aenean sollic.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}