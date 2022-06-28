import React from 'react'
export default function How() {
  return (
    <section id='how' className='how'>
      <div className='how-introduction'>
        <h2>Better business.<br></br>No extra work.</h2>
        <p>When you plug into Churn Buster, you have a payments recovery process backed by powerful automation and a dedicated team of retention pros.</p>
      </div>
      <div className='wrapper'>
        <div className='benefit-ribbon'>
          <div className='benefit'>
            <img src={require("../../images/overview.png")} alt="" />
            <h2>Stærkere overblik</h2>
            <p>Get past-due subscribers paid up in time for their next shipment.</p>
          </div>
          <div className='benefit'>
            <img src={require("../../images/improve-cx.png")} alt="" />
            <h2>Bedre kundeoplevelse</h2>
            <p>Make payment recovery easier for your support team, and even easier for your customers.</p>
          </div>
          <div className='benefit'>
            <img src={require("../../images/increase.png")} alt="" />
            <h2>Højere livstidsværdi</h2>
            <p>Extend subscriber lifetimes and funnel rescued revenue back into growth channels.</p>
          </div>
        </div>
      </div>
      <div className='mail-templates'>
        <span>
          <h2>Custom-tailored email campaigns</h2>
          <p>Level up your recovery with email campaigns proven highly effective for leading eCommerce brands, and backed by years of optimization and industry data.</p>
          <ul>
            <li>Done-for-you and proven effective</li>
            <li>Customized to your brand</li>
            <li>A/B testing, customer segmenting, and more</li>
          </ul>
        </span>
        <img src={require("../../images/mail-templates.png")} alt="" />
      </div>
    </section>
  )
}