import React from 'react'
import Navbar from '../../global/Navbar'

export default function Intro() {
  return (
    <section style={{background: "rgb(27, 27, 27)"}}>
      <Navbar />

      <main className='container py-4'>
        <h3 className='text-center text-white'>Welcome, To <span className='text-gradient h2'>Super NFT</span></h3>

        <p className='text-white text-center w-50 mx-auto opacity-50'>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>
      </main>
    </section>
  )
}
