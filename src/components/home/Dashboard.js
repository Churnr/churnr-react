import React from 'react'
export default function Navbar_site() {
  return (
    <section className='dashboard'>
        <div className='wrapper'>
          <h2>Følg med i vores resultater</h2>
          <p>Med vores dashboard vil I kunne følge med i de resultater vi skaber. Dashboardet leveres skræddersyet til jer, i lige præcis det format I foretrækker.</p>
          <img src={require('../../images/dashboard.jpg')} alt=""></img>
        </div>
    </section>
  )
}