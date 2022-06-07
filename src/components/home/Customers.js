import React from 'react'
export default function Navbar_site() {
  return (
    <section className='customers'>
        <div className='wrapper'>
          <h2>Vi arbejder sammen med disse fede virksomheder</h2>
          <div className='customers-ribbon'>
          <img src={require('../../images/spiritium.png')} alt=""></img>
          <img src={require('../../images/lpc.png')} alt=""></img>
            <img src={require('../../images/rista.png')} alt=""></img>
            <img src={require('../../images/ik.png')} alt=""></img>
            <img src={require('../../images/lalatoys.png')} alt=""></img>
          </div>
        </div>
    </section>
  )
}