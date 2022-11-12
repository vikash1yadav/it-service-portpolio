import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <>
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="service-details__left">
                <div className="service-details__service">
                  <h3 className="service-details__title">Services</h3>
                  <ul className="service-details__service-list list-unstyled">
                    <li className="active">
                      <Link href="/integration-services">
                        <a>Integration Services{" "}
                          <span className="fa fa-long-arrow-alt-right" /></a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/web-development">
                        <a>Web Development{" "}
                          <span className="fa fa-long-arrow-alt-right" /></a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/cloud-services">
                        <a>Cloud Services{" "}
                          <span className="fa fa-long-arrow-alt-right" /></a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/trainings">
                        <a>Trainings{" "}
                          <span className="fa fa-long-arrow-alt-right" /></a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/IT-security-consulting">
                        <a>IT Security Consulting{" "}
                          <span className="fa fa-long-arrow-alt-right" /></a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/ui-ux-designing">
                        <a>UI/UX Designing{" "}
                          <span className="fa fa-long-arrow-alt-right" /></a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="service-details__need-help">
                  <div
                    className="service-details__need-help-bg"
                    style={{
                      backgroundImage:
                        "url(../assets/images/backgrounds/integrate-370xx385.webp)"
                    }}
                  ></div>
                  <div className="service-details__need-help-icon">
                    <img
                      src="../assets/images/icon/service-details-need-help-icon.png"
                      alt=""
                    />
                  </div>
                  <h2 className="service-details__need-help-title">
                    Easy Solutions <br /> to your Tech <br />
                    Problem
                  </h2>
                  <div className="service-details__need-help-contact">
                    <p>Have any question?</p>
                    <a href="tel:980009850">
                      {" "}
                      <span>Call Us</span> +91-8971053502
                    </a>
                  </div>
                </div>
                <div className="service-details__download">
                  <Link href="#">
                  <a
                    className="thm-btn service-details__download-btn"
                  >
                    Download our flyer
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="../assets/images/backgrounds/integrate370x239.webp"
                    alt=""
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__content-title">
                    Integration Services
                  </h3>
                  <p className="service-details__text-1">
                    Lorem ipsum is simply free text used by copytyping refreshing.
                    Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                    et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                    port lacus quis enim var sed efficitur turpis gilla sed sit amet
                    finibus eros. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the ndustry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                  <p className="service-details__text-2">
                    When an unknown printer took a simply free galley of type and
                    scrambled it to make a type specimen book.
                  </p>
                  <p className="service-details__text-3">
                    It has survived not only five centuries. Lorem Ipsum is simply
                    dummy text of the new design printng and type setting Ipsum take
                    a look at our round. When an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting.
                  </p>
                </div>
                <ul className="list-unstyled service-details__points">
                  <li>
                    <div className="service-details__points-icon">
                      <span className="icon-customer-service" />
                    </div>
                    <h4 className="service-details__points-title">
                      Trusted IT advisor
                    </h4>
                    <p className="service-details__points-text">
                      Lorem ipsum is simply free <br /> text used by refring.
                    </p>
                  </li>
                  <li>
                    <div className="service-details__points-icon">
                      <span className="icon-market-analysis" />
                    </div>
                    <h4 className="service-details__points-title">
                      Market analysis
                    </h4>
                    <p className="service-details__points-text">
                      Lorem ipsum is simply free <br /> text used by refring.
                    </p>
                  </li>
                  <li>
                    <div className="service-details__points-icon">
                      <span className="icon-technical-support" />
                    </div>
                    <h4 className="service-details__points-title">
                      Endpoint managed
                    </h4>
                    <p className="service-details__points-text">
                      Lorem ipsum is simply free <br /> text used by refring.
                    </p>
                  </li>
                </ul>
                <div className="service-details__points-two">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__points-two-single">
                        <div className="service-details__points-two-content">
                          <h4>Proin tempus</h4>
                          <p>
                            There are many of of lorem Ipsum, but the majori have
                            suffered.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="service-details__points-two-single">
                        <div className="service-details__points-two-content">
                          <h4>Proin tempus</h4>
                          <p>
                            There are many of of lorem Ipsum, but the majori have
                            suffered.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-details__benefits">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__benefits-img">
                        <img
                          src="../assets/images/backgrounds/integrate-resized-370x239.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="service-details__benefits-right">
                        <h3 className="service-details__benefits-title">
                          Our benefits
                        </h3>
                        <p className="service-betails__benefits-text-1">
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum.
                        </p>
                        <ul className="list-unstyled service-details__benefits-points">
                          <li>
                            <div className="icon">
                              <i className="icon-check" />
                            </div>
                            <div className="text">
                              <p>Praesent efficitur quam sit amet</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="icon-check" />
                            </div>
                            <div className="text">
                              <p>Nunc cursus dolor id purus euismod</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="icon-check" />
                            </div>
                            <div className="text">
                              <p>Quisque tincidunt eros ac place viverra</p>
                            </div>
                          </li>
                        </ul>
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

  )
}

export default index