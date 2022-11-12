import React from 'react'
import Trainings from '../../components/Trainings'
import Link from 'next/link'

function trainings() {
  return (
    <>
  <section className="page-header">
    <div
      className="page-header-bg"
      style={{
        backgroundImage: "url(../assets/images/backgrounds/Hnet.com-image.jpg)"
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
          <li className="active">Trainings</li>
        </ul>
        <h2>Trainings</h2>
      </div>
    </div>
  </section>
  <Trainings />
  
</>
  )
}

export default trainings