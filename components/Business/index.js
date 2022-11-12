import React from 'react'
import Link from 'next/link'
export default function Business() {
    return (
        <>
            <section className="business-from">
                <div className="business-from-bg-box">
                    <div
                        className="business-from-bg jarallax"
                        data-jarallax=""
                        data-speed="0.2"
                        data-imgposition="50% 0%"
                        style={{
                            backgroundImage: "url(assets/images/backgrounds/dark.webp)"
                        }}
                    />
                </div>
                <div className="container">
                    <div className="business-from__inner text-center">
                        <p className="business-from__sub-title">Business From Great Idea To</p>
                        <h2 className="business-from__title">Launching</h2>
                        <div className="business-from__btn-box">
                            <Link href="/contact" >
                                <a className="business-from__btn thm-btn  change_color">
                                    Contact Us Now
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>



    );

}