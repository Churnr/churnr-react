import React from 'react'
import {Button } from 'react-bootstrap'
export default function Navbar_site() {
  return (
    <section className='frontpageheader'>
        <div className='wrapper'>
          <span>
            <h1>We got 99 problems, but churn ain't one</h1>
            <p>Alle abonnementsvirksomheder mister kunder pga. betalingsfejl. Lad os hjælpe med at fastholde jeres abonnementskunder.</p>
            <Button variant="success" size="lg">Vores løsning</Button>
            <Button variant="outline-light" size="lg">Kontakt os</Button>
          </span>
          <img src={require('../../images/test.png')} alt=""/>
        </div>
    </section>
  )
}