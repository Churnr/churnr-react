import React from 'react'
export default function Navbar_site() {
  return (
    <>
    <footer>
      <div>
      <img src={require('../../images/churnr-logo-white.png')} alt="" style={{height: "35px", margin: "0", padding: "0"}}/>
      </div>
      <div>
      </div>
      <div>
        <h6>Overview</h6>
        <p>Home</p>
        <p>Case Studies</p>
        <p>Priser</p>
        <p>Om os</p>
      </div>
      <div>
        <h6>Produkt</h6>
        <p>Home</p>
        <p>Case Studies</p>
        <p>Priser</p>
        <p>Om os</p>
      </div>
      <div>
        <h6>Virksomhed</h6>
        <p>Home</p>
        <p>Case Studies</p>
        <p>Priser</p>
        <p>Om os</p>
      </div>
    </footer>
    <div className='secondaryBar'><span>Copyright Churnr 2022</span><span>Cookieindstillinger / Privatlivsvilkår</span></div>
    </>
  )
}