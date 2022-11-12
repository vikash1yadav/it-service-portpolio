import React from 'react'

export default function TopBar() {

    return (
        <>
            <div className="preloader">
                <img className="preloader__image" width="250" src="assets/images/resources/cloudsurfex_logo-invert-removebg-preview.png"
                    alt="" />
            </div>

            <div className="page-wrapper">
                <header className="main-header main-header--one clearfix">
                    <div className="main-header__top">
                        <div className="main-header__top-inner clearfix">
                            <div className="main-header__top-left">
                                <ul className="list-unstyled main-header__top-address">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-pin"></span>
                                        </div>
                                        <div className="text">
                                            <p>Mahaveer Promenade, Belathur Main Road, Sadarmangala,
                                                KR Puram, Bangalore (KARNATAKA) - 560067</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <div className="icon-email">
                                                <img className="icon" src='assets/images/backgrounds/envelope.png'
                                                    style={{ width: 15, height: 15, color: 'white' }}
                                                    alt=''
                                                />
                                            </div>

                                        </div>
                                        <div className="text">

                                            <p><a href="mailto:admin@cloudsurfex.com">admin@cloudsurfex.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-header__top-right">
                                <div className="main-header__top-right-content">
                                    <div className="main-header__top-right-social">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin"></i></a>
                                        <a href='#'>
                                            <img className='icon' src='assets/images/backgrounds/pixlr-bg-result.png'
                                                style={{
                                                    width: 20, height: 20, color: 'white'

                                                }}
                                                alt=''
                                            />
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}