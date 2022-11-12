
import React from 'react'
import CloudService from '../../components/CloudService'
import Link from 'next/link'

function CloudServices() {
  return (
    <>
  <section className="page-header">
    <div
      className="page-header-bg"
    style={{
      backgroundImage: "url(../assets/images/backgrounds/cloud-bg-1894x345.webp)"
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
          <li className="active">Cloud Services</li>
        </ul>
        <h2>Cloud Services</h2>
      </div>
    </div>
  </section>
  <CloudService />
</>
  )
}

export default CloudServices