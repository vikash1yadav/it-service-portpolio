import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Services from '../../components/Services'
import OurOfferings from '../../components/OurOfferings'
import Partners from '../../components/Partners'
import Feedback from '../../components/Feedback'

export default function services() {
    return (
        <>
            <Head>
                <title>We Provide Cloud Services</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content" />
            </div>
            <section className="page-header">
                <div
                    className="page-header-bg"
                    style={{
                        backgroundImage: "url(assets/images/backgrounds/service-bg-.webp)"
                    }}
                ></div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                    </Link>
                            </li>
                            <li>
                                <span>/</span>
                            </li>
                            <li className="active">Services</li>
                        </ul>
                        <h2>Our Services</h2>
                    </div>
                </div>
            </section>
            <Services />
            {/* <OurOfferings /> */}
            {/* <section className="tech-services tech-services-two">
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
                                            src="../assets/images/resources/reaized-img-Tech-serv-500x427.webp"
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
                                                <a> Learn more
                                                <i className="fa fa-long-arrow-alt-right" /></a>
                                               
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
                                        <span className="section-title__tagline">Stay Protected</span>
                                        <div className="section-title-shape">
                                            <img
                                                src="assets/images/shapes/section-title-shape.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <h2 className="section-title__title">
                                        Tech Services for your Business ideas
                                    </h2>
                                </div>
                                <p className="tech-services__text">
                                    Donec suscipit ante ipsum. Donec convallis quam at tortor hendrerit,
                                    ut elementum augue suscipit. Morbi tincidunt risus vel neque
                                    convallis pretium non nec justo.
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
            </section> */}
          
            {/* <Feedback/> */}
            {/* <Partners/> */}


        </>
    )
}
