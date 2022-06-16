import React from 'react'
export default function Customers() {
  return (
    <section className='customers'>
      <div className='wrapper'>
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