import React from 'react'
import { Button } from 'react-bootstrap'
export default function Navbar_site() {
  return (
    <section id="contact" className='calltoaction'>
      <div className='wrapper'>
        <h1>Lad os hjælpe hinanden</h1>
        <p>Book et møde med os i dag, og hør hvad vi kan gøre for jeres virksomhed</p>
        <Button variant="light" size="lg">Kontakt os</Button>
      </div>
    </section>
  )
}