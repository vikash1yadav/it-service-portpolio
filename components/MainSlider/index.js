import React from 'react'
import Link from 'next/link';

export default function MainSlider() {
    return (
        <>
            <section className="main-slider">
                <div
                    className="swiper-container thm-swiper__slider"
                    data-swiper-options='{"slidesPerView": 1, "loop": true,
                            "effect": "fade",
                            "pagination": {
                            "el": "#main-slider-pagination",
                            "type": "bullets",
                            "clickable": true
                            },
                            "navigation": {
                            "nextEl": "#main-slider__swiper-button-next",
                            "prevEl": "#main-slider__swiper-button-prev"
                            },
                            "autoplay": {
                            "delay": 5000
                            }}'
                >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div
                                className="image-layer"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/backgrounds/website.webp)"
                                }}
                            />
                            <div className="main-slider__shape-1">
                                {/* <img src="assets/images/shapes/main-slider-three-shadow.png" alt="" /> */}
                            </div>
                            <div className="main-slider__shape-2">
                                <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />

                            </div>
                            <div className="main-slider__shape-3">
                                <img src="assets/images/shapes/main-slider-shape-3.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider__content">
                                            <p>Website Development &amp;</p>
                                            <h2>UI/UX Design</h2>
                                            <div className="main-slider__btn-video-box">
                                                <div className="main-slider__btn-box">
                                                    <Link href="/about">

                                                        <a className="thm-btn main-slider__btn change_color">
                                                            Discover More</a>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="image-layer"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/backgrounds/post.jpg)"
                                }}
                            />
                            <div className="main-slider__shape-1">
                                <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
                            </div>
                            <div className="main-slider__shape-2">
                                <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
                            </div>
                            <div className="main-slider__shape-3">
                                <img src="assets/images/shapes/main-slider-shape-3.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider__content">
                                            <p>Integration</p>
                                            <h2>Services</h2>
                                            <div className="main-slider__btn-video-box">
                                               
                                                <Link href="/about">

                                                    <a className="thm-btn main-slider__btn  change_color">
                                                        Discover More</a>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="image-layer"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/backgrounds/cloud.webp)"
                                }}
                            />
                            <div className="main-slider__shape-1">
                                <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
                            </div>
                            <div className="main-slider__shape-2">
                                <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
                            </div>
                            <div className="main-slider__shape-3">
                                <img src="assets/images/shapes/main-slider-shape-3.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider__content">
                                            <p>Cloud </p>
                                            <h2>Services</h2>
                                            <div className="main-slider__btn-video-box">
                                                <div className="main-slider__btn-box">
                                                    {/* <a href="/" className="thm-btn main-slider__btn">
                                                        Discover More
                                                    </a> */}
                                                    <Link href="/about">

                                                        <a className="thm-btn main-slider__btn  change_color">
                                                            Discover More</a>
                                                    </Link>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination" id="main-slider-pagination" />
                </div>
            </section>

        </>
    );
}