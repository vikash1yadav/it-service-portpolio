import React from 'react'
import ITSecurityConsulting from '../../components/ITSecurityConsulting'
import Link from 'next/link'

function itsecurityconsulting() {
  return (
    <>
  <section className="page-header">
    <div
      className="page-header-bg"
      style={{
        backgroundImage: "url(../assets/images/backgrounds/imgpsh_fullsize_anim.webp)"
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
          <li className="active">IT Security Consulting</li>
        </ul>
        <h2>IT Security Consulting</h2>
      </div>
    </div>
  </section>
  <ITSecurityConsulting />
  
</>
  )
}

export default itsecurityconsulting