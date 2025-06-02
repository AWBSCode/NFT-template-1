import React from 'react'
import SellerItem from './SellerItem'
import {sellersArr} from './sellersArr'
import './sellers.css'

export default function Sellers() {
  return (
    <section className='top-sellers'>
        <h1 className='sellers-heading py-5'>Top Sellers</h1>
        <ul>
          {
            sellersArr.map(seller => {
              return <SellerItem 
                avt={`${process.env.PUBLIC_URL}/avatars/avt${seller.id}.jpg`}
                name={seller.name}
                items={seller.items}
                order={seller.id}
              />
            })
          }
        </ul>
    </section>
  )
}
