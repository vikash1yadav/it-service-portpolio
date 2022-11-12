import React from 'react'

export default function Testimonial() {
    return (
        <>
            <section className="testimonial-one">
                <div className="testimonial-one__inner">
                    <div className="testimonial-one-shape float-bob-x">
                        <img src="assets/images/shapes/testimonial-one-shape.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="testimonial-one__inner-content">
                            <div
                                className="owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel"
                                data-owl-options='{
                      "loop": true,
                      "autoplay": true,
                      "margin": 30,
                      "nav": false,
                      "dots": true,
                      "smartSpeed": 500,
                      "autoplayTimeout": 10000,
                      "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
                      "responsive": {
                          "0": {
                              "items": 1
                          },
                          "768": {
                              "items": 1
                          },
                          "992": {
                              "items": 1
                          },
                          "1200": {
                              "items": 1
                          }
                      }
                  }'
                            >
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__top-content">
                                        <div className="testimonial-one__img">
                                            <img
                                                src="assets/images/testimonial/pexels-justin-shaifer-1222271.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="testimonial-one__content">
                                            <p className="testimonial-one__text">
                                                This is due to their excellent service, competitive pricing
                                                and customer support. It’s throughly refresing to get such a
                                                personal touch. Duis aute lorem ipsum is simply free text
                                                irure dolor in reprehenderit in esse nulla pariatur.
                                            </p>
                                            <div className="testimonial-one__bottom-content">
                                                <div className="testimonial-one__client-info">
                                                    <h5 className="testimonial-one__client-name">
                                                        Aleesha Brown
                                                    </h5>
                                                    <p className="testimonial-one__client-company">
                                                        Client of cloud Surfex company
                                                    </p>
                                                </div>
                                                <div className="testimonial-one__quote">
                                                    <img
                                                        src="assets/images/testimonial/testimonial-1-quote.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__top-content">
                                        <div className="testimonial-one__img">
                                            <img
                                                src="assets/images/testimonial/pexels-andrea-piacquadio-712513 (1).jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="testimonial-one__content">
                                            <p className="testimonial-one__text">
                                                This is due to their excellent service, competitive pricing
                                                and customer support. It’s throughly refresing to get such a
                                                personal touch. Duis aute lorem ipsum is simply free text
                                                irure dolor in reprehenderit in esse nulla pariatur.
                                            </p>
                                            <div className="testimonial-one__bottom-content">
                                                <div className="testimonial-one__client-info">
                                                    <h5 className="testimonial-one__client-name">
                                                        Kavin Coper
                                                    </h5>
                                                    <p className="testimonial-one__client-company">
                                                        Client of Cloud Surfex company
                                                    </p>
                                                </div>
                                                <div className="testimonial-one__quote">
                                                    <img
                                                        src="assets/images/testimonial/testimonial-1-quote.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__top-content">
                                        <div className="testimonial-one__img">
                                            <img
                                                src="assets/images/testimonial/pexels-pixabay-38554.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="testimonial-one__content">
                                            <p className="testimonial-one__text">
                                                This is due to their excellent service, competitive pricing
                                                and customer support. It’s throughly refresing to get such a
                                                personal touch. Duis aute lorem ipsum is simply free text
                                                irure dolor in reprehenderit in esse nulla pariatur.
                                            </p>
                                            <div className="testimonial-one__bottom-content">
                                                <div className="testimonial-one__client-info">
                                                    <h5 className="testimonial-one__client-name">John Smith</h5>
                                                    <p className="testimonial-one__client-company">
                                                        Client of Cloud Surfex company
                                                    </p>
                                                </div>
                                                <div className="testimonial-one__quote">
                                                    <img
                                                        src="assets/images/testimonial/testimonial-1-quote.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
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