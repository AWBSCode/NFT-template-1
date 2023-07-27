import React from 'react'
import '../../../css/heroIntro.css'
import Navbar from '../Navbar'
import Button from '../Button'

export default function HeroIntro() {
    return (
        <section className='hero-intro'>
            <Navbar />

            <main className='content-container'>
                <div className='text-side' data-aos="fade-up">
                    <h1 className='text-gradient'>Explore NFTs World,</h1>
                    <h2>You can collect, buy and sell extraordinary NFTs.</h2>
                    <p className='opacity-50'>
                        Welcome to the future, you can buy and sell awesome artworks form here. The world largest digital marketplace for non-fungible tokens.
                    </p>

                    <Button text="explore" />

                </div>
                <div className='img-side' data-aos="zoom-in">
                    <div className='img-wrapper'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/nft8.jpg`} width={ 280 } className='img img-fluid' />
                    </div>
                </div>
            </main>
        </section>
    )
}
