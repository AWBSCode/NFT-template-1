import '../../css/btn.css'
import React from 'react'

export default function Button({text}) {
  return (
    <a className='my-btn'><span>{text}</span><i></i></a>
  )
}
