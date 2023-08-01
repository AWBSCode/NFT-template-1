import React from 'react'
import Intro from './intro/Intro'
import Story from './story/Story'
import Mission from './mission/Mission'

import './About.css'

export default function AboutPage() {
  return (
    <div className='About'>
      <Intro />
      <Story />
      <Mission />
    </div>
  )
}
