import React from 'react';

import '../../../App.css'
import '../../../css/featuredCollection.css'

export default function Collection() {
  return (
    <section className="featured-collection">
      <h1 className='text-gradient featured-heading'>Our Featured Collection</h1>

      <div className='collection-container' data-aos="flip-up">
        <div className='img' style={{ '--data-src': `url(${process.env.PUBLIC_URL + '/imgs/nft1.jpg'})` }}></div>

        <div className='img' id="middle" style={{ '--data-src': `url(${process.env.PUBLIC_URL + '/imgs/nft6.jpg'})` }}></div>

        <div className='img' style={{ '--data-src': `url(${process.env.PUBLIC_URL + '/imgs/nft3.jpg'})` }}></div>

      </div>

      {/* <div className='controllers-container'>
        <div className='controller right'>{">"}</div>
        <div className='controller left'>{"<"}</div>
      </div> */}
    </section>
  );
}

