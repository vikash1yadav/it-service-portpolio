import React from 'react'

export default function Projects() {
    return (
        <>
            <section className="project-one">
                <div className="project-one__inner">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline">
                                    Recently completed work
                                </span>
                                <div className="section-title-shape">
                                    <img src="assets/images/shapes/section-title-shape.png" alt="" />
                                </div>
                            </div>
                            <h2 className="section-title__title">Our Latest Projects</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                                <div className="project-one__single">
                                    <div className="project-one__img">
                                        <img src="assets/images/project/project-1-1.jpg"
                                            style={{ height: 250 }} alt="" />
                                        <a href="project-details.html">
                                            <img src="assets/images/icon/project-1-icon-1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="project-one__content">
                                        <span className="project-one__sub-title">Technology</span>
                                        <h3 className="project-one__title">
                                            <a href="project-details.html">
                                                Cloud migration saves
                                                <br /> money &amp; protect
                                            </a>
                                        </h3>
                                        <p className="project-one__text">
                                            When an unknown printer took a<br /> galley to and type book.
                                        </p>
                                        <a
                                            href="project-details.html"
                                            className="thm-btn project-one__btn"
                                        >
                                            View Our Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                <div className="project-one__single project-one__single-two">
                                    <div className="project-one__img">
                                        <img src="assets/images/project/project-1-2.jpg"
                                            style={{ height: 250 }} alt="" />
                                        <a href="project-details.html">
                                            <img src="assets/images/icon/project-1-icon-2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="project-one__content">
                                        <span className="project-one__sub-title">Development</span>
                                        <h3 className="project-one__title">
                                            <a href="project-details.html">
                                                Perfect solution that your <br /> business demands
                                            </a>
                                        </h3>
                                        <p className="project-one__text">
                                            When an unknown printer took a<br /> galley to and type book.
                                        </p>
                                        <a
                                            href="project-details.html"
                                            className="thm-btn project-one__btn"
                                        > View Our Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">

                                <div className="project-one__single project-one__single-three">
                                    <div className="project-one__img">
                                        <img src="assets/images/project/project-1-3.jpg"
                                            style={{ height: 250 }} alt="" />
                                        <a href="project-details.html">
                                            <img src="assets/images/icon/project-1-icon-3.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="project-one__content">
                                        <span className="project-one__sub-title">Solution</span>
                                        <h3 className="project-one__title">
                                            <a href="project-details.html">
                                                Trusted by The world best <br /> organizations
                                            </a>
                                        </h3>
                                        <p className="project-one__text">
                                            When an unknown printer took a<br /> galley to and type book.
                                        </p>
                                        <a
                                            href="project-details.html"
                                            className="thm-btn project-one__btn"
                                        >  View Our Project
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