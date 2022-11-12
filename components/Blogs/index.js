import React from 'react'
export default function Blogs() {
    return (

        <>
            <section className="blog-one">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">What’s happening</span>
                            <div className="section-title-shape">
                                <img src="assets/images/shapes/section-title-shape.png" alt="" />
                            </div>
                        </div>
                        <h2 className="section-title__title">News &amp; articles</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">

                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-1.jpeg"
                                        style={{ height: 250 }}
                                        alt="" />
                                    <div className="blog-one__tag">
                                        <p>Tech</p>
                                    </div>
                                    <a href="blog-details.html">
                                        <span className="blog-one__plus" />
                                    </a>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li>
                                            <a href="blog-details.html">
                                                <i className="far fa-clock" /> 8 Jan, 2022
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html">
                                                <i className="far fa-user-circle" /> by Layerdrops
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <a href="blog-details.html">
                                            Easy to use software new innovation
                                        </a>
                                    </h3>
                                    <div className="blog-one__bottom">
                                        <a href="blog-details.html">
                                            Learn more
                                            <i className="fa fa-long-arrow-alt-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">

                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-2.jpeg"
                                        style={{ height: 250 }} alt="" />
                                    <div className="blog-one__tag">
                                        <p>solution</p>
                                    </div>
                                    <a href="blog-details.html">
                                        <span className="blog-one__plus" />
                                    </a>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li>
                                            <a href="blog-details.html">
                                                <i className="far fa-clock" /> 8 Jan, 2022
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html">
                                                <i className="far fa-user-circle" /> by Layerdrops
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <a href="blog-details.html">
                                            What is holding back the IT solution.
                                        </a>
                                    </h3>
                                    <div className="blog-one__bottom">
                                        <a href="blog-details.html">
                                            Learn more
                                            <i className="fa fa-long-arrow-alt-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">

                            <div className="blog-one__single">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/pexels-evelina-zhukova.jpg"
                                        style={{ height: 250 }} alt="" />
                                    <div className="blog-one__tag">
                                        <p>Tech</p>
                                    </div>
                                    <a href="blog-details.html">
                                        <span className="blog-one__plus" />
                                    </a>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li>
                                            <a href="blog-details.html">
                                                <i className="far fa-clock" /> 8 Jan, 2022
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html">
                                                <i className="far fa-user-circle" /> by Layerdrops
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <a href="blog-details.html">
                                            Podcasting operational change management
                                        </a>
                                    </h3>
                                    <div className="blog-one__bottom">
                                        <a href="blog-details.html">
                                            Learn more
                                            <i className="fa fa-long-arrow-alt-right" />
                                        </a>
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