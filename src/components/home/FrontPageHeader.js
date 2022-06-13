import React from 'react'
import {Button } from 'react-bootstrap'
export default function frontPageHeader() {
  return (
    <section className='frontpageheader'>
        <div className='wrapper'>
          <span>
            <h1>Betalingsfejl skal ikke stoppe dig</h1>
            <p>Alle abonnementsvirksomheder mister kunder pga. betalingsfejl. Lad os hjælpe med at fastholde jeres abonnementskunder.</p>
            <Button variant="primary">Vores løsning</Button>
            <Button variant="outline-light">Kontakt os</Button>
          </span>
          <img src={require('../../images/mockup.png')} alt=""/>
        </div>
    </section>
  )
}