import React from "react";

export default function Helping() {
  return (
    <>
      <section className="helping">
        <div className="helping-wrapper">
          <div className="helping__left">
            <div
              className="helping__left-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/pexels-jopwell.jpg)",
              }}
            />
          </div>
          <div className="helping__right">
            <div
              className="helping-shape-1  wow slideInRight"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <img src="assets/images/shapes/helping-shape-1.png" alt="" />
            </div>
            <div className="helping__right-content">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    Technology solution
                  </span>
                  <div className="section-title-shape">
                    <img
                      src="assets/images/shapes/section-title-shape.png"
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="section-title__title">
                  Helping Businesses Around The World
                </h2>
              </div>
              <p className="helping__text">
                Lorem ipsum is simply free text dolor sit am adipi we help you
                ensure everyone.
              </p>
              <ul className="list-unstyled helping__points">
                <li>
                  <div className="icon">
                    <span className="icon-data-protection" />
                  </div>
                  <h3 className="helping__title">Data Protection</h3>
                  <p className="helping__text-2">
                    Lorem ipsum dolor sit amet consectetur notted.
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-backup-copy" />
                  </div>
                  <h3 className="helping__title">Optimize IT System</h3>
                  <p className="helping__text-2">
                    Lorem ipsum dolor sit amet consectetur notted.
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
