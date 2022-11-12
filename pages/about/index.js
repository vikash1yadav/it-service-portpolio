import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Business from '../../components/Business'
import Partners from '../../components/Partners'
import StayProtected from '../../components/StayProtected'
import Counter from '../../components/Counter/index.'
import TeamMembers from '../../components/TeamMembers'



export default function about() {
    return (

        <>
            <Head>
                <title>Know More About Us</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section className="page-header">
                <div
                    className="page-header-bg"
                    style={{
                        backgroundImage: "url(assets/images/backgrounds/about-us-1894x345.webp"
                    }}
                ></div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <span>/</span>
                            </li>
                            <li className="active">About us</li>
                        </ul>
                        <h2>About Us</h2>
                    </div>
                </div>
            </section>

            {/* <div className="container mb-5">
                <div className="delivering-it__bottom">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">

                            <div className="delivering-it__single">
                                <div className="delivering-it__img">
                                    <img
                                        src="assets/images/resources/pexels-mart-production.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="delivering-it__content">
                                    <h5 className="delivering-it__content-title">
                                        Perfect Solution Every Business Demands
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">

                            <div className="delivering-it__single">
                                <div className="delivering-it__img">
                                    <img
                                        src="assets/images/resources/pexels-fauxels.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="delivering-it__content">
                                    <h5 className="delivering-it__content-title">
                                        Helping Businesses Around The World
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">

                            <div className="delivering-it__single">
                                <div className="delivering-it__img">
                                    <img
                                        src="assets/images/resources/pexels-arina-krasnikova.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="delivering-it__content">
                                    <h5 className="delivering-it__content-title">
                                        What Is Holding Back The IT Solution.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <Partners /> */}
            {/* <Business /> */}
            <StayProtected />
            {/* <Counter /> */}
            {/* <TeamMembers /> */}


        </>


    )
}
