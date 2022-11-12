import React, { useState } from 'react'
import Head from 'next/head'
import { sendMail } from "../../Services/Helpers";
import Link from 'next/link';

const Contact = () => {

    const contactFormInitial = {
        name: "",
        email: "",
        message: "",
        phone: "",
        subject: "",

    };
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [contactForm, setcontactForm] = useState(contactFormInitial);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setcontactForm({ ...contactForm, [name]: value });

    };

    const { name, email, message, phone, subject } = contactForm
    const data = {
        name, email, message
    }
    const handleClick = async (e) => {
        try {
            e.preventDefault();
            setIsSubmitted(true);
            const data = {
                email,
                name,
                message,
                phone,
                subject
            }
            const res = sendMail(data);
        } catch (err) {
            {
                console.log(err)
            }
        }

    }
    return (
        <>
            <Head>
                <title>Feel Free To Contact Us</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content" />

            </div>

            <section className="page-header">
                <div
                    className="page-header-bg"
                    style={{

                        backgroundImage: "url(assets/images/backgrounds/pexels-snapwire.jpg)"
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
                            <li className="active">Contact</li>
                        </ul>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </section>



            <section className="contact-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="contact-details__img">
                                <img src="assets/images/resources/contact.webp"
                                    alt="" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-details__right">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Contact With Us</span>
                                        <div className="section-title-shape">
                                            <img
                                                src="assets/images/shapes/section-title-shape.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <h2 className="section-title__title">Get In Touch With Us</h2>
                                </div>
                                <p className="contact-details__text">
                                    Lorem ipsum dolor sit amet, consectetur notted adipis not icing
                                    elit sed do eiusmod tempor incididunt.
                                </p>
                                <ul className="list-unstyled contact-details__info">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-telephone" />
                                        </div>
                                        <div className="text">
                                            <p>Have any question?</p>
                                            <a href="tel:91+8971053502">
                                                <span></span>+91-8971053502
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <div className="icon-envelope" >
                                                <img className="icons-envelope" src='assets/images/backgrounds/envelope.png'
                                                    style={{ width: 25, height: 25}}
                                                    alt=''
                                                />
                                            
                                            </div>

                                        </div>
                                        <div className="text">
                                            <p>Write E-mail</p>
                                            
                                            <Link href="mailto:">admin@cloudsurfex.com
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-pin" />
                                        </div>
                                        <div className="text">
                                            <p>Visit anytime</p>
                                               
                                            <span>
                                                 Bangalore (KARNATAKA)-560067</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-page">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Send us email</span>
                            <div className="section-title-shape">
                                <img src="assets/images/shapes/section-title-shape.png" alt="" />
                            </div>
                        </div>
                        <h2 className="section-title__title">Feel free to write</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-page__form">
                                <form onSubmit={handleClick}
                                    className="comment-one__form contact-form-validated"
                                    noValidate="novalidate"
                                >
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text"
                                                    placeholder="Name"
                                                    name="name"
                                                    value={name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    name="email"
                                                    value={email}
                                                    onChange={handleChange}

                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input
                                                    type="text"
                                                    placeholder="Contact Number"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    value={subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea
                                                    name="message"
                                                    placeholder="Message"
                                                    value={message}
                                                    onChange={handleChange}

                                                />
                                            </div>
                                            <div className="comment-form__btn-box">
                                                <button type="submit"
                                                    className="thm-btn comment-form__btn change_color">
                                                    SUBMIT

                                                </button>
                                            </div>
                                            {isSubmitted ?
                                                <p>
                                                    Details Submitted Successfully!
                                                </p> : null
                                            }
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>


    );
}

export default Contact