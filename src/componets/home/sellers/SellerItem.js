import React from 'react'

export default function SellerItem({avt, name, items, order}) {
    return (
        <li>
            <div className='avatar' style={{ "--data-avatar": `url(${avt})` }}></div>
            <div className='info'>
                <p>{name}</p>
                <p><span>{items}</span> item</p>
            </div>
            <h1 className='order-num'>#{order}</h1>
        </li>
    )
}
