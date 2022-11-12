import React from 'react'

function index() {
  return (
    <>
  
  <section className="notech-more">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="notech-more__left">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Stay Protected</span>
                <div className="section-title-shape">
                  <img
                    src="assets/images/shapes/section-title-shape.png"
                    alt=""
                  />
                </div>
              </div>
              <h2 className="section-title__title">
                Cloud Surfex is more than Cloud company
              </h2>
            </div>
            <p className="notech-more__text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <ul className="list-unstyled notech-more__points">
              <li>
                <div className="icon">
                  <span className="icon-technology" />
                </div>
                <h3 className="notech-more__title">Data Innovations</h3>
                <p className="notech-more__text-2">
                  Nullam mollis elit quis dus is lacinia not efficitur.
                </p>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-stock-market" />
                </div>
                <h3 className="notech-more__title">Business Solutions</h3>
                <p className="notech-more__text-2">
                  Nullam mollis elit quis dus is lacinia not efficitur.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="notech-more__right">
            <div
              className="notech-more__img wow slideInRight"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <img src="assets/images/resources/about-cloud-570x440.webp" alt="" />
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