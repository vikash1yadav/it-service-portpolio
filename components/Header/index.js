import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [showNavBar, setShowNavBar] = useState(false);
  const [showDropdown, setDropdown] = useState(false);
  const handleClickHome = () => {
    router.replace();
    router.push("/");
  };
  return (
    <>
      <nav className="main-menu clearfix nav-bar-sticky">
        <div className="main-menu__wrapper clearfix">
          <div className="main-menu__left main-menu__left--two">
            <div className="main-menu__logo">
              <Link href="/">
                <a onClick={() => router.push("/")}>
                  <img
                    className="logo-light"
                    src="assets/images/resources/cloudsurfex_logo-invert-removebg-preview.png"
                    style={{
                      width: 120,
                      height: 120,
                      marginTop: -40,
                    }}
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="main-menu__main-menu-box main-menu__main-menu-box--two">
              <Link href="/">
                <a
                  onClick={() => setShowNavBar(!showNavBar)}
                  className="mobile-nav__toggler"
                >
                  <i className="fa fa-bars"></i>
                </a>
              </Link>
              <div
                className={`mobile-nav__wrapper ${
                  showNavBar ? "expanded" : ""
                }`}
              >
                <div className="mobile-nav__overlay mobile-nav__toggler" />
                <div className="mobile-nav__content">
                  <span className="mobile-nav__close mobile-nav__toggler">
                    <i
                      onClick={() => setShowNavBar(!showNavBar)}
                      className="fa fa-times"
                    ></i>
                  </span>
                  <div className="logo-box">
                    <Link href="" aria-label="logo image">
                      <img
                        src="assets/images/resources/cloudsurfex_logo-invert-removebg-preview.png"
                        style={{
                          width: 120,
                          height: 120,
                          marginTop: -32,
                        }}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="mobile-nav__container">
                    <ul className="main-menu_list">
                      <li className="">
                        <Link href="/">
                          <a
                            className="/"
                            aria-label="dropdown toggler"
                            onClick={() => setShowNavBar(!showNavBar)}
                          >
                            Home
                            <a
                              className="float-right dropdown toggler"
                              style={{
                                backgroundColor: "#009798",
                                padding: "0 8px",
                                float: "right",
                                marginRight: "10px",
                              }}
                            >
                              <i
                                className="fa fa-angle-right"
                                style={{
                                  color: "white",
                                  position: "relative",
                                }}
                              />
                            </a>
                          </a>
                        </Link>
                      </li>
                      <hr />
                      <li>
                        <Link href="/about">
                          <a
                            className="/"
                            aria-label="dropdown toggler"
                            onClick={() => setShowNavBar(!showNavBar)}
                          >
                            About Us
                            <a
                              //   className="dropdown toggler"
                              style={{
                                backgroundColor: "#009798",
                                padding: "0 8px",
                                float: "right",
                                marginRight: "10px",
                              }}
                            >
                              <i
                                className="fa fa-angle-right"
                                style={{
                                  color: "white",
                                  position: "relative",
                                }}
                              />
                            </a>
                          </a>
                        </Link>
                      </li>
                      <hr />
                      <li className="dropdown">
                        {/* <Link href="/services" className="expanded"> */}
                        <a
                          className="/"
                          aria-label="dropdown toggler"
                          onClick={() => setDropdown(!showDropdown)}
                        >
                          Services
                          <a
                            className="dropdown toggler"
                            style={{
                              backgroundColor: "#009798",
                              padding: "0 8px",
                              float: "right",
                              marginRight: "10px",
                            }}
                          >
                            <i
                              className={
                                showDropdown
                                  ? "fa fa-angle-down"
                                  : "fa fa-angle-right"
                              }
                              style={{
                                color: "white",
                                position: "relative",
                              }}
                            />
                          </a>
                          {showDropdown ? (
                            <ul className="dropdown">
                              <li>
                                <Link href="/services">
                                  <a>Services</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/integration-services">
                                  <a>Integration Services</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development">
                                  <a>Web Development</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/cloud-services">
                                  <a>Cloud Services</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/trainings">
                                  <a>Trainings</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/IT-security-consulting">
                                  <a> IT Security Consulting</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ui-ux-designing">
                                  <a> UI/UX Designing</a>
                                </Link>
                              </li>
                            </ul>
                          ) : null}
                        </a>
                        {/* </Link> */}
                      </li>
                      <hr />
                      <li>
                        <Link href="/contact">
                          <a
                            className="/"
                            onClick={() => setShowNavBar(!showNavBar)}
                          >
                            Contact
                            <a
                              className="dropdown toggler"
                              style={{
                                backgroundColor: "#009798",
                                padding: "0 8px",
                                float: "right",
                                marginRight: "10px",
                              }}
                            >
                              <i
                                className="fa fa-angle-right"
                                style={{
                                  color: "white",
                                  position: "relative",
                                }}
                              />
                            </a>
                          </a>
                        </Link>
                      </li>
                      <hr />
                    </ul>
                  </div>
                  <ul className="mobile-nav__contact list-unstyled">
                    <li>
                      <i className="fa fa-envelope" />
                      <Link href="mailto:needhelp@packageName__.com">
                        admin@cloudsurfex.com
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-phone-alt" />
                      <Link href="tel:666-888-0000">+91 8971053502</Link>
                    </li>
                  </ul>
                  <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                      <Link href="/">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="/">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link href="/">
                        <img
                          className="icon"
                          src="assets/images/backgrounds/pixlr-bg-result.png"
                          style={{
                            width: 20,
                            height: 20,
                            color: "white",
                            marginLeft: 30,
                          }}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="main-menu__list">
                <li>
                  <Link href="/" replace>
                    <a onClick={handleClickHome}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li className="dropdown">
                  <Link href="/services">Services</Link>
                  <ul>
                    <li>
                      <Link href="/integration-services">
                        <a>Integration Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-development">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/cloud-services">Cloud Services</Link>
                    </li>
                    <li>
                      <Link href="/trainings">Trainings</Link>
                    </li>
                    <li>
                      <Link href="/IT-security-consulting">
                        IT Security Consulting
                      </Link>
                    </li>
                    <li>
                      <Link href="/ui-ux-designing">UI/UX Designing</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
