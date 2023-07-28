import React from 'react'
import '../../../css/sellers.css'

export default function Sellers() {
  return (
    <section>
        <h1 className='sellers-heading'>Top Sellers</h1>
        <ul>
          <li>
            <div className='avatar' data-src={`url(${process.env.PUBLIC_URL+'/avatars/avt1.jpg'})`}></div>
            <div className='info'>  
              <h3>Seller Name</h3>
              <p><span>12</span> item</p>
            </div>
            <h1 className='order-num'>#1</h1>
          </li>
        </ul>
    </section>
  )
}
