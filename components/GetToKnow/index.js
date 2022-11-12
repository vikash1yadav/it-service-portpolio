import React from 'react'
import Link from 'next/link'
export default function GetToKnow() {
    return (

        <>
            <section className="get-to-know">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div
                                className="get-to-know__left wow slideInLeft"
                                data-wow-delay="100ms"
                                data-wow-duration="2500ms"
                            >
                                <div className="get-to-know__img-box">
                                    <div className="get-to-know__img">
                                        <img src="assets/images/resources/pexels-fauxels-3182812 (1).jpg"
                                            style={{ width: 350, height: 350 }} alt="" />
                                    </div>
                                    <div className="get-to-know__small-img">
                                        <img
                                            src="assets/images/resources/pexels-canva-studio-3194524.jpg"
                                            style={{ width: 350, height: 350 }}
                                            alt="" />
                                    </div>
                                   
                                    <div className="get-to-know-shape-1">
                                        <img src="assets/images/shapes/get-to-know-shape-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="get-to-know__right">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Get to know us</span>
                                        <div className="section-title-shape">
                                            <img
                                                src="assets/images/shapes/section-title-shape.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <h2 className="section-title__title">
                                        Easy Solutions For Your IT Problems
                                    </h2>
                                </div>
                                <p className="get-to-know__text">
                                    Lorem ipsum dolor sit amet, consectetur nod adipisicing elit sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua lonm
                                    andhn.
                                </p>
                                <ul className="list-unstyled get-to-know__points">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check" />
                                        </div>
                                        <div className="text">
                                            <p>Donec scelerisque egestas purus eget fringilla</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check" />
                                        </div>
                                        <div className="text">
                                            <p>Mauris imperdiet non ligula et lobortis.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="get-to-know__it-solutions">
                                    <div className="get-to-know__it-solutions-icon">
                                        <span className="icon-data-analytics" />
                                    </div>
                                    <div className="get-to-know__it-solutions-text-box">
                                        <p className="get-to-know__it-solutions-text">
                                            Stop worrying, we take care of your technology problems.
                                        </p>
                                    </div>
                                </div>
                                <Link href="/about">
                                <a className="get-to-know__btn thm-btn new">
                                    Discover More
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    );
}