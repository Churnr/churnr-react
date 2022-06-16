import React from 'react'
import { Button } from 'react-bootstrap'
export default function Pricing() {
  return (
    <section id='pricing' className='pricing'>
      <div className='wrapper'>
        <h2>Build for free.<br></br>Pay <span className='shine'>after</span> the launch.</h2>
        <p>Vi garanterer industriens bedste service til den bedste pris.</p>
        <div className='pricing-cards'>
          <div className='card'>
            <h3>Salgsmøde</h3>
            <h4>uanset størrelse</h4>
            <hr></hr>
            <h5>0 DKK</h5>
            <h4>gratis og uforpligtende</h4>
            <Button variant="outline-dark">Kontakt os</Button>
            <ul>
              <li>Salgspunkt 1</li>
              <li>Salgspunkt 1</li>
              <li>Salgspunkt 1</li>
              <li>Salgspunkt 1</li>
              <li>Salgspunkt 1</li>
            </ul>
          </div>
          <div className='card'>
            <h3>Startup</h3>
            <h4>0-1000 kunder</h4>
            <hr></hr>
            <h5>1.999 DKK</h5>
            <h4>per måned - ingen binding</h4>
            <Button variant="primary">Bestil nu</Button>{' '}
            <ul>
              <li>Tilpasset e-mail flow</li>
              <li>Skræddersyede skabeloner</li>
              <li>Kunde dashboard</li>
              <li>Salgspunkt 1</li>
              <li>Salgspunkt 1</li>
            </ul>
          </div>
          <div className='card'>
            <h3>Pro</h3>
            <h4>+1000 kunder</h4>
            <hr></hr>
            <h5>Skræddersyet</h5>
            <h4>revideres halvårligt</h4>
            <Button variant="primary">Bestil nu</Button>{' '}
            <ul>
              <li>Skræddersyet opkalds flow</li>
              <li>24/7/365 support</li>
              <li>Salgspunkt 1</li>
              <li>Salgspunkt 1</li>
              <li>Salgspunkt 1</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}