import React from 'react'
import './story.css'

export default function Story() {
  return (
    <section className='our-story'>
      <main className='container'>
        <h4 className='story-heading'>Our Story</h4>

        <img
          src={process.env.PUBLIC_URL + '/imgs/about/about.jpg'}
          className='img-fluid'
        />

        <article>
          <div className='row'>
            <p className='col'>
              We are a group of artists, technologists, and entrepreneurs who are passionate about NFT art. We believe that NFTs offer a new and exciting way to collect and appreciate art, and we are committed to making [NFT Website Name] the premier destination for NFT art.
            </p>
            <p className='col'>
              Our story began in 2022, when we met at a blockchain conference. We were all excited about the potential of NFTs, and we started talking about how we could use them to create a new kind of art platform.
            </p>
          </div>
          <div className='row'>
            <p className='col'>
              We spent the next few months brainstorming ideas and developing a business plan. In 2023, we launched [NFT Website Name] and started curating a collection of NFT artworks.
            </p>
            <p className='col'>
              We are now a team of over 10 people, and we are working hard to grow [NFT Website Name]. We are constantly adding new artworks to the collection, and we are always looking for new ways to engage with our community.
            </p>
          </div>
        </article>
      </main>
    </section>
  )
}
