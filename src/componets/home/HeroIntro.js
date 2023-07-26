import React from 'react'
import '../../css/heroIntro.css'
import Navbar from './Navbar'
import frog from "../../imgs/lion (3).jpg"
import Button from './Button'

export default function HeroIntro() {
    return (
        <section className='hero-intro'>
            <Navbar />

            <main className='content-container'>
                <div className='text-side'>
                    <h1 className='text-gradient'>Explore NFTs World,</h1>
                    <h2>You can collect, buy and sell extraordinary NFTs.</h2>
                    <p className='opacity-50'>
                        Welcome to the future, you can buy and sell awesome artworks form here. The world largest digital marketplace for non-fungible tokens.
                    </p>

                    <Button text="explore" />

                </div>
                <div className='img-side'>
                    <div className='img-wrapper'>
                        <img src={frog} width={280} className='img' />
                    </div>
                </div>
            </main>
        </section>
    )
}
