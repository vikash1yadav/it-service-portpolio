
import React from 'react'
import UI from '../../components/UI'
import Link from 'next/link'

function uiuxdesigning() {
  return (
    <>
  <section className="page-header">
    <div
      className="page-header-bg"
      style={{
        backgroundImage: "url(../assets/images/backgrounds/ui-ux-bg-1894x345.webp"
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
          <li className="active">UI/UX Designing</li>
        </ul>
        <h2>UI/UX Designing</h2>
      </div>
    </div>
  </section>
  <UI />
  
</>

  )
}

export default uiuxdesigning