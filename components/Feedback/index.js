import React from 'react'

function index() {
  return (
    <>

      <section className="testimonial-two">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Our Clients Feedback</span>
              <div className="section-title-shape">
                <img src="assets/images/shapes/section-title-shape.png" alt="" />
              </div>
            </div>
            <h2 className="section-title__title">What they’re talking?</h2>
          </div>
          <div
            className="owl-carousel owl-theme thm-owl__carousel testimonial-two__carousel"
            data-owl-options='{
              "loop": true,
              "autoplay": true,
              "margin": 30,
              "nav": false,
              "dots": false,
              "smartSpeed": 500,
              "autoplayTimeout": 10000,
              "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
              "responsive": {
                  "0": {
                      "items": 1
                  },
                  "768": {
                      "items": 2
                  },
                  "992": {
                      "items": 3
                  },
                  "1200": {
                      "items": 3
                  }
              }
          }'
          >
            <div className="testimonial-two__single">
              <div className="testimonial-two__single-inner">
                <div className="testimonial-two__icon">
                  <img src="assets/images/icon/testimonial-two-icon.png" alt="" />
                </div>
                <p className="testimonial-two__text">
                  Lorem ipsum is simply free text dolor not sit amet, consectetur
                  notted adipisicing elit sed do eiusmod tempor incididunt labore et
                  dolore text.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-img">
                    <img
                      src="assets/images/testimonial/testimonial-2-3.jpg"
                      alt=""
                    />
                  </div>
                  <h5 className="testimonial-two__client-name">Kevin Martin</h5>
                  <p className="testimonial-two__client-title">Customer</p>
                </div>
                <div className="testimonial-two-shape">
                  <img
                    src="assets/images/shapes/testimonial-two-shape.png"
                    alt=""
                  />
                </div>




                <div className="testimonial-two__single">
                  <div className="testimonial-two__single-inner">
                    <div className="testimonial-two__icon">
                      <img src="assets/images/icon/testimonial-two-icon.png" alt="" />
                    </div>
                    <p className="testimonial-two__text">
                      Lorem ipsum is simply free text dolor not sit amet, consectetur
                      notted adipisicing elit sed do eiusmod tempor incididunt labore et
                      dolore text.
                    </p>
                    <div className="testimonial-two__client-info">
                      <div className="testimonial-two__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-2-2.jpg"
                          alt=""
                        />
                      </div>
                      <h5 className="testimonial-two__client-name">Jessica Brown</h5>
                      <p className="testimonial-two__client-title">Customer</p>
                    </div>
                    <div className="testimonial-two-shape">
                      <img
                        src="assets/images/shapes/testimonial-two-shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>




                <div className="testimonial-two__single">
                  <div className="testimonial-two__single-inner">
                    <div className="testimonial-two__icon">
                      <img src="assets/images/icon/testimonial-two-icon.png" alt="" />
                    </div>
                    <p className="testimonial-two__text">
                      Lorem ipsum is simply free text dolor not sit amet, consectetur
                      notted adipisicing elit sed do eiusmod tempor incididunt labore et
                      dolore text.
                    </p>
                    <div className="testimonial-two__client-info">
                      <div className="testimonial-two__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-2-1.jpg"
                          alt=""
                        />
                      </div>
                      <h5 className="testimonial-two__client-name">Mike Hardson</h5>
                      <p className="testimonial-two__client-title">Customer</p>
                    </div>
                    <div className="testimonial-two-shape">
                      <img
                        src="assets/images/shapes/testimonial-two-shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="testimonial-two__single">
              <div className="testimonial-two__single-inner">
                <div className="testimonial-two__icon">
                  <img src="assets/images/icon/testimonial-two-icon.png" alt="" />
                </div>
                <p className="testimonial-two__text">
                  Lorem ipsum is simply free text dolor not sit amet, consectetur
                  notted adipisicing elit sed do eiusmod tempor incididunt labore et
                  dolore text.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-img">
                    <img
                      src="assets/images/testimonial/testimonial-2-2.jpg"
                      alt=""
                    />
                  </div>
                  <h5 className="testimonial-two__client-name">Jessica Brown</h5>
                  <p className="testimonial-two__client-title">Customer</p>
                </div>
                <div className="testimonial-two-shape">
                  <img
                    src="assets/images/shapes/testimonial-two-shape.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="testimonial-two__single">
              <div className="testimonial-two__single-inner">
                <div className="testimonial-two__icon">
                  <img src="assets/images/icon/testimonial-two-icon.png" alt="" />
                </div>
                <p className="testimonial-two__text">
                  Lorem ipsum is simply free text dolor not sit amet, consectetur
                  notted adipisicing elit sed do eiusmod tempor incididunt labore et
                  dolore text.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-img">
                    <img
                      src="assets/images/testimonial/testimonial-2-1.jpg"
                      alt=""
                    />
                  </div>
                  <h5 className="testimonial-two__client-name">Mike Hardson</h5>
                  <p className="testimonial-two__client-title">Customer</p>
                </div>
                <div className="testimonial-two-shape">
                  <img
                    src="assets/images/shapes/testimonial-two-shape.png"
                    alt=""
                  />
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