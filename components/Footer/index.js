import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className="site-footer">
        <div
          className="site-footer-bg-1 wow slideInLeft"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
          style={{
            backgroundImage:
              "url(assets/images/shapes/site-footer-shape-1.png)",
          }}
        ></div>
        <div
          className="site-footer-bg-2 wow slideInRight"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
          style={{
            backgroundImage:
              "url(assets/images/shapes/site-footer-shape-2.png)",
          }}
        ></div>
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="site-footer__top-left">
                <div className="site-footer__top-icon">
                  <span className="icon-artificial-intelligence" />
                </div>
                <h3 className="site-footer__top-title">
                  Helping You Overcome Your Technology Challenges
                </h3>
              </div>
              <div className="site-footer__top-right">
                <Link href="/">
                  <a className="thm-btn site-footer__btn Change_color">
                    Download
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__middle">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="/">
                      <a onClick={() => router.push("/")}>
                        <img
                          src="assets/images/resources/cloudsurfex_logo-invert-removebg-preview.png"
                          style={{
                            width: 130,
                            height: 130,
                            marginTop: -40,
                          }}
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      Subsrcibe for our upcoming latest articles <br />
                      and news resources
                    </p>
                  </div>
                  <form className="footer-widget__newsletter-form">
                    <div className="footer-widget__newsletter-input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                      <button
                        type="submit"
                        className="footer-widget__newsletter-btn"
                      >
                        <img
                          src="assets/images/icon/footer-widget-newsletter-send-icon.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">Services</h3>
                  <ul className="footer-widget__links-list list-unstyled clearfix">
                    <li>
                      <Link href="../services/integration-services">
                        Integration Services
                      </Link>
                    </li>
                    <li>
                      <Link href="../services/web-development">
                        Website Development
                      </Link>
                    </li>
                    <li>
                      <Link href="../services/cloud-services">
                        Cloud Services
                      </Link>
                    </li>
                    <li>
                      <Link href="../services/trainings">Trainings</Link>
                    </li>
                    <li>
                      <Link href="../services/IT-security-consulting">
                        IT Security Consulting
                      </Link>
                    </li>
                    <li>
                      <Link href="../services/ui-ux-designing">
                        UI/UX Design
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__contact clearfix">
                  <h3 className="footer-widget__title">Contact</h3>
                  <ul className="footer-widget__contact-list list-unstyled clearfix">
                    <li>
                      <div className="icon">
                        <span className="icon-telephone" />
                      </div>
                      <div className="text">
                        <p>
                          <Link href="/">+91-8971053502</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <div className="icon-email">
                          <img
                            className="icon"
                            src="assets/images/backgrounds/envelope.png"
                            style={{ width: 15, height: 15, marginTop: 10 }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="text">
                        <p>
                          <Link href="mailto:">admin@cloudsurfex.com</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-pin" />
                      </div>
                      <div className="text">
                        <p>
                          Mahaveer Promenade, <br />
                          Belathur Main Road,
                          <br />
                          Sadarmangala, KR Puram, <br /> Bangalore
                          (Karnataka)-560067
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__social-box clearfix">
                  <div className="site-footer__social">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <img
                        className="icon"
                        src="assets/images/backgrounds/pixlr-bg-result.png"
                        style={{ width: 20, height: 20, color: "white" }}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <p className="site-footer__bottom-text">
                    Copyright @2022 Cloud Surfex. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
