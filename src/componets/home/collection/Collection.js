import React from 'react'
import Button from '../Button'
import './collection.css'

export default function Collection() {
    return (
        <section className='collection'>
            <main>
                <h1 className='text-gradient'>
                    Explore Our NFT Collection
                </h1>
                <p>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
                <Button text="Explore" />
            </main>

            <div className='img-container'>
                <div className='img' style={{"--data-img": `url(${process.env.PUBLIC_URL}/imgs/nft4.jpg)`}}></div>
            </div>
        </section>
    )
}
