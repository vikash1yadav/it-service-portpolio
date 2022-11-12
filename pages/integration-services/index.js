import React from 'react'
import IntegrationService from '../../components/IntegrationService'
import Link from 'next/link'

function integrationservices() {
  return (
    <>
  <section className="page-header">
  <div
  className="service-details__need-help-bg"
  style={{
    backgroundImage:
      "url(../assets/images/backgrounds/Hnet.com-image-_5_.webp)"
  }}
  >
  </div>
    <div className="container">
      <div className="page-header__inner">
        <ul className="thm-breadcrumb list-unstyled">
          <li>
          <Link href="/">
            <a>Home</a>
            </Link>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>
          <Link href="/services">
            <a>Service</a>
            </Link>
          </li>
          <li>
            <span>/</span>
          </li>
          <li className="active">Integration Services</li>
        </ul>
        <h2>Integration Services</h2>
      </div>
    </div>
  </section>
  <IntegrationService />
</>
  )
}
export default integrationservices