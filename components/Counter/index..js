import React from 'react'
export default function Counter() {
    return (

        <>
            <section className="counter-one">
                <div
                    className="counter-one__bg"
                    style={{
                        backgroundImage: "url(assets/images/backgrounds/funfact-bg-1-1.jpeg)"
                    }}
                ></div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <ul className="list-unstyled counter-one__list">
                                <li
                                    className="counter-one__single wow fadeInUp"
                                    data-wow-delay="100ms"
                                >
                                    <div className="counter-one__icon">
                                        <span className="icon-work" />
                                    </div>
                                    <h3 className="odometer" data-count={30}>
                                        00
                                    </h3>
                                    <span className="counter-one__plus">+</span>
                                    <p className="counter-one__title">Years of experience</p>
                                    <p className="counter-one__text">
                                        Lorem ipsum is simply free text used by refring.
                                    </p>
                                </li>
                                <li
                                    className="counter-one__single wow fadeInUp"
                                    data-wow-delay="200ms"
                                >
                                    <div className="counter-one__icon">
                                        <span className="icon-technical-support" />
                                    </div>
                                    <h3 className="odometer" data-count={2800}>
                                        00
                                    </h3>
                                    <p className="counter-one__title">IT problems solved</p>
                                    <p className="counter-one__text">
                                        Lorem ipsum is simply free text used by refring.
                                    </p>
                                </li>
                                <li
                                    className="counter-one__single wow fadeInUp"
                                    data-wow-delay="300ms"
                                >
                                    <div className="counter-one__icon">
                                        <span className="icon-like" />
                                    </div>
                                    <h3 className="odometer" data-count={6960}>
                                        00
                                    </h3>
                                    <p className="counter-one__title">Satisfied clients</p>
                                    <p className="counter-one__text">
                                        Lorem ipsum is simply free text used by refring.
                                    </p>
                                </li>
                                <li
                                    className="counter-one__single wow fadeInUp"
                                    data-wow-delay="300ms"
                                >
                                    <div className="counter-one__icon">
                                        <span className="icon-user" />
                                    </div>
                                    <h3 className="odometer" data-count={29}>
                                        00
                                    </h3>
                                    <span className="counter-one__plus">+</span>
                                    <p className="counter-one__title">Pro team members</p>
                                    <p className="counter-one__text">
                                        Lorem ipsum is simply free text used by refring.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}