
import React from 'react'
import WebDevelopment from '../../components/WebDevelopment'
import Link from 'next/link'

function webdevelopment() {
  return (
    <>
  <section className="page-header">
    <div
      className="page-header-bg"
      style={{
        backgroundImage: "url(../assets/images/backgrounds/web-dev-1894x345.webp)"
      }}
    ></div>
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
          <li className="active">Web Development</li>
        </ul>
        <h2>Web Development</h2>
      </div>
    </div>
  </section>
  <WebDevelopment />
  
</>
  )
}

export default webdevelopment