import React from 'react'
import './steps.css'

export default function Steps() {
  return (
    <section className='steps'>

        {/* text side */}
        <main className='step-text-container'>
          {/* steps heading */}
          <h1 className='text-white pt-4'>Steps</h1>

          {/* step paragraph */}
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </main>

        {/* steps side */}
        {/* steps container */}
        <div className='steps-container' data-aos="zoom-in">
            <div className='step-item'>
              <h1 className='step-num'>01</h1>
              <h5 className='step-heading'>CONNECT YOUR WALLET</h5>
            </div>
            <div className='step-item'>
              <h1 className='step-num'>02</h1>
              <h5 className='step-heading'>SELECT YOUR QUANTITY</h5>
            </div>
            <div className='step-item'>
              <h1 className='step-num'>03</h1>
              <h5 className='step-heading'>CONFIRM THE TRANSACTION</h5>
            </div>
            <div className='step-item'>
              <h1 className='step-num'>04</h1>
              <h5 className='step-heading'>RECEIVE YOUR NFT’S</h5>
            </div>
        </div>
        {/* <Waves /> */}
    </section>
  )
}
